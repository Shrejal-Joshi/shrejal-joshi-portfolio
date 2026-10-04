import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'
import { experiences, projects, skillGroups } from './data'

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo('top')} aria-label="Go to top">
            <span className="brand-mark">SJ</span>
            <span>Shrejal Joshi</span>
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['about', 'experience', 'work', 'skills', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)}>
                {item}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button className="icon-button" onClick={() => setDark((value) => !value)} aria-label="Toggle theme">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="menu-button icon-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy reveal">
            <div className="availability"><span /> Available for ambitious products & collaborations</div>
            <p className="kicker">SOFTWARE ENGINEER · FULL-STACK DEVELOPER</p>
            <h1>I build interfaces that feel <em>simple</em> and systems that scale.</h1>
            <p className="hero-text">
              I’m Shrejal — a software engineer focused on React, TypeScript and Node.js.
              I enjoy turning complex product requirements into clean, configurable and reliable experiences.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => scrollTo('work')}>View selected work <ArrowDownRight size={17} /></button>
              <a className="button ghost" href="mailto:shrejalj10@gmail.com">Let’s talk <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Bengaluru, India</span>
              <span><Code2 size={15} /> 4+ years building web products</span>
            </div>
          </div>

          <div className="hero-card reveal delay">
            <div className="card-top"><span>01 / ENGINEERING FOCUS</span><Sparkles size={17} /></div>
            <div className="code-window">
              <div className="window-dots"><i /><i /><i /></div>
              <pre>{`const engineer = {
  frontend: ["React", "TypeScript"],
  backend: ["Node.js", "APIs"],
  cloud: ["AWS", "GCP"],
  mindset: "product + systems"
}`}</pre>
            </div>
            <div className="hero-stat-row">
              <div><strong>UI</strong><span>Product thinking</span></div>
              <div><strong>API</strong><span>Scalable services</span></div>
              <div><strong>DX</strong><span>Reusable systems</span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-label">01 — ABOUT</div>
          <div className="about-grid">
            <div>
              <h2>Frontend-minded.<br /><span>Systems-aware.</span></h2>
            </div>
            <div className="about-copy">
              <p className="lead">I like being close to the product — understanding the problem, shaping the interaction and then making the engineering hold up behind it.</p>
              <p>My work spans enterprise platforms, operational products and independent product development. I’m strongest at the intersection of frontend architecture, API integration and reusable UI systems.</p>
              <div className="mini-list">
                {['Reusable component architecture', 'Configurable / low-code experiences', 'API-first product development', 'Performance, testing & maintainability'].map((item) => (
                  <span key={item}><Check size={15} /> {item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <div className="section-head">
            <div><div className="section-label">02 — EXPERIENCE</div><h2>Where I’ve been building.</h2></div>
            <span className="section-note">Selected professional experience</span>
          </div>
          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="experience" key={item.company}>
                <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
                <div className="experience-main">
                  <div className="experience-title">
                    <div><h3>{item.role}</h3><p>{item.company} · {item.location}</p></div>
                    <time>{item.period}</time>
                  </div>
                  <p className="experience-summary">{item.summary}</p>
                  <ul>{item.highlights.map((point) => <li key={point}>{point}</li>)}</ul>
                  <div className="tags">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section container">
          <div className="section-head">
            <div><div className="section-label">03 — SELECTED WORK</div><h2>Problems I like solving.</h2></div>
            <span className="section-note">Product · platform · engineering</span>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <p className="eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-impact">{project.impact}</div>
                <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-label">04 — TOOLKIT</div>
          <div className="skills-layout">
            <div><h2>A practical stack for <span>shipping.</span></h2><p>I choose tools based on the product and constraints — not the other way around.</p></div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skill-cloud">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section container">
          <div className="contact-card">
            <div>
              <div className="section-label">05 — CONTACT</div>
              <h2>Have a product worth<br /><span>building well?</span></h2>
              <p>I’m open to interesting engineering problems, product collaborations and conversations about building better software.</p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href="mailto:shrejalj10@gmail.com"><Mail size={17} /> shrejalj10@gmail.com</a>
              <a className="social-link" href="https://github.com/Shrejal-Joshi" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ExternalLink size={14} /></a>
              <a className="social-link" href="https://www.linkedin.com/in/shrejal-joshi/" target="_blank" rel="noreferrer"><ExternalLink size={18} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Shrejal Joshi</span>
        <span>Built with React · Designed for the web</span>
      </footer>
    </div>
  )
}

export default App
