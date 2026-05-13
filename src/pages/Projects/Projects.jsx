import { motion } from 'framer-motion'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import Parallax from '../../components/Parallax'
import './Projects.css'

import projectsData from '../../data/projects.json'

export default function Projects() {
  const projects = projectsData;
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
                <a href={project.url} className="project-listing-card" target="_blank" rel="noopener noreferrer">
                  <div className="project-listing-card__image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-listing-card__number">
                      {String(project.id).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="project-listing-card__content">
                    <span className="project-listing-card__tag">{project.tag}</span>
                    <h3 className="project-listing-card__title">{project.title}</h3>
                    <p className="project-listing-card__desc">{project.desc}</p>
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
