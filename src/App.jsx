import './App.css'
import ProjectCard from './components/ProjectCard'
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const projects = [
  {
    title: 'Sistema de Inventário Avançado',
    description: 'Um sistema de inventário completo com suporte para itens, categorias e customização de UI.',
    video: 'https://www.youtube.com/embed/SGT2bxvnIvU', // Substitua com o link do seu vídeo
    link: '#' // Substitua com o link para o seu projeto
  },
  {
    title: 'Mapa de Aventura com Quests',
    description: 'Criação de um mapa interativo com sistema de quests, diálogos com NPCs e recompensas.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Substitua com o link do seu vídeo
    link: '#' // Substitua com o link para o seu projeto
  },
  {
    title: 'Minigame de Corrida',
    description: 'Desenvolvimento de um minigame de corrida com power-ups, diferentes pistas e placar de líderes.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Substitua com o link do seu vídeo
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
          <h1>Olá, eu sou o Guilherme</h1>
          <div className="subtitle">
            <Typewriter
              options={{
                strings: ['Scripter Roblox', 'Desenvolvedor de Jogos', 'Criador de Experiências'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </section>

        <section id="projects" data-aos="fade-up">
          <h2>Meus Projetos</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" data-aos="fade-up">
          <h2>Minhas Habilidades</h2>
          <div className="skills-container">
            <ul>
              <li>Luau (Roblox Lua)</li>
              <li>Knit</li>
              <li>React</li>
              <li>Typerwriter</li>
              <li>Github</li>
              <li>Programação Orientada a Objetos (OOP)</li>
              <li>Desenvolvimento de UI</li>
              <li>Gerenciamento de Dados (DataStores)</li>
              <li>Otimização e Performance</li>
            </ul>
          </div>
        </section>

        <section id="contact" data-aos="fade-up">
          <h2>Entre em Contato</h2>
          <p>Você pode me encontrar nas seguintes plataformas:</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Guilherme. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App