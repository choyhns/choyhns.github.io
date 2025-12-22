import Section from "./Section.jsx";

const groups = [
  { title: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "JPA", "REST API"] },
  { title: "Frontend", items: ["React", "HTML/CSS", "MUI", "Responsive UI"] },
  { title: "DB", items: ["Oracle", "SQL", "Schema/ERD 설계", "Query 튜닝 기초"] },
  { title: "Dev/Etc", items: ["Git", "Docker(기초)", "배포 경험(Cloudtype 등)", "협업/문서화"] },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      desc="프로젝트에서 실제로 사용해 본 기술을 중심으로 정리했습니다."
    >
      <div className="skills-grid">
        <div className="card">
          <h3 className="card-title">Backend</h3>
          <div className="tag-row">
            <span className="tag">Java</span>
            <span className="tag">Spring Boot</span>
            <span className="tag">Spring MVC</span>
            <span className="tag">JPA</span>
            <span className="tag">REST API</span>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Frontend</h3>
          <div className="tag-row">
            <span className="tag">React</span>
            <span className="tag">HTML/CSS</span>
            <span className="tag">MUI</span>
            <span className="tag">Responsive UI</span>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">DB</h3>
          <div className="tag-row">
            <span className="tag">Oracle</span>
            <span className="tag">SQL</span>
            <span className="tag">Schema/ERD 설계</span>
            <span className="tag">Query 튜닝 기초</span>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Dev / Etc</h3>
          <div className="tag-row">
            <span className="tag">Git</span>
            <span className="tag">Docker(기초)</span>
            <span className="tag">배포 경험(Cloudtype)</span>
            <span className="tag">협업/문서화</span>
          </div>
        </div>
      </div>
    </Section>

  );
}
