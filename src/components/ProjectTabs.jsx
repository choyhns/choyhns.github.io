import { useMemo, useState } from "react";
import Section from "./Section.jsx";
import { projects } from "../data/projects.js";

export default function ProjectTabs() {
  const tabs = useMemo(() => projects, []);
  const [active, setActive] = useState(tabs[0]?.slug);

  const current = useMemo(
    () => tabs.find((p) => p.slug === active) || tabs[0],
    [active, tabs]
  );

  return (
    <Section
      id="projects"
      title="Projects"
      desc="탭을 선택하면 대표 화면과 핵심 기능 요약을 확인할 수 있습니다."
    >
      {/* Tabs */}
      <div className="tabs">
        {tabs.map((p) => (
          <button
            key={p.slug}
            className={`tab ${p.slug === active ? "active" : ""}`}
            onClick={() => setActive(p.slug)}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="project-panel">
        {/* left: screenshot */}
        <div className="card project-shot">
          <img src={current.screenshot} alt={`${current.title} screenshot`} />
        </div>

        {/* right: info */}
        <div className="card project-info">
          <div className="project-title-row">
            <div>
              <h3 className="project-title">{current.title}</h3>
              <p className="project-sub">{current.subtitle}</p>
            </div>
          </div>

          <div className="tag-row">
            {current.stack.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <ul className="bullets">
            {current.summary.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="card-actions">
            {current.links.repo ? (
              <a className="btn small" href={current.links.repo} target="_blank" rel="noreferrer">
                Repo
              </a>
            ) : null}
            {current.links.demo ? (
              <a className="btn small ghost" href={current.links.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            ) : null}
            {current.links.docs ? (
              <a className="btn small ghost" href={current.links.docs} target="_blank" rel="noreferrer">
                Docs
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
