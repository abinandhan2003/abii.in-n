import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="header__inner container">
        <NavLink to="/" className="header__logo" id="header-logo" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
          <motion.span
            animate={{ 
              clipPath: scrolled ? 'inset(0 100% 0 0)' : 'inset(0 0% 0 0)',
              opacity: scrolled ? 0 : 1
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ whiteSpace: 'nowrap' }}
          >
            Abi Nandhan
          </motion.span>
          <motion.span
            style={{ position: 'absolute', left: 0, whiteSpace: 'nowrap' }}
            initial={{ clipPath: 'inset(0 0 0 100%)', opacity: 0 }}
            animate={{ 
              clipPath: scrolled ? 'inset(0 0% 0 0)' : 'inset(0 0 0 100%)',
              opacity: scrolled ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            A\
          </motion.span>
        </NavLink>

        <nav className="header__nav" id="header-nav">
          <NavLink to="/" className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`} end>
            HOME
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}>
            ABOUT
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}>
            PROJECTS
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}>
            CONTACT
          </NavLink>
        </nav>

        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          id="header-burger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="header__mobile-nav"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <nav className="header__mobile-links">
              {['/', '/about', '/projects', '/contact'].map((path, i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) => `header__mobile-link ${isActive ? 'header__mobile-link--active' : ''}`}
                    end={path === '/'}
                  >
                    {path === '/' ? 'HOME' : path.slice(1).toUpperCase()}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
