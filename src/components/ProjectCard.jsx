export default function ProjectCard({ p }) {
  const { title, subtitle, tags, period, highlights, links, screenshot } = p;

  const preview = highlights.slice(0, 2);

  return (
    <article className="card">
      {screenshot ? (
        <div className="card-thumb">
          <img src={screenshot} alt={`${title} thumbnail`} loading="lazy" />
        </div>
      ) : null}
      <div className="card-top">
        <div>
          <h3 className="card-title">{title}</h3>
          <p className="card-sub">{subtitle}</p>
        </div>
        <span className="badge">{period}</span>
      </div>

      <div className="tag-row">
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <ul className="bullets">
        {preview.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="card-actions">
        {links.repo ? (
          <a className="btn small" href={links.repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        ) : null}
        {links.demo ? (
          <a className="btn small ghost" href={links.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        ) : null}
        {links.docs ? (
          <a className="btn small ghost" href={links.docs} target="_blank" rel="noreferrer">
            Docs
          </a>
        ) : null}
      </div>
    </article>
  );
}
