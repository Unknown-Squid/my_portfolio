"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';

const Home = () => {

  return (
    <main className='bg-emerald-400 h-fit w-full flex flex-col relative'>

        <Navbar/>
        <Hero/>
        <AboutMe/>

    </main>
  )
}

export default Home
