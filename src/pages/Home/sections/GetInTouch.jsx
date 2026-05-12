import { useState } from 'react'
import AnimateOnScroll from '../../../components/AnimateOnScroll'

export default function GetInTouch() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // mailto fallback
    const mailtoLink = `mailto:abinandhan77@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.name} (${formData.email})`
    window.open(mailtoLink, '_blank')
  }

  return (
    <section className="get-in-touch" id="get-in-touch">
      <div className="container">
        <div className="get-in-touch__grid">
          <div className="get-in-touch__left">
            <AnimateOnScroll animation="fadeLeft">
              <h2 className="get-in-touch__title">GET IN<br />TOUCH!</h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp" delay={0.15}>
              <p className="get-in-touch__subtitle">
                Thank you for your interest in my portfolio...<br />
                Please fill in the form below to get in touch.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp" delay={0.3}>
              <div className="get-in-touch__info">
                <div className="get-in-touch__info-item">Abi Nandhan</div>
                <div className="get-in-touch__info-item">
                  <a href="tel:9092312162">9092312162</a>
                </div>
                <div className="get-in-touch__info-item">
                  <a href="mailto:abinandhan77@gmail.com">abinandhan77@gmail.com</a>
                </div>
                <div className="get-in-touch__info-item">
                  <a href="https://maps.google.com/?q=Chennai" target="_blank" rel="noopener noreferrer">
                    Chennai
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="get-in-touch__right">
            <AnimateOnScroll animation="fadeRight" delay={0.1}>
              <form className="get-in-touch__form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-group__label" htmlFor="contact-name">HAY ABI, MY NAME IS</label>
                  <input
                    className="form-group__input"
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-group__label" htmlFor="contact-email">MY EMAIL ADDRESS IS</label>
                  <input
                    className="form-group__input"
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-group__label" htmlFor="contact-message">MY MESSAGE TO YOU</label>
                  <textarea
                    className="form-group__textarea"
                    id="contact-message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </div>

                <button type="submit" className="get-in-touch__submit" id="contact-submit">
                  SEND MESSAGE
                </button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
