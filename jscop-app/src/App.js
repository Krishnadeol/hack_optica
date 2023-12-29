
import React from 'react'
import ParticleRing from './components/ParticleRing'
import Navbar from './components/Navbar'
import MouseTrail from './components/MouseImageTrail';
import TiltCard from './components/TiltCard'
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel'
import { useEffect,useState } from 'react';
import Spiral from './components/Spiral'


function App() {

  const[Load,setLod]=useState(false);
  useEffect(()=>{
    setLod(true);
    setTimeout(()=>{
    setLod(false);
    },8000)
  },[])
  return (
    <>
  {Load ? <Spiral /> :  <div className='bg-[#10172a]'>
    <Navbar/>
    <ParticleRing/>
    <TiltCard/>
    <div className='py-20 px-20'><MouseTrail/></div>
    <HorizontalScrollCarousel/>
    

    </div>
  )
}

export default App
