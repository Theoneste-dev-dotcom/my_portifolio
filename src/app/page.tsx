"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero";
import WhoDes from "@/components/WhoDes";
import Work from "@/components/Work";
import Career from "@/components/Career";
import Certificates from "@/components/Certificates";
import About from "@/components/About";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

function PortiFolio() {
  const [theme, setTheme] = useState(true);
  return (
    <div
      className={`${
        theme ? "bg-white text-black" : "bg-[#101010] text-white"
      } overflow-hidden w-[100vw]`}
    >
      <Nav theme={theme} setTheme={setTheme} />
      <Hero theme={theme}/>
      <WhoDes />
      <Work />
      <Career theme={theme} />
      <Certificates theme={theme} />
      <Projects theme={theme} />
      <About />
    </div>
  );
}

export default PortiFolio;
