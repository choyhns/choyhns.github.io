export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} choyhns</span>
        <span className="muted">Built with React + Vite</span>
      </div>
    </footer>
  );
}
