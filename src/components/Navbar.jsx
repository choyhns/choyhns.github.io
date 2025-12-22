export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nav">
      <div className="nav-inner container">
        <button className="brand" onClick={() => scrollTo("top")}>
          choyhns
        </button>
        <nav className="nav-links">
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("timeline")}>Timeline</button>
          <button className="pill" onClick={() => scrollTo("contact")}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
