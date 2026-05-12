import { motion } from 'framer-motion'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import Parallax from '../../components/Parallax'
import { GitHubCalendar } from 'react-github-calendar'
import './About.css'
import Abipic from '../../../public/profile.png'

const badges = [
  { name: 'Google Cloud Certified', icon: '☁️', color: '#4285F4' },
  { name: 'React Developer', icon: '⚛️', color: '#61DAFB' },
  { name: 'JavaScript Expert', icon: '📜', color: '#F7DF1E' },
  { name: 'Open Source Contributor', icon: '🌟', color: '#FD8D14' },
  { name: 'UI/UX Specialist', icon: '🎨', color: '#FF6B6B' },
]

const certifications = [
  {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google — Coursera',
    date: '2024',
    icon: '🎓',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta — Coursera',
    date: '2024',
    icon: '📋',
  },
  {
    title: 'React — The Complete Guide',
    issuer: 'Udemy',
    date: '2023',
    icon: '⚛️',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2023',
    icon: '🏆',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2023',
    icon: '📱',
  },
]

export default function About() {
  return (
    <motion.main
      className="page about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="about-hero" id="about-hero">
        <div className="container">
          <motion.h1
            className="about-hero__title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About Abi.
          </motion.h1>
          <motion.div
            className="about-hero__line"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
      </section>

      {/* The Journey */}
      <section className="about-journey container" id="about-journey">
        <div className="about-journey__grid">
          <AnimateOnScroll animation="fadeLeft">
            <h2 className="about-journey__heading">The Journey</h2>
          </AnimateOnScroll>
          <div className="about-journey__content">
            <AnimateOnScroll animation="fadeRight" delay={0.1}>
              <p>
                I am a self-taught developer with a deep-rooted passion for front-end
                architecture and user interface design. My journey began with an innate curiosity
                about how digital spaces are constructed, leading me to relentlessly pursue mastery
                in crafting seamless, intuitive experiences.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeRight" delay={0.2}>
              <p>
                I focus on the intersection of aesthetic minimalism and robust functionality.
                Every line of code is an opportunity to reduce friction and elevate the visual
                dialogue between the user and the system. My self-directed education has instilled
                a discipline of continuous learning and an uncompromising standard for quality.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className="about-profiles" id="about-profiles">
        <div className="container">
          <div className="profiles-grid">
            {/* GitHub Profile */}
            <div className="profile-column">
              <AnimateOnScroll animation="fadeUp">
                <h2 className="about-section-title">GitHub Profile</h2>
              </AnimateOnScroll>

              <AnimateOnScroll animation="scaleUp" delay={0.15} className="profile-card-wrapper">
                <Parallax speed={0.06} className="profile-card-wrapper">
                  <div className="github-card">
                    <div className="github-card__header">
                      <div className="github-card__avatar">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <div className="github-card__info">
                        <h3>Abi Nandhan</h3>
                        <a href="https://github.com/abinandhan2003" target="_blank" rel="noopener noreferrer" className="github-card__username">
                          @abinandhan2003
                        </a>
                      </div>
                    </div>
                    <p className="github-card__bio">
                      Frontend Developer passionate about building beautiful, accessible web experiences.
                      Open source enthusiast.
                    </p>
                    <div className="github-card__stats">
                      <div className="github-card__stat">
                        <span className="github-card__stat-value">20+</span>
                        <span className="github-card__stat-label">Repositories</span>
                      </div>
                      <div className="github-card__stat">
                        <span className="github-card__stat-value">150+</span>
                        <span className="github-card__stat-label">Contributions</span>
                      </div>
                      <div className="github-card__stat">
                        <span className="github-card__stat-value">10+</span>
                        <span className="github-card__stat-label">Stars</span>
                      </div>
                    </div>
                    <a href="https://github.com/abinandhan" target="_blank" rel="noopener noreferrer" className="github-card__link">
                      View Profile →
                    </a>
                  </div>
                </Parallax>
              </AnimateOnScroll>
            </div>

            {/* Google Developer Profile */}
            <div className="profile-column">
              <AnimateOnScroll animation="fadeUp">
                <h2 className="about-section-title">Google Developer Profile</h2>
              </AnimateOnScroll>

              <AnimateOnScroll animation="scaleUp" delay={0.15} className="profile-card-wrapper">
                <Parallax speed={-0.05} className="profile-card-wrapper">
                  <div className="gdg-card">
                    <div className="gdg-card__logo">
                      <img src={Abipic} width={150} height={150} style={{ borderRadius: '50%' }} alt="Abi Nandhan" />
                    </div>
                    <div className="gdg-card__content">
                      <h3 className="gdg-card__name">Abi Nandhan</h3>
                      <p className="gdg-card__role">Google Developer Group Member</p>
                      <p className="gdg-card__desc">
                        Active member of the Google Developer community, participating in events, workshops,
                        and contributing to the developer ecosystem.
                      </p>
                    </div>
                    <a href="https://developers.google.com/" target="_blank" rel="noopener noreferrer" className="gdg-card__link">
                      View Profile →
                    </a>
                  </div>
                </Parallax>
              </AnimateOnScroll>
            </div>
          </div>
        </div>

        {/* GitHub Contributions */}
        <div className="flex justify-center w-full px-4" id="about-contributions" style={{ marginTop: '4rem' }}>
          <AnimateOnScroll animation="fadeUp">
            <div className="bg-[#0d1117] rounded-2xl shadow-lg mx-auto border text-white border-[#1e2329]" style={{ padding: '2rem' }}>
              <div className="flex justify-center overflow-x-auto">
                <div className="min-w-max">
                  <GitHubCalendar
                    className='text-white'
                    username="abinandhan2003"
                    blockSize={14}
                    blockMargin={5}
                    colorScheme="dark"
                    fontSize={14}
                    showColorLegend={false}
                    showTotalCount={false}
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      {/* Certifications */}
      <section className="about-certifications container" id="about-certifications">
        <AnimateOnScroll animation="fadeUp">
          <h2 className="about-section-title">Certifications</h2>
        </AnimateOnScroll>

        <div className="certifications-list">
          {certifications.map((cert, i) => {
            let spanClass = 'span-1';
            let isVertical = false;

            if (i === 0) { spanClass = 'span-2'; }
            else if (i === 1) { spanClass = 'span-1'; isVertical = true; }
            else if (i === 2) { spanClass = 'span-1'; isVertical = true; }
            else if (i === 3) { spanClass = 'span-2'; }
            else if (i === 4) { spanClass = 'span-3'; }

            const speed = i % 2 === 0 ? 0.4 : 0.8;

            return (
              <AnimateOnScroll key={cert.title} animation="fadeUp" delay={i * 0.08} className={`cert-bento-item ${spanClass}`}>
                <Parallax speed={speed} className="cert-bento-parallax">
                  <div className={`cert-card ${isVertical ? 'cert-card--vertical' : ''}`}>
                    <div className="cert-card__icon-container">
                      <span className="cert-card__icon">{cert.icon}</span>
                    </div>
                    <div className="cert-card__content">
                      <div className="cert-card__title-row">
                        <h4 className="cert-card__title">{cert.title}</h4>
                      </div>
                      <div className="cert-card__issuer-row">
                        <p className="cert-card__issuer">{cert.issuer}</p>
                      </div>
                      <div className="cert-card__date-row">
                        <span className="cert-card__date">{cert.date}</span>
                      </div>
                    </div>
                    <div className="cert-card__arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Parallax>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>
    </motion.main>
  )
}
