import AnimateOnScroll from '../../../components/AnimateOnScroll'

const techSkills = ['React JS', 'Node JS', 'Mango DB', 'Express JS', 'Flutter', 'DevOps', 'Docker', 'Firebase', 'PostgreSQL', 'HTML5', 'TailwindCSS', 'CSS3', 'Git']
const traits = ['UI/UX Design', 'Critical Thinking', 'Rapid Prototyping', 'Problem Solving', 'Responsive Design', 'Performance']

export default function ExpertiseSection() {
  return (
    <section className="expertise" id="expertise-section">
      <div className="container expertise__container">
        <div className="expertise__grid">
          <div className="expertise__left">
            <div className="expertise__title-row">
              <AnimateOnScroll animation="fadeLeft">
                <h2 className="expertise__title">
                  Expertise &<br />Capabilities
                </h2>
              </AnimateOnScroll>
            </div>
            <div className="expertise__code-row">
              <AnimateOnScroll animation="fadeUp" delay={0.3}>
                <div className="expertise__terminal">
                  <div className="expertise__terminal-header">
                    <span className="expertise__terminal-icon">&lt;/&gt;</span>
                    <span className="expertise__terminal-title">Bash</span>
                  </div>

                  <div className="expertise__terminal-line">
                    <span className="expertise__terminal-prompt">&gt;</span>
                    <span className="expertise__terminal-command">npx abi-portfolio</span>
                  </div>

                  <div className="expertise__terminal-line" style={{ marginTop: '1.5rem' }}>
                    <span className="expertise__terminal-success">✔</span>
                    <span className="expertise__terminal-output">Loading skills</span>
                  </div>

                  <div className="expertise__terminal-line" style={{ marginTop: '1.5rem' }}>
                    <span className="expertise__terminal-prompt">&gt;</span>
                    <span className="expertise__terminal-command"><span className="cmd-echo">echo</span> TECHNICAL PROFICIENCIES</span>
                  </div>

                  <div className="expertise__terminal-line" style={{ marginTop: '1.5rem' }}>
                    <span className="expertise__terminal-prompt">&gt;</span>
                    <span className="expertise__terminal-command"><span className="cmd-echo">echo</span> PROFESSIONAL TRAITS</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          <div className="expertise__right">
            <div className="expertise__category-row">
              <AnimateOnScroll animation="fadeRight" delay={0.1}>
                <div className="expertise__category">
                  <h4 className="expertise__category-label">TECHNICAL PROFICIENCIES</h4>
                  <div className="expertise__tags">
                    {techSkills.map((skill, i) => (
                      <span key={skill} className="expertise__tag" style={{ animationDelay: `${i * 0.05}s` }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="expertise__category-row">
              <AnimateOnScroll animation="fadeRight" delay={0.25}>
                <div className="expertise__category">
                  <h4 className="expertise__category-label">PROFESSIONAL TRAITS</h4>
                  <div className="expertise__tags">
                    {traits.map((trait, i) => (
                      <span key={trait} className="expertise__tag" style={{ animationDelay: `${i * 0.05}s` }}>
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
