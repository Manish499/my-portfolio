import './portfolio.css'
import heroImg from '../assets/manish-photo.jpg'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import { SiAngular, SiTypescript, SiReact, SiNodedotjs, SiDocker, SiJavascript, SiHtml5 } from 'react-icons/si'
import NavBar from './NavBar'
import RightTabs from './RightTabs'

export default function Portfolio() {
  return (
    <>
      <NavBar />
      <main className="portfolio container py-5">
        {/* <header className="d-flex align-items-center justify-content-between mb-4">
          <h1 className="m-0">Manish Mishra</h1>
        </header> */}

        <section className="hero row align-items-center mb-5" id="home">
          <div className="col-md-7 order-md-1 order-2">
            <div className="badge bg-light text-primary mb-3">Manager</div>
            <h2 className="display-4">Hi, I'm <strong className="text-primary">Manish Mishra</strong></h2>
            <p className="lead">Frontend Developer Team Lead — building scalable web applications and AI-powered solutions.</p>
            <div className="mt-4">
              <a className="btn btn-primary btn-lg me-2" href="#projects">View Projects</a>
              <a className="btn btn-outline-primary btn-lg" href="/Resume.pdf" download>Download Resume</a>
            </div>
          </div>
          <div className="col-md-5 text-center order-md-2 order-1 mb-4 mb-md-0">
            <img src={heroImg} className="rounded-circle profile-img" alt="Manish" width={240} height={240} />
          </div>
        </section>

        <section id="about" className="about mb-5">
          <div className="row align-items-start">
            <div className="col-lg-7 order-lg-1 order-2">
              <h3>About Me</h3>
              <p className="lead">I am a seasoned Frontend Developer Team Lead with over 11 years of experience building scalable web applications, leading high-performing teams, and integrating AI-driven solutions.</p>
              <p>My expertise includes Angular, React, TypeScript, advanced UI development, and Gen AI tooling. I focus on creating maintainable, performant frontends while mentoring developers and delivering business value.</p>
              <ol className="list-unstyled mt-3">
                <li>Led product development for large enterprise apps with Angular and React.</li>
                <li>Built AI-enhanced solutions using Claude AI, GPT models, Vertex AI, and automated code workflows.</li>
                <li>Delivered modern dashboards, analytics tools, and secure financial UIs.</li>
              </ol>
            </div>
            <div className="col-lg-5 order-lg-2 order-1 mb-4 mb-lg-0">
              <div className="p-4 rounded-4 border bg-light">
                <h5>Quick facts</h5>
                <p className="mb-1"><strong>Location:</strong> Pune, India</p>
                <p className="mb-1"><strong>Role:</strong> Frontend Developer Team Lead</p>
                <p className="mb-1"><strong>Experience:</strong> 11+ years</p>
                <p className="mb-0"><strong>Focus:</strong> UI, Angular, React, Gen AI, enterprise apps</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tech mb-5" id="skills">
          <h3>Tech Stack</h3>
          <div className="d-flex gap-3 flex-wrap mt-3">
            <div className="tech-item p-3 border rounded d-flex align-items-center gap-2">
              <SiAngular className="tech-icon text-danger" />
              Angular
            </div>
            <div className="tech-item p-3 border rounded d-flex align-items-center gap-2">
              <SiTypescript className="tech-icon text-primary" />
              TypeScript
            </div>
            <div className="tech-item p-3 border rounded d-flex align-items-center gap-2">
              <SiReact className="tech-icon text-info" />
              React
            </div>
            <div className="tech-item p-3 border rounded d-flex align-items-center gap-2">
              <SiJavascript className="tech-icon text-warning" />
              JavaScript
            </div>
            <div className="tech-item p-3 border rounded d-flex align-items-center gap-2">
              <SiHtml5 className="tech-icon text-danger" />
              HTML & CSS
            </div>
            <div className="tech-item p-3 border rounded d-flex align-items-center gap-2">
              GEN-AI
            </div>
            <div className="tech-item p-3 border rounded d-flex align-items-center gap-2">
              <SiNodedotjs className="tech-icon text-success" />
              Node.js
            </div>
          </div>
        </section>

        <section id="projects" className="featured mb-5">
          <h3>Featured Projects</h3>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src={reactLogo} className="card-img-top p-3" alt="project" />
                <div className="card-body">
                  <h5 className="card-title">Enterprise Dashboard</h5>
                  <p className="card-text">A comprehensive admin dashboard with analytics and reporting.</p>
                  <a href="#" className="card-link">Live Demo</a>
                  <a href="#" className="card-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src={viteLogo} className="card-img-top p-3" alt="project" />
                <div className="card-body">
                  <h5 className="card-title">AI Code Assistant</h5>
                  <p className="card-text">AI-powered tool to generate, explain and refactor code.</p>
                  <a href="#" className="card-link">Live Demo</a>
                  <a href="#" className="card-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src={reactLogo} className="card-img-top p-3" alt="project" />
                <div className="card-body">
                  <h5 className="card-title">E-commerce Platform</h5>
                  <p className="card-text">Full-stack e-commerce solution with admin panel.</p>
                  <a href="#" className="card-link">Live Demo</a>
                  <a href="#" className="card-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="py-4 text-center border-top">
          <p className="mb-1">📫 Let's connect: manishmishra499@gmail.com</p>
          <p className="small text-muted">Pune, India · Frontend Developer Team Lead · 11+ years</p>
        </footer>
      </main>
    </>
  )
}
