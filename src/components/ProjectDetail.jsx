import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = useMemo(
    () => projects.find((p) => p.slug === slug),
    [slug]
  );

  if (!project) {
    return (
      <div className="card">
        <h2>프로젝트를 찾을 수 없어요.</h2>
        <Link className="btn small" to="/">홈으로</Link>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="section-head" style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <h2 style={{ margin: 0 }}>{project.title}</h2>
          <p className="section-desc" style={{ marginTop: 6 }}>{project.subtitle}</p>
        </div>
        <Link className="btn ghost small" to="/">← Home</Link>
      </div>

      <div className="tag-row">
        {project.tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <h3 style={{ marginTop: 0 }}>내 역할 / 핵심 기여</h3>
        <ul className="bullets">
          {project.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>

        <div className="card-actions" style={{ marginTop: 12 }}>
          {project.links.repo && <a className="btn small" href={project.links.repo} target="_blank" rel="noreferrer">Repo</a>}
          {project.links.demo && <a className="btn small ghost" href={project.links.demo} target="_blank" rel="noreferrer">Demo</a>}
          {project.links.docs && <a className="btn small ghost" href={project.links.docs} target="_blank" rel="noreferrer">Docs</a>}
        </div>
      </div>

      <div className="detail-grid" style={{ marginTop: 14 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>UI 스크린샷</h3>
          <div className="shot-grid">
            {project.screens?.map((s) => (
              <figure key={s.src} className="shot">
                <img src={s.src} alt={s.alt || "screenshot"} />
                <figcaption className="muted">{s.caption}</figcaption>
              </figure>
            ))}
            {!project.screens?.length && <p className="muted">스크린샷을 추가해 주세요.</p>}
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>기능 설명</h3>
          <ol className="steps">
            {project.features?.map((f) => (
              <li key={f.title}>
                <div className="step-title">{f.title}</div>
                <div className="muted">{f.desc}</div>
              </li>
            ))}
            {!project.features?.length && <p className="muted">기능 설명을 추가해 주세요.</p>}
          </ol>
        </div>
      </div>
    </section>
  );
}
