import React from "react";
import rca from "../images/rca.png";
import location from "../images/placeholder.png";
import Image from "next/image";
import suit from '../images/suitcase.png'

function Work() {
  return (
    <div>
      <div className="bg-[#dcfbf5]  grid grid-cols-2 gap-16 lg:flex flex-row items-center lg:justify-between px-16  lg:px-40">
        <div>
          <h1 className="text-black font-medium text-2xl text-center ml-2 mb-2">Education</h1>
          <div className="flex flex-col mt-6 lg:flex-row gap-4 items-center justify-center">
            <Image className="w-12 h-12 " src={rca}/>
            <div className="text-black lg:text-left text-center">
              <p>Rwanda Coding Academy</p>
              <p>Nyabihu, Western, Rwanda</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-black font-medium text-2xl text-center ml-2 mb-2">Home</h1>
          <div className="flex  flex-col lg:flex-row gap-4 mt-6 lg:gap-4 items-center justify-center">
            <Image className="w-12 h-12 lg:text-left text-center" src={location}/>
            <div className="text-black">
              <p>Gisenyi, Rubavu</p>
              <p> Western, Rwanda</p>
            </div>
          </div>
        </div>
        <div className="lg:w-auto w-[80vw]">
          <h1 className="text-black font-medium text-2xl text-center ml-2 mb-2">Work</h1>
          <div className="flex flex-col lg:gap-2 gap-4 w-[100%] lg:flex-col  items-center  mb-6 justify-start">
            <div className="text-black flex w-[50%]  flex-row gap-4 mt-6 items-center">
              <Image className="lg:h-12 h-6 w-6 lg:w-12" src={suit}/>   
               <p className=""> Internship @CodeAlpha</p>
            </div>
            <div className="text-black w-[50%]  flex  flex-row gap-4 items-center">
              <Image className="lg:h-12 h-6 w-6 lg:w-12" src={suit}/>
                  <p> Learning SPE @RCA</p>
            </div>
          </div>
        </div>
       
      
      </div>
    </div>
  );
}

export default Work;
