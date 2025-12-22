import Section from "./Section.jsx";

const groups = [
  { title: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "JPA", "REST API"] },
  { title: "Frontend", items: ["React", "HTML/CSS", "MUI", "Responsive UI"] },
  { title: "DB", items: ["Oracle", "SQL", "Schema/ERD 설계", "Query 튜닝 기초"] },
  { title: "Dev/Etc", items: ["Git", "Docker(기초)", "배포 경험(Cloudtype 등)", "협업/문서화"] },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills" desc="프로젝트에서 사용해 본 기술을 묶어서 정리했습니다.">
      <div className="grid">
        {groups.map((g) => (
          <div key={g.title} className="card">
            <h3 className="card-title">{g.title}</h3>
            <div className="tag-row">
              {g.items.map((x) => (
                <span className="tag" key={x}>
                  {x}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
