import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:abinandhan77@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`
    window.open(mailtoLink, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <motion.main
      className="page contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="contact-hero" id="contact-hero">
        <div className="container">
          <motion.span
            className="contact-hero__label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            LET'S CONNECT
          </motion.span>
          <motion.h1
            className="contact-hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get In<br />Touch
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content container" id="contact-content">
        <div className="contact-content__grid">
          <div className="contact-content__left">
            <AnimateOnScroll animation="fadeLeft">
              <p className="contact-content__text">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Whether you have a question or just want to say hello,
                feel free to reach out.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp" delay={0.15}>
              <div className="contact-content__details">
                <div className="contact-detail">
                  <span className="contact-detail__label">EMAIL</span>
                  <a href="mailto:abinandhan77@gmail.com" className="contact-detail__value">
                    abinandhan77@gmail.com
                  </a>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail__label">PHONE</span>
                  <a href="tel:9092312162" className="contact-detail__value">
                    +91 9092312162
                  </a>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail__label">LOCATION</span>
                  <span className="contact-detail__value">Chennai, India</span>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp" delay={0.3}>
              <div className="contact-socials">
                <span className="contact-socials__label">FOLLOW ME</span>
                <div className="contact-socials__links">
                  <a href="https://github.com/abinandhan" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/abinandhan" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://x.com/abinandhan" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="contact-content__right">
            <AnimateOnScroll animation="fadeRight" delay={0.1}>
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <div className="form-group">
                  <label className="form-group__label" htmlFor="page-contact-name">HAY ABI, MY NAME IS</label>
                  <input
                    className="form-group__input"
                    type="text"
                    id="page-contact-name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-group__label" htmlFor="page-contact-email">MY EMAIL ADDRESS IS</label>
                  <input
                    className="form-group__input"
                    type="email"
                    id="page-contact-email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-group__label" htmlFor="page-contact-message">MY MESSAGE TO YOU</label>
                  <textarea
                    className="form-group__textarea"
                    id="page-contact-message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`contact-form__submit ${submitted ? 'contact-form__submit--sent' : ''}`}
                  id="page-contact-submit"
                >
                  {submitted ? 'MESSAGE SENT ✓' : 'SEND MESSAGE'}
                </button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer__inner">
            <span className="footer__copy">© 2024 Abi Nandhan. All rights reserved.</span>
            <span className="footer__credit">Designed & Developed with ♡</span>
          </div>
        </div>
      </footer>
    </motion.main>
  )
}
