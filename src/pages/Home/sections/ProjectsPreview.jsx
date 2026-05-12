import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimateOnScroll from '../../../components/AnimateOnScroll'
import Parallax from '../../../components/Parallax'

const projects = [
  {
    id: 1,
    tag: 'WEB APPLICATION',
    title: 'E-Commerce Dashboard',
    desc: 'A modern admin dashboard built with React and real-time analytics visualization.',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    tag: 'UI/UX DESIGN',
    title: 'Portfolio Redesign',
    desc: 'A minimalist portfolio experience crafted with attention to typography and motion.',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    tag: 'MOBILE APP',
    title: 'Travel Companion',
    desc: 'Cross-platform travel planning application with itinerary management and social features.',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 4,
    tag: 'WEB APPLICATION',
    title: 'Study Abroad Platform',
    desc: 'Comprehensive student guidance platform with dynamic content and interactive elements.',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    id: 5,
    tag: 'BRANDING',
    title: 'Fintech Startup',
    desc: 'Brand identity and marketing website for a modern financial technology company.',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    id: 6,
    tag: 'E-COMMERCE',
    title: 'Artisan Marketplace',
    desc: 'A platform connecting local artisans with buyers globally, featuring custom storefronts.',
    color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
  {
    id: 7,
    tag: 'SaaS PLATFORM',
    title: 'Task Management',
    desc: 'Productivity tool designed for remote teams with real-time collaboration features.',
    color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  },
  {
    id: 8,
    tag: 'WEB3 DAPP',
    title: 'NFT Gallery',
    desc: 'Decentralized application for showcasing and trading digital artwork securely.',
    color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
  },
]

export default function ProjectsPreview() {
  const navigate = useNavigate()
  const targetRef = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // When scrolling down the section, move the grid horizontally to reveal the next 4 projects.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-104%"])

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
                  <div className="project-card" onClick={() => navigate('/projects')}>
                    <div className="project-card__image" style={{ background: project.color }}>
                      <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '3rem',
                        fontFamily: 'var(--font-serif)',
                        opacity: 0.5,
                      }}>
                        {String(project.id).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="project-card__content">
                      <div className="project-card__tag-row">
                        <span className="project-card__tag">{project.tag}</span>
                      </div>
                      <div className="project-card__title-row">
                        <h3 className="project-card__title">{project.title}</h3>
                      </div>
                      <div className="project-card__desc-row">
                        <p className="project-card__desc">{project.desc}</p>
                      </div>
                    </div>
                    
                    <div className="project-card__arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
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
