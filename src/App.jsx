import './App.css'
import ProjectCard from './components/ProjectCard'
import Chatbot from './components/Chatbot'
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

const projects = [
  {
    title: 'Server-Side Drone System',
    description: 'A drone system with chasing and attack systems.',
    video: 'https://www.youtube.com/embed/SGT2bxvnIvU', // Substitua com o link do seu vídeo
    link: '#' // Substitua com o link para o seu projeto
  },
  {
    title: 'A elevator system',
    description: 'A elevator system for games with 2+ places.',
    video: 'https://www.youtube.com/embed/tYSgt4xSKGk', // Substitua com o link do seu vídeo
    link: '#' // Substitua com o link para o seu projeto
  },
    {
    title: 'Checkpoint Saving System',
    description: 'A checkpoint saving system for obby games.',
    video: 'https://www.youtube.com/embed/ZlUNj4mtnKw', // Substitua com o link do seu vídeo
    link: '#' // Substitua com o link para o seu projeto
  }
];

function App() {

  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="hero" data-aos="fade-in">
          <h1>Hi, I'm Guilherme, also known as <span style={{
            background: "linear-gradient(90deg, #ff0000, #ffff00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold"
          }}>MC_Worker</span></h1>

          <div className="subtitle">
            <Typewriter
              options={{
                strings: ['Roblox Scripter', 'Game Developer', 'Script Analyst', 'Luau Programmer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </section>

        <section id="projects" data-aos="fade-up">
          <h2>Examples of my work</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" data-aos="fade-up">
          <h2>Which concepts can I apply in my scripts?</h2>
          <div className="skills-container">
            <ul>
              <li>Client-Server Connections (RemoteEvents/RemoteFunctions/BindableEvents)</li>
              <li>Modularity (ModuleScripts)</li>
              <li>Thermal Throttling (Rate limiting)</li>
              <li>Manipulation with Coroutines/task</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>Data Handler (DataStores)</li>
              <li>Collection Service Handler</li>
              <li>Dirty flag pattern</li>
              <li>And more!</li>
            </ul>
          </div>
        </section>

        <section id="contact" data-aos="fade-up">
          <h2>Contact</h2>
          <p>You can contact me at anytime!</p>
          <div className="social-links">
            <a href="https://discord.com/users/1136755556036644878" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Guilherme. All rights reserved.</p>
      </footer>
      <Chatbot />
    </div>
  )
}

export default App