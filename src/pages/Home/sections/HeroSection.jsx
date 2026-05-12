import { motion } from 'framer-motion'
import Parallax from '../../../components/Parallax'

export default function HeroSection() {
  return (
    <section className="hero" id="hero-section">
      <div className="hero__lines-bg" />

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__label-row">
            <motion.span
              className="hero__label"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Building websites, apps, and experiences that don’t just work — they leave an impression.
            </motion.span>
          </div>

          <div className="hero__title-row">
            <Parallax speed={0.2}>
              <motion.h1
                className="hero__name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{ fontFamily: "'Newsreader', serif", fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 400, letterSpacing: '-0.02em', color: '#1a1a1a' }}
              >
                Abi Nandhan
              </motion.h1>
            </Parallax>
          </div>

          <div className="hero__meta-row">
            <motion.div
              className="hero__meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span>Create. Innovate. Elevate.</span>
            </motion.div>
          </div>

          <div className="hero__tagline-row">
            <motion.p
              className="hero__tagline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Step into my portfolio and discover where creativity meets passion, innovation fuels design, and every project tells a story.
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}
