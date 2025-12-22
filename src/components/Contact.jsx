import Section from "./Section.jsx";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" desc="편하게 연락 주세요.">
      <div className="contact">
        <a className="btn" href="mailto:your.email@example.com">
          Email
        </a>
        <a className="btn ghost" href="https://github.com/choyhns" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn ghost" href="#" target="_blank" rel="noreferrer">
          Notion (선택)
        </a>
      </div>
      <p className="muted" style={{ marginTop: 12 }}>
        * Email/Notion 링크는 네 주소로 바꿔줘.
      </p>
    </Section>
  );
}
