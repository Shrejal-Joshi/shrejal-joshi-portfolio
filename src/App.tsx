import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Sphere, Stars, TorusKnot } from '@react-three/drei'
import * as THREE from 'three'
import {
  ArrowDownRight, ArrowUpRight, Check, Code2, ExternalLink, Github,
  Mail, MapPin, Menu, Moon, Sparkles, Sun, X
} from 'lucide-react'
import { experiences, projects, skillGroups } from './data'

function Scene() {
  const knot = useRef<THREE.Mesh>(null)
  const orb = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (knot.current) {
      knot.current.rotation.x += delta * 0.16
      knot.current.rotation.y += delta * 0.24
    }
    if (orb.current) {
      orb.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.18
    }
  })

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 4]} intensity={18} color="#a98cff" />
      <pointLight position={[-4, -2, 2]} intensity={9} color="#4c7dff" />
      <Stars radius={8} depth={5} count={900} factor={2.2} saturation={0} fade speed={0.35} />
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.6}>
        <TorusKnot ref={knot} args={[1.18, 0.34, 180, 32]} scale={1.15}>
          <meshStandardMaterial color="#9a7bff" metalness={0.75} roughness={0.18} wireframe />
        </TorusKnot>
      </Float>
      <Sphere ref={orb} args={[0.18, 24, 24]} position={[1.8, 1.1, 0.2]}>
        <meshStandardMaterial color="#c5b7ff" emissive="#7c5cff" emissiveIntensity={2.2} />
      </Sphere>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </>
  )
}

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    const onMove = (event: MouseEvent) => {
      setPointer({ x: event.clientX / window.innerWidth - 0.5, y: event.clientY / window.innerHeight - 0.5 })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [dark])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="grid-bg" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />

      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo('top')} aria-label="Go to top">
            <span className="brand-mark">SJ</span><span>Shrejal Joshi</span>
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['about', 'experience', 'work', 'skills', 'contact'].map(item =>
              <button key={item} onClick={() => scrollTo(item)}>{item}</button>
            )}
          </div>
          <div className="nav-actions">
            <button className="icon-button" onClick={() => setDark(v => !v)} aria-label="Toggle theme">
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="menu-button icon-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="availability"><span /> Open to ambitious products & collaborations</div>
            <p className="kicker">SOFTWARE ENGINEER · FULL-STACK DEVELOPER</p>
            <h1>Engineering the <em>future</em> of web experiences.</h1>
            <p className="hero-text">I’m Shrejal — a React, TypeScript and Node.js engineer who turns complex product requirements into clean, configurable and reliable digital experiences.</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => scrollTo('work')}>Explore my work <ArrowDownRight size={17} /></button>
              <a className="button ghost" href="mailto:shrejalj10@gmail.com">Let’s talk <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14} /> Bengaluru, India</span>
              <span><Code2 size={14} /> 4+ years building web products</span>
            </div>
          </div>

          <div className="scene-shell" style={{ transform: `perspective(1100px) rotateX(${pointer.y * -3}deg) rotateY(${pointer.x * 5}deg)` }}>
            <div className="scene-glow" />
            <Canvas camera={{ position: [0, 0, 5.2], fov: 43 }} dpr={[1, 1.5]}>
              <Scene />
            </Canvas>
            <div className="scene-label"><Sparkles size={14} /> INTERACTIVE / 3D</div>
            <div className="scene-corner">REACT · THREE.JS<br />MOTION SYSTEM</div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-label">01 — ABOUT</div>
          <div className="about-grid">
            <h2>Frontend-minded.<br /><span>Systems-aware.</span></h2>
            <div className="about-copy">
              <p className="lead">I like being close to the product — understanding the problem, shaping the interaction and making the engineering hold up behind it.</p>
              <p>My work spans enterprise platforms, operational products and independent product development. I’m strongest at the intersection of frontend architecture, API integration and reusable UI systems.</p>
              <div className="mini-list">{['Reusable component architecture','Configurable / low-code experiences','API-first product development','Performance, testing & maintainability'].map(item =>
                <span key={item}><Check size={15} /> {item}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <div className="section-head"><div><div className="section-label">02 — EXPERIENCE</div><h2>Where I’ve been building.</h2></div><span className="section-note">Selected professional experience</span></div>
          <div className="timeline">{experiences.map((item, index) =>
            <article className="experience" key={item.company}>
              <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
              <div className="experience-main">
                <div className="experience-title"><div><h3>{item.role}</h3><p>{item.company} · {item.location}</p></div><time>{item.period}</time></div>
                <p className="experience-summary">{item.summary}</p>
                <ul>{item.highlights.map(point => <li key={point}>{point}</li>)}</ul>
                <div className="tags">{item.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          )}</div>
        </section>

        <section id="work" className="section container">
          <div className="section-head"><div><div className="section-label">03 — SELECTED WORK</div><h2>Problems I like solving.</h2></div><span className="section-note">Product · platform · engineering</span></div>
          <div className="project-grid">{projects.map((project, index) =>
            <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-impact">{project.impact}</div>
              <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="card-orb" />
            </article>
          )}</div>
        </section>

        <section id="skills" className="section container">
          <div className="section-label">04 — TOOLKIT</div>
          <div className="skills-layout">
            <div><h2>A practical stack for <span>shipping.</span></h2><p>I choose tools based on the product and constraints — not the other way around.</p></div>
            <div className="skill-groups">{skillGroups.map(group =>
              <div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-cloud">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></div>
            )}</div>
          </div>
        </section>

        <section id="contact" className="contact-section container">
          <div className="contact-card">
            <div><div className="section-label">05 — CONTACT</div><h2>Have a product worth<br /><span>building well?</span></h2><p>I’m open to interesting engineering problems, product collaborations and conversations about building better software.</p></div>
            <div className="contact-actions">
              <a className="button primary" href="mailto:shrejalj10@gmail.com"><Mail size={17} /> shrejalj10@gmail.com</a>
              <a className="social-link" href="https://github.com/Shrejal-Joshi" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ExternalLink size={14} /></a>
              <a className="social-link" href="https://www.linkedin.com/in/shrejal-joshi/" target="_blank" rel="noreferrer"><ExternalLink size={18} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container"><span>© {new Date().getFullYear()} Shrejal Joshi</span><span>Built with React · SCSS · Three.js</span></footer>
    </div>
  )
}
export default App
