// src/components/ProjectDetail.jsx
import { useEffect, useMemo, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [onlyMine, setOnlyMine] = useState(false);

  // ✅ 한 장 슬라이드 인덱스
  const [activeIdx, setActiveIdx] = useState(0);

  // (선택) 트랙 ref 유지: 버튼/도트 클릭 시 scrollIntoView로 움직이게
  const sliderRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  const nav = useMemo(() => {
    const idx = projects.findIndex((p) => p.slug === slug);
    const prev = idx > 0 ? projects[idx - 1] : null;
    const next = idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : null;
    return { prev, next };
  }, [slug]);

  const myKeywords = useMemo(() => {
    if (!project) return [];
    return Array.isArray(project.myScreensKeywords) ? project.myScreensKeywords : [];
  }, [project]);

  const screensComputed = useMemo(() => {
    const all = project?.screens ?? [];
    if (!all.length) return { ordered: [], mine: [] };
    if (!myKeywords.length) return { ordered: all, mine: [] };

    const mine = all.filter((s) => myKeywords.some((k) => (s.caption || "").includes(k)));
    const rest = all.filter((s) => !myKeywords.some((k) => (s.caption || "").includes(k)));
    return { ordered: [...mine, ...rest], mine };
  }, [project, myKeywords]);

  const screensToShow = useMemo(() => {
    if (!project?.screens?.length) return [];
    if (!myKeywords.length) return screensComputed.ordered;
    return onlyMine ? screensComputed.mine : screensComputed.ordered;
  }, [project, myKeywords, onlyMine, screensComputed]);

  // ✅ 토글/프로젝트 변경 시 인덱스 초기화
  useEffect(() => {
    setActiveIdx(0);
  }, [slug, onlyMine, screensToShow.length]);

  // ✅ activeIdx를 트랙에 반영(한 장씩 스냅)
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const slides = el.querySelectorAll(".shot-slide");
    const target = slides[activeIdx];
    if (target) target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, [activeIdx]);

  const clampIndex = (i) => {
    const max = Math.max(0, screensToShow.length - 1);
    return Math.min(Math.max(i, 0), max);
  };

  const prevSlide = () => setActiveIdx((i) => clampIndex(i - 1));
  const nextSlide = () => setActiveIdx((i) => clampIndex(i + 1));
  const goToIndex = (i) => setActiveIdx(clampIndex(i));

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <div className="card">
            <h2>프로젝트를 찾을 수 없어요.</h2>
            <p className="muted">URL이 잘못되었거나 프로젝트 데이터가 없을 수 있어요.</p>
            <div className="card-actions">
              <Link className="btn" to="/">
                홈으로
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const links = project.links || {};
  const hasLinks = Boolean(links.repo || links.demo || links.docs);

  const currentSlide = screensToShow[activeIdx];

  return (
    <section className="section project-detail">
      <div className="container">
        {/* Top nav */}
        <div
          className="detail-nav-bar"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: 18 }}
        >
          <Link className="btn ghost" to="/#projects">
            ← Projects
          </Link>
          <div style={{ display: "flex", gap: 12 }}>
            {nav.prev ? (
              <Link className="btn small ghost" to={`/project/${nav.prev.slug}`}>
                ← {nav.prev.title}
              </Link>
            ) : null}
            {nav.next ? (
              <Link className="btn small ghost" to={`/project/${nav.next.slug}`}>
                {nav.next.title} →
              </Link>
            ) : null}
          </div>
        </div>

        {/* Header */}
        <div className="card">
          <div className="detail-header">
            <div className="detail-head-left">
              <h1 className="project-title">{project.title}</h1>
              <p className="project-sub">{project.subtitle}</p>

              {project.highlights?.length ? (
                <p className="muted" style={{ marginTop: 8 }}>
                  <b>My Role:</b> {project.highlights[0]}
                </p>
              ) : null}

              <div className="tag-row" style={{ marginTop: 10, flexWrap: "wrap" }}>
                {(project.tags || []).map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              {project.stack?.length ? (
                <div className="muted" style={{ marginTop: 10 }}>
                  <b>Stack:</b> {project.stack.join(" · ")}
                </div>
              ) : null}
            </div>

            {/* ✅ 카드 크기에 맞는 hero 이미지 박스 */}
            <div className="detail-head-right">
              <div className="detail-hero-shot detail-hero-fit">
                {project.screenshot ? (
                  <img src={project.screenshot} alt={`${project.title} 대표 화면`} />
                ) : (
                  <div className="muted">대표 이미지를 추가해 주세요.</div>
                )}
              </div>
            </div>
          </div>

          {hasLinks ? (
            <div className="card-actions" style={{ marginTop: 12, display: "flex", gap: 14, flexWrap: "wrap" }}>
              {links.repo ? (
                <a className="btn small" href={links.repo} target="_blank" rel="noreferrer">
                  Repo로 이동 →
                </a>
              ) : null}
              {links.demo ? (
                <a className="btn small" href={links.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              ) : null}
              {links.docs ? (
                <a className="btn small ghost" href={links.docs} target="_blank" rel="noreferrer">
                  Docs
                </a>
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Overview / Highlights */}
        <div className="grid-2" style={{ marginTop: 28, marginBottom: 28 }}>
          <div className="card">
            <h3 className="card-title">Overview</h3>
            {project.summary?.length ? (
              <ul className="bullets">
                {project.summary.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            ) : (
              <p className="muted">summary를 추가해 주세요.</p>
            )}
          </div>

          <div className="card" style={{marginTop: 18}}>
            <h3 className="card-title">Highlights</h3>
            {project.highlights?.length ? (
              <ul className="bullets">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : (
              <p className="muted">highlights를 추가해 주세요.</p>
            )}
          </div>
        </div>

        {/* My Contributions */}
        <div className="card" style={{ marginTop: 18 }}>
          <h3 className="card-title">My Contributions</h3>
          <p className="muted" style={{ marginTop: 4 }}>
            내가 담당한 기능을 중심으로 정리했습니다.
          </p>

          {project.features?.length ? (
            <ol className="steps" style={{ marginTop: 10 }}>
              {project.features.map((f) => (
                <li key={f.title}>
                  <div className="step-title">{f.title}</div>
                  <div className="muted">{f.desc}</div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="muted">features를 추가해 주세요.</p>
          )}
        </div> 

        {/* ✅ Troubleshooting */}
        {project.troubleshooting?.length ? (
          <div className="card" style={{ marginTop: 18 }}>
            <h3 className="card-title">Troubleshooting</h3>
            <p className="muted" style={{ marginTop: 4 }}>
              프로젝트 진행 중 겪은 문제와 해결 과정입니다.
            </p>

            <div className="troubleshooting-list" style={{ marginTop: 16 }}>
              {project.troubleshooting.map((t, idx) => (
                <div className="troubleshooting-item" key={idx}>
                  <div className="ts-header">
                    <span className="ts-badge">Issue {idx + 1}</span>
                    <h4 className="ts-problem">{t.problem}</h4>
                  </div>
                  <div className="ts-body">
                    <div className="ts-row">
                      <span className="ts-label">원인</span>
                      <span className="ts-content">{t.cause}</span>
                    </div>
                    <div className="ts-row">
                      <span className="ts-label">해결</span>
                      <span className="ts-content">{t.solution}</span>
                    </div>
                    <div className="ts-row ts-result">
                      <span className="ts-label">결과</span>
                      <span className="ts-content">{t.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* ✅ Screens (state 기반 1장 슬라이더) */}
        <div className="card" style={{ marginTop: 18 }}>
          <div className="row-between" style={{ alignItems: "center" }}>
            <div>
              <h3 className="card-title">Screens</h3>
              <p className="muted" style={{ marginTop: 4 }}>
                이미지 1장 + 설명 1개씩 넘기며 확인할 수 있습니다.
              </p>
            </div>

            <div className="shot-controls">
              {myKeywords.length ? (
                <label className="muted shot-toggle">
                  <input
                    type="checkbox"
                    checked={onlyMine}
                    onChange={(e) => setOnlyMine(e.target.checked)}
                  />
                  내 담당만
                </label>
              ) : null}

              <button
                className="btn small ghost"
                onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
                disabled={activeIdx <= 0}
              >
                ←
              </button>

              <div className="shot-counter muted">
                {screensToShow.length ? `${activeIdx + 1} / ${screensToShow.length}` : "0 / 0"}
              </div>

              <button
                className="btn small ghost"
                onClick={() => setActiveIdx((i) => Math.min(screensToShow.length - 1, i + 1))}
                disabled={activeIdx >= screensToShow.length - 1}
              >
                →
              </button>
            </div>
          </div>

          {!screensToShow.length ? (
            <p className="muted">screens를 추가해 주세요.</p>
          ) : (
            <>
              {/* ✅ 여기서 “1장만” 렌더링 */}
              <article className="shot-single">
                <div className="shot-img-one">
                  <img
                    src={screensToShow[activeIdx].src}
                    alt={screensToShow[activeIdx].alt || screensToShow[activeIdx].caption || "screen"}
                    loading="lazy"
                  />
                </div>

                <div className="shot-body-one">
                  <div className="shot-topline">
                    <span className="shot-index">{String(activeIdx + 1).padStart(2, "0")}</span>
                    <h4 className="shot-title">{screensToShow[activeIdx].caption}</h4>
                  </div>

                  <p className="shot-desc">
                    {screensToShow[activeIdx].detail
                      ? screensToShow[activeIdx].detail
                      : "설명(detail)을 추가하면 여기에 표시됩니다."}
                  </p>
                </div>
              </article>

              {/* ✅ 도트: setActiveIdx만 호출하므로 100% 반응 */}
              <div className="shot-dots">
                {screensToShow.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`shot-dot ${i === activeIdx ? "active" : ""}`}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>


        {/* Bottom nav */}
        <div
          className="detail-nav-bar"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: 18 }}
        >
          <Link className="btn ghost" to="/#projects">
            ← Projects
          </Link>
          <div style={{ display: "flex", gap: 12 }}>
            {nav.prev ? (
              <Link className="btn small ghost" to={`/project/${nav.prev.slug}`}>
                ← {nav.prev.title}
              </Link>
            ) : null}
            {nav.next ? (
              <Link className="btn small ghost" to={`/project/${nav.next.slug}`}>
                {nav.next.title} →
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
