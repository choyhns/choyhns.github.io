export default function Section({ id, title, desc, children }) {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <h2>{title}</h2>
        {desc ? <p className="section-desc">{desc}</p> : null}
      </div>
      {children}
    </section>
  );
}
