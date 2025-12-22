export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nav">
      <div className="nav-inner container">
        <button className="brand" onClick={() => scrollTo("top")}>choyhns</button>
        <nav className="nav-links">
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button className="pill" onClick={() => scrollTo("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
