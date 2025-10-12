import './App.css'
import ProjectCard from './components/ProjectCard'
import Chatbot from './components/Chatbot'
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Server-Side Drone System',
    description: 'A drone system with chasing and attack systems.',
    video: 'https://www.youtube.com/embed/SGT2bxvnIvU', // Replace with your video link
    link: '#' // Replace with your project link
  },
  {
    title: 'A elevator system',
    description: 'A elevator system for games with 2+ places.',
    video: 'https://www.youtube.com/embed/tYSgt4xSKGk', // Replace with your video link
    link: '#' // Replace with your project link
  },
    {
    title: 'Racing Minigame',
    description: 'Development of a racing minigame with power-ups, different tracks, and a leaderboard.',
    video: 'https://www.youtube.com/embed/tYSgt4xSKGk', // Replace with your video link
    link: '#' // Replace with your project link
  }
];

function App() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="hero" data-aos="fade-in">
          <h1>Hello, I'm Guilherme</h1>
          <div className="subtitle">
            <Typewriter
              options={{
                strings: ['Roblox Scripter', 'Game Developer', 'Experience Creator'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </section>

        <section id="projects" data-aos="fade-up">
          <h2>My Projects</h2>
          <div className="project-carousel">
            <Slider {...sliderSettings}>
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Slider>
          </div>
        </section>

        <section id="skills" data-aos="fade-up">
          <h2>My Skills</h2>
          <div className="skills-container">
            <ul>
              <li>Luau (Roblox Lua)</li>
              <li>Knit</li>
              <li>React</li>
              <li>Typewriter</li>
              <li>Github</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>UI Development</li>
              <li>Data Management (DataStores)</li>
              <li>Optimization and Performance</li>
            </ul>
          </div>
        </section>

        <section id="contact" data-aos="fade-up">
          <h2>Contact</h2>
          <p>You can contact me at anytime in any of these platforms:</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
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