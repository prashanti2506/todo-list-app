import "./App.css";

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <h2>Prashanti</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <p className="small-title">HELLO, I'M</p>

          <h1>Prashanti 👋</h1>

          <h2>B.Tech CSE Student & Software Developer</h2>

          <p>
            I am a Computer Science Engineering student passionate about
            software development, programming, and problem solving.
            I enjoy building projects and learning new technologies.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a
              href="https://github.com/prashanti2506"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-box">
            <span>&lt;</span>
            <span>Developer</span>
            <span>/&gt;</span>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-title">ABOUT ME</p>

        <h2>Building. Learning. Growing. 🚀</h2>

        <p className="section-text">
          I am a B.Tech Computer Science Engineering student interested
          in software development. I am currently developing my skills
          in Java, Python, SQL, and Data Structures and Algorithms.
          <br />
          <br />
          I enjoy building projects, solving coding problems, exploring
          new technologies, and continuously improving my programming skills.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-title">MY SKILLS</p>

        <h2>Technologies & Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">Java ☕</div>
          <div className="skill-card">Python 🐍</div>
          <div className="skill-card">C</div>
          <div className="skill-card">SQL 🗄️</div>
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React ⚛️</div>
          <div className="skill-card">Git & GitHub</div>
          <div className="skill-card">DSA 🧠</div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-title">MY WORK</p>

        <h2>Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Student Management System</h3>

            <p>
              A Python-based student management system that allows users
              to add, view, search, update, and delete student records.
            </p>

            <span>Python</span>
          </div>

          <div className="project-card">
            <h3>To-Do List App</h3>

            <p>
              A simple task-management web application where users can
              add, complete, filter, and delete daily tasks.
            </p>

            <span>HTML • CSS • JavaScript</span>

            <br />
            <br />

            <a
              href="https://github.com/prashanti2506/todo-list-app"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          <div className="project-card">
            <h3>LeetCode Solutions</h3>

            <p>
              A collection of coding solutions created while improving
              problem-solving skills and practicing Data Structures
              and Algorithms.
            </p>

            <span>DSA • LeetCode</span>
          </div>

        </div>
      </section>

      <section className="section">
        <p className="section-title">EDUCATION</p>

        <h2>B.Tech Computer Science Engineering</h2>

        <p className="section-text">
          Currently pursuing B.Tech in Computer Science Engineering
          and developing strong foundations in programming, software
          development, databases, and problem solving.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <p className="section-title">CONTACT</p>

        <h2>Let's Connect 🤝</h2>

        <p>
          I'm always interested in learning, collaborating, and building
          interesting projects.
        </p>

        <div className="contact-buttons">
          <a
            href="https://github.com/prashanti2506"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            GitHub
          </a>

          <a
           href="https://www.linkedin.com/in/prashanti-prashanti-23572743a/"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Prashanti • Built with React ⚛️</p>
      </footer>

    </div>
  );
}

export default App;