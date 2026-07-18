import SectionHeading from "../components/common/SectionHeading";
import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeading
        eyebrow="03 / Featured work"
        title="Products built around real problems."
        copy="Project status and planned features are labelled clearly. Replace the concept panels with real screenshots as you complete each build."
      />
      <div className="project-list">
        {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
      </div>
    </section>
  );
}

export default Projects;
