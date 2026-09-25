function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.image && <img src={project.image} alt={project.title} />}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tech-list">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
