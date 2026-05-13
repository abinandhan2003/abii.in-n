import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimateOnScroll from '../../../components/AnimateOnScroll'
import Parallax from '../../../components/Parallax'
import '../../Projects/Projects.css'

import projectsData from '../../../data/projects.json'

export default function ProjectsPreview() {
  const navigate = useNavigate()
  const targetRef = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const projects = projectsData.slice(0, 10)

  // When scrolling down the section, move the grid horizontally to reveal the next 4 projects.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-155%"])

  return (
    <section ref={targetRef} className="projects-preview" id="projects-preview" style={{ 
      height: "250vh", 
      padding: 0, 
      backgroundColor: "#ffffff",
      backgroundImage: "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.08) 0px, rgba(0, 0, 0, 0.08) 1px, transparent 1px, transparent 24px)"
    }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
        <div className="container">
          <AnimateOnScroll animation="fadeUp">
            <div className="projects-preview__header">
              <h2 className="projects-preview__title">Selected Work</h2>
              <button className="projects-preview__link" onClick={() => navigate('/projects')}>
                View All Projects
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </AnimateOnScroll>

          <motion.div className="projects-grid" style={{ x }}>
            {projects.map((project, i) => (
              <AnimateOnScroll
                key={project.id}
                animation={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                delay={i * 0.1}
              >
                <Parallax speed={i % 2 === 0 ? 0.05 : -0.05}>
                  <div 
                    className="project-listing-card" 
                    onClick={() => {
                      if (project.url.startsWith('http')) {
                        window.open(project.url, '_blank')
                      } else {
                        navigate(project.url)
                      }
                    }}
                  >
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
                  </div>
                </Parallax>
              </AnimateOnScroll>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
