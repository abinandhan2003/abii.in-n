import { motion } from 'framer-motion'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import Parallax from '../../components/Parallax'
import './Projects.css'

const projects = [
  {
    id: 1,
    tag: 'WEB APPLICATION',
    title: 'E-Commerce Dashboard',
    desc: 'A modern admin dashboard built with React featuring real-time analytics visualization, inventory management, and responsive design for seamless cross-device experiences.',
    tech: ['React', 'Chart.js', 'TailwindCSS'],
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    link: '#',
  },
  {
    id: 2,
    tag: 'UI/UX DESIGN',
    title: 'Portfolio Redesign',
    desc: 'A minimalist portfolio experience crafted with meticulous attention to typography, whitespace, and motion design. Built with React and Framer Motion.',
    tech: ['React', 'Framer Motion', 'CSS'],
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    link: '#',
  },
  {
    id: 3,
    tag: 'MOBILE APP',
    title: 'Travel Companion',
    desc: 'Cross-platform travel planning application with itinerary management, social features, and offline-first architecture for travelers on the go.',
    tech: ['React Native', 'Firebase', 'Maps API'],
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    link: '#',
  },
  {
    id: 4,
    tag: 'WEB APPLICATION',
    title: 'Study Abroad Platform',
    desc: 'Comprehensive student guidance platform with dynamic content management, interactive destination pages, and an integrated inquiry system.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    link: '#',
  },
  {
    id: 5,
    tag: 'WEB APPLICATION',
    title: 'Catering Management System',
    desc: 'Full-featured catering menu platform with cart functionality, quantity management, and inquiry submission for event catering services.',
    tech: ['React', 'Context API', 'CSS Grid'],
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    link: '#',
  },
  {
    id: 6,
    tag: 'DESIGN SYSTEM',
    title: 'Component Library',
    desc: 'A reusable component library with consistent design tokens, accessible patterns, and comprehensive documentation for rapid UI development.',
    tech: ['React', 'Storybook', 'CSS Variables'],
    color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    link: '#',
  },
]

export default function Projects() {
  return (
    <motion.main
      className="page projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="projects-hero" id="projects-hero">
        <div className="container">
          <motion.span
            className="projects-hero__label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PORTFOLIO
          </motion.span>
          <motion.h1
            className="projects-hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Selected<br />Projects
          </motion.h1>
          <motion.p
            className="projects-hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            A curated collection of work that represents my passion for clean code,
            thoughtful design, and seamless user experiences.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-listing container" id="projects-listing">
        <div className="projects-listing__grid">
          {projects.map((project, i) => (
            <AnimateOnScroll
              key={project.id}
              animation="fadeUp"
              delay={i % 2 === 0 ? 0 : 0.15}
            >
              <Parallax speed={i % 2 === 0 ? 0.04 : -0.04}>
                <a href={project.link} className="project-listing-card" target="_blank" rel="noopener noreferrer">
                  <div className="project-listing-card__image" style={{ background: project.color }}>
                    <div className="project-listing-card__number">
                      {String(project.id).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="project-listing-card__content">
                    <span className="project-listing-card__tag">{project.tag}</span>
                    <h3 className="project-listing-card__title">{project.title}</h3>
                    <p className="project-listing-card__desc">{project.desc}</p>
                    <div className="project-listing-card__tech">
                      {project.tech.map(t => (
                        <span key={t} className="project-listing-card__tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </Parallax>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </motion.main>
  )
}
