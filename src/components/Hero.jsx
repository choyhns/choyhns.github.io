export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div>
          <p className="kicker">Portfolio</p>
          <h1 className="headline">
            백엔드 중심 풀스택 개발자
            <br />
            <span className="accent">조용환(choyhns)</span>
          </h1>
          <p className="subhead">
            Spring/React 기반 프로젝트에서 <b>DB 설계</b>, <b>정산/도메인 로직</b>,
            <b> 병합/충돌 관리</b> 경험을 쌓았습니다.
          </p>

          <div className="hero-cta">
            <a className="btn" href="#projects">
              프로젝트 보기
            </a>
            <a className="btn ghost" href="https://github.com/choyhns" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div className="chips">
            <span className="chip">Spring Boot</span>
            <span className="chip">React</span>
            <span className="chip">Oracle / SQL</span>
            <span className="chip">JPA</span>
            <span className="chip">Node</span>
          </div>
        </div>

        <div className="hero-card">
          <h3>Quick Summary</h3>
          <ul>
            <li>DB 설계/ERD → 구현까지 연결</li>
            <li>정산/주문/상태 플로우 등 비즈니스 로직 정리</li>
            <li>Git 병합/충돌 해결, 협업 규칙 정리</li>
          </ul>
          <div className="mini">
            <div className="mini-box">
              <div className="mini-num">3+</div>
              <div className="mini-label">Projects</div>
            </div>
            <div className="mini-box">
              <div className="mini-num">Spring</div>
              <div className="mini-label">Main Stack</div>
            </div>
            <div className="mini-box">
              <div className="mini-num">DB</div>
              <div className="mini-label">Strength</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
