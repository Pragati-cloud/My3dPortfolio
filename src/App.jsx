import { useState } from 'react'
import Hero from './assets/sections/hero.jsx'
import ShowCase from './assets/sections/ShowCase.jsx'
import Navbar from './assets/component/Navbar.jsx'
import Logosection from './assets/component/Logosection.jsx'
import FeatureCard from './assets/sections/FeatureCard.jsx'
import ExperienceSection from './assets/sections/ExperienceSection.jsx'
import Techstack from './assets/sections/TechStack.jsx'
import Contact from './assets/sections/Contact.jsx'
import Footer from './assets/sections/Footer.jsx'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowCase/>
    
    <FeatureCard/>
    <ExperienceSection/>
    <Techstack/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
