import { useNavigate } from 'react-router-dom'
import AnimateOnScroll from '../../../components/AnimateOnScroll'
import Parallax from '../../../components/Parallax'
import abipic from '../../../../public/profile.png'

export default function ProfileCard() {
  const navigate = useNavigate()

  return (
    <section className="profile-card-section container" id="profile-card-section">
      <Parallax speed={1.5}>
        <AnimateOnScroll animation="fadeUp" duration={0.8}>
          <div className="profile-card" onClick={() => navigate('/about')} role="button" tabIndex={0}>
            <div className="profile-card__avatar">
              <img src={abipic} alt="" />
            </div>

            <div className="profile-card__info">
              <div className="profile-card__name-row">
                <h3 className="profile-card__name">Abi Nandhan</h3>
              </div>

              <div className="profile-card__role-row">
                <p className="profile-card__role">Frontend Engineer — Self-taught Developer</p>
              </div>

              <div className="profile-card__bio-row">
                <p className="profile-card__bio">
                  A self-taught developer with a deep-rooted passion for front-end architecture
                  and user interface design. Click to learn more about my journey.
                </p>
              </div>
            </div>

            <div className="profile-card__arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </AnimateOnScroll>
      </Parallax>
    </section>
  )
}
