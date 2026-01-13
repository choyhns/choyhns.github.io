// src/components/ProjectDetail.jsx
import { useEffect, useMemo, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [onlyMine, setOnlyMine] = useState(false);

  // ✅ slider refs / handlers
  const sliderRef = useRef(null);

  const scrollByCard = (dir) => {
    const el = sliderRef.current;
    if (!el) return;

    const card = el.querySelector(".shot-slide");
    const w = card ? card.getBoundingClientRect().width : 420;

    el.scrollBy({ left: dir * (w + 16), behavior: "smooth" });
  };

  const goToIndex = (idx) => {
    const el = sliderRef.current;
    if (!el) return;

    const slides = el.querySelectorAll(".shot-slide");
    const target = slides[idx];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

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

  return (
    <section className="section project-detail">
      <div className="container">
        {/* Top bar */}
        <div className="detail-topbar">
          <Link className="btn ghost" to="/#projects">
            ← Projects
          </Link>

          <div className="detail-nav">
            {nav.prev ? (
              <Link className="btn small ghost" to={`/project/${nav.prev.slug}`}>
                ← {nav.prev.title}
              </Link>
            ) : (
              <span />
            )}
            {nav.next ? (
              <Link className="btn small ghost" to={`/project/${nav.next.slug}`}>
                {nav.next.title} →
              </Link>
            ) : (
              <span />
            )}
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

            <div className="detail-head-right">
              {project.screenshot ? (
                <div className="detail-hero-shot">
                  <img src={project.screenshot} alt={`${project.title} 대표 화면`} />
                </div>
              ) : (
                <div className="detail-hero-shot muted">대표 이미지를 추가해 주세요.</div>
              )}
            </div>
          </div>

          {hasLinks ? (
            <div className="card-actions" style={{ marginTop: 12 }}>
              {links.repo ? (
                <a className="btn small" href={links.repo} target="_blank" rel="noreferrer">
                  Repo
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
        <div className="grid-2" style={{ marginTop: 18 }}>
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

          <div className="card">
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

        {/* Screens (Slider) */}
        <div className="card" style={{ marginTop: 18 }}>
          <div className="row-between" style={{ alignItems: "center" }}>
            <div>
              <h3 className="card-title">Screens</h3>
              <p className="muted" style={{ marginTop: 4 }}>
                카드 슬라이드로 화면과 설명을 빠르게 확인할 수 있습니다.
              </p>
            </div>

            <div className="shot-controls">
              {myKeywords.length ? (
                <label className="muted shot-toggle">
                  <input
                    type="checkbox"
                    checked={onlyMine}
                    onChange={(e) => {
                      setOnlyMine(e.target.checked);
                      // 토글 시 첫 카드로 이동(선택)
                      setTimeout(() => goToIndex(0), 0);
                    }}
                  />
                  내 담당만
                </label>
              ) : null}

              <button className="btn small ghost" onClick={() => scrollByCard(-1)} aria-label="prev">
                ←
              </button>
              <button className="btn small ghost" onClick={() => scrollByCard(1)} aria-label="next">
                →
              </button>
            </div>
          </div>

          {screensToShow.length ? (
            <>
              <div className="shot-track" ref={sliderRef}>
                {screensToShow.map((s, idx) => (
                  <article className="shot-slide" key={s.src}>
                    <div className="shot-img">
                      <img src={s.src} alt={s.alt || s.caption || "screen"} loading="lazy" />
                    </div>

                    <div className="shot-body">
                      <div className="shot-topline">
                        <span className="shot-index">{String(idx + 1).padStart(2, "0")}</span>
                        <h4 className="shot-title">{s.caption}</h4>
                      </div>

                      {s.detail ? (
                        <p className="shot-desc">{s.detail}</p>
                      ) : (
                        <p className="shot-desc muted">설명(detail)을 추가하면 여기에 표시됩니다.</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <div className="shot-dots">
                {screensToShow.map((_, i) => (
                  <button
                    key={i}
                    className="shot-dot"
                    onClick={() => goToIndex(i)}
                    aria-label={`go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <p className="muted">screens를 추가해 주세요.</p>
          )}
        </div>

        {/* Bottom nav */}
        <div className="detail-bottom-nav" style={{ marginTop: 18 }}>
          <Link className="btn ghost" to="/#projects">
            ← 목록으로
          </Link>
          <div className="detail-nav">
            {nav.prev ? (
              <Link className="btn small ghost" to={`/project/${nav.prev.slug}`}>
                ← {nav.prev.title}
              </Link>
            ) : null}
            {nav.next ? (
              <Link className="btn small" to={`/project/${nav.next.slug}`}>
                Next: {nav.next.title} →
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
