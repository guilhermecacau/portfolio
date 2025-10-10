import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card" data-aos="fade-up">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
      </div>
    </div>
  )
}

export default ProjectCard
