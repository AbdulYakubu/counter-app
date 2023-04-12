import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import Pricing from '../Components/Pricing'
import Work from '../Components/Work'

function Project() {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="PROJECTS" text="Some of my most recent works"/>
      <Work />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Project