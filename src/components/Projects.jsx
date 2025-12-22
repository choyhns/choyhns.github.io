import Section from "./Section.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      desc="실제로 구현한 기능 중심으로 정리했습니다. (Repo/시연/문서 링크는 계속 업데이트)"
    >
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
