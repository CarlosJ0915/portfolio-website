import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
