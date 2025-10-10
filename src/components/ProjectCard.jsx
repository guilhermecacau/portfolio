import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card" data-aos="fade-up">
      <div className="project-video">
        <iframe
          src={project.video}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
      </div>
    </div>
  )
}

export default ProjectCard
