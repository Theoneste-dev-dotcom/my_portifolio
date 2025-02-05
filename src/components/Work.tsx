import React from "react";
import rca from "../images/rca.png";
import location from "../images/placeholder.png";
import Image from "next/image";
import suit from '../images/suitcase.png'

function Work() {
  return (
    <div className="w-screen lg:px-40 px-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">BackGround</h1>
      <div className="bg-gray-200 rounded-lg py-20  w-full  grid-cols-1  grid md:grid-cols-2  xl:grid-cols-3  items-center lg:justify-between px-16 ">
        <div>
          <h1 className="text-black text-4xl font-medium mb-4">Education</h1>
          <div className="flex flex-row gap-2 items-center">
            <Image className="w-12 h-12 " alt="rca" src={rca}/>
            <div className="text-black lg:text-left text-center">
              <p>Rwanda Coding Academy</p>
              <p>Nyabihu, Western, Rwanda</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-black font-medium text-4xl mb-4">Home</h1>
          <div className="flex flex-row gap-2">
            <Image className="w-12 h-12 lg:text-left text-center" alt="location" src={location}/>
            <div className="text-black">
              <p>Gisenyi, Rubavu</p>
              <p> Western, Rwanda</p>
            </div>
          </div>
        </div>
        <div className="lg:w-auto w-full">
          <h1 className="text-black font-medium text-4xl  mb-4">Work</h1>
          <div className="flex flex-col lg:gap-2 gap-2 w-[100%] mb-6 justify-start">
            <div className="text-black flex w-autl  flex-row gap-2 items-center ">
              <Image className="lg:h-6 h-4 w-4 lg:w-6" alt='suit' src={suit}/>   
               <p className=""> Internship @CodeAlpha</p>
            </div>
            <div className="text-black w-auto  flex  flex-row gap-2 items-center">
              <Image className="lg:h-6 h-4 w-4 lg:w-6" alt='suit' src={suit}/>
                  <p> Learning SPE @RCA</p>
            </div>
          </div>
        </div>
       
      
      </div>
    </div>
  );
}

export default Work;
