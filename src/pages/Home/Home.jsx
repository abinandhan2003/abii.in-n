import { motion } from 'framer-motion'
import HeroSection from './sections/HeroSection'
import ProfileCard from './sections/ProfileCard'
import ProjectsPreview from './sections/ProjectsPreview'
import ExpertiseSection from './sections/ExpertiseSection'
import GetInTouch from './sections/GetInTouch'
import './Home.css'

export default function Home() {
  return (
    <motion.main
      className="page home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ProfileCard />
      <ProjectsPreview />
      <ExpertiseSection />
      <GetInTouch />
    </motion.main>
  )
}
