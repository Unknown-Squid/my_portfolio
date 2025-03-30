"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import MyProjects from './Components/MyProjects';
import ContactMe from './Components/ContactMe';

const Home = () => {

  return (
    <main className='bg-emerald-400 h-fit w-full flex flex-col relative'>

        <Navbar/>
        <Hero/>

        <div className='w-full h-[400px] bg-transparent'>
        </div>

        <AboutMe/>

        <div className='w-full h-[400px] bg-transparent'>
        </div>

        <MyProjects/>

        <div className='w-full h-[400px] bg-black/[.5]'>
        </div>

        <ContactMe/>

    </main>
  )
}

export default Home
