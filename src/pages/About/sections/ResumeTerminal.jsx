import React from 'react'
import AnimateOnScroll from '../../../components/AnimateOnScroll'

export default function ResumeTerminal() {
  return (
    <section className="about-resume" id="about-resume">
      <div className="container">
        <AnimateOnScroll animation="fadeUp" delay={0.2}>
          <div className="resume-terminal">
            <div className="resume-terminal__header">
              <div className="resume-terminal__buttons">
                <span className="dot dot--red"></span>
                <span className="dot dot--yellow"></span>
                <span className="dot dot--green"></span>
              </div>
              <div className="resume-terminal__title">abi_nandhan — resume.md</div>
            </div>

            <div className="resume-terminal__body">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">cat resume.md</span>
              </div>

              <div className="resume-content">
                <header className="resume-header">
                  <h1 className="resume-name">Abi Nandhan</h1>
                  <p className="resume-contact">Chennai, India 600045 | 9092312162 | abinandhan77@gmail.com</p>
                </header>

                <section className="resume-section">
                  <h3 className="resume-section-title">SUMMARY</h3>
                  <p>Experienced Web Developer specializing in creating dynamic and responsive web applications using React JS and Tailwind CSS. Adept at building scalable front-end solutions with a strong focus on user experience and performance. Proficient in leveraging modern development tools and practices to deliver high-quality, maintainable code.</p>
                </section>

                <section className="resume-section">
                  <h3 className="resume-section-title">SKILLS</h3>
                  <ul className="resume-skills-list">
                    <li>React JS</li>
                    <li>Node JS</li>
                    <li>Mango DB</li>
                    <li>Express JS</li>
                    <li>Flutter</li>
                    <li>DevOps</li>
                    <li>Docker</li>
                    <li>Firebase</li>
                    <li>PostgreSQL</li>
                    <li>HTML5</li>
                    <li>TailwindCSS</li>
                    <li>CSS3</li>
                    <li>Git</li>
                  </ul>
                </section>

                <section className="resume-section">
                  <h3 className="resume-section-title">WORK HISTORY</h3>
                  <div className="resume-item">
                    <h4 className="resume-item-header">Nexcap - Web, Mobile, and Desktop App Solutions</h4>
                    <p className="resume-item-sub">Frontend Developer | Vellore, India | March 2023 to Current</p>
                    <ul className="resume-item-bullets">
                      <li>Enhanced user experience by optimizing web applications for maximum speed, scalability, and increased customer satisfaction.</li>
                      <li>Collaborated with back-end developers to improve website functionality and integrate new features.</li>
                      <li>Coded using Tailwind CSS and JavaScript to develop features for both mobile and desktop platforms.</li>
                    </ul>
                  </div>
                </section>

                <section className="resume-section">
                  <h3 className="resume-section-title">EDUCATION</h3>
                  <div className="resume-item">
                    <h4 className="resume-item-header">Bachelor of Engineering - Computer Science and Engineering</h4>
                    <p className="resume-item-sub">Dhanalakshmi College of Engineering | Chennai, India | Expected June 2025</p>
                    <p className="resume-item-meta">CGPA: 8.06</p>
                  </div>
                  <div className="resume-item">
                    <h4 className="resume-item-header">Higher Secondary Education</h4>
                    <p className="resume-item-sub">Kurinji Matriculation Higher Secondary School | Harur, India | May 2021</p>
                    <p className="resume-item-meta">Final Grade: 80%</p>
                  </div>
                </section>

                <section className="resume-section">
                  <h3 className="resume-section-title">CERTIFICATIONS</h3>
                  <ul className="resume-cert-list">
                    <li>Web Design – IIT Delhi</li>
                    <li>React JS – Great Learning</li>
                    <li>CSS & JS – Udemy</li>
                    <li>JavaScript – Great Learning</li>
                  </ul>
                </section>

                <section className="resume-section">
                  <h3 className="resume-section-title">HOBBIES</h3>
                  <p>I love exploring new websites, discovering interesting technologies, and keeping up with the latest trends and news.</p>
                </section>

                <section className="resume-section">
                  <h3 className="resume-section-title">PROFILES</h3>
                  <ul className="resume-profiles-list">
                    <li>LinkedIn – <a href="https://www.linkedin.com/in/abi-web-nandhan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/abi-web-nandhan</a></li>
                    <li>Instagram – <a href="https://www.instagram.com/a.b.i_an/" target="_blank" rel="noopener noreferrer">instagram.com/a.b.i_an</a></li>
                    <li>X (Twitter) – <a href="https://x.com/abiwebdev003" target="_blank" rel="noopener noreferrer">x.com/abiwebdev003</a></li>
                    <li>GitHub – <a href="https://github.com/abinandhan2003" target="_blank" rel="noopener noreferrer">github.com/abinandhan2003</a></li>
                  </ul>
                </section>
              </div>

              <div className="terminal-line" style={{ marginTop: '2rem' }}>
                <span className="terminal-prompt">$</span>
                <span className="terminal-cursor"></span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
