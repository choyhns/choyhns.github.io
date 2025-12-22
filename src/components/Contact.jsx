import Section from "./Section.jsx";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" desc="편하게 연락 주세요.">
      <div className="contact">
        <a className="btn" href="mailto:choyhns@naver.com">
          Email
        </a>
        <a className="btn ghost" href="https://github.com/choyhns" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </Section>
  );
}
