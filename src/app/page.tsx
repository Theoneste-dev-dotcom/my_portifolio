'use client'
import React, { useState } from 'react'
import Hero from '@/components/Hero'
import WhoDes from '@/components/WhoDes'
import Work from '@/components/Work'
import Career from '@/components/Career'
import Certificates from '@/components/Certificates'
import About from '@/components/About'
import Nav from '@/components/Nav'


function PortiFolio() {
  const [theme, setTheme] = useState(false)
  return (
    <div className={`${theme ? "bg-white text-black" : "bg-[#101010] text-white"} overflow-hidden w-[100vw]` }>
      <Nav theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <WhoDes  theme={theme}/>
      <Work  theme={theme}/>
      <Career  theme={theme}/>
      <Certificates  theme={theme}/>
      <About  theme={theme}/>
    </div>
  )
}

export default PortiFolio
