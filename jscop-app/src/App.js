import React from 'react'
import ParticleRing from './components/ParticleRing'
import Navbar from './components/Navbar'
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel'

function App() {
  return (
    <div className='bg-[#10172a]'>
    <Navbar/>
     <ParticleRing/>
     <HorizontalScrollCarousel/>
     
    </div>
  )
}

export default App