import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import { Featured } from './components/Featured'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'

function App() {
  return (
    // <div className='w-full h-screen bg-zinc-900 text-white'>
    <div className='w-full h-screen bg-[#f1f1f1]'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App