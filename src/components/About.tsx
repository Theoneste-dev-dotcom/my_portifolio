import React from "react";
import linked from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import gmail from "../images/gmail.png";
import Image from "next/image";
import coder from "@/images/coder.png";
import { FaCheck } from "react-icons/fa";
function About() {
  return (
    <div className="xl:px-40 py-6 px-16 w-full " id="contact">
      <div className="lg:flex-row px-8 flex-col flex gap-4 items-center w-full  py-2 mt-16  mb-8">
        <div className="flex flex-col gap-8 ">
          <h1 className="font-bold mb-4 text-4xl">A little About Me</h1>
          <p className="text-gray-600  w-[70%] text-">
            I’m a dedicated Fullstack developer with a passion for back-end
            development, building responsive websites, creating data-driven
            applications.
          </p>

          <ul className="flex flex-col gap-2 ">
            <li className="flex flex-row gap-2 items-center">
              <FaCheck className="text-gray-700 text-bold" />
             <span>  CyberSecurity InternShip @CodeAlpha</span>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <FaCheck className="text-gray-700 text-bold" />
              <span>FullStack Developer @CyberMarines Organization</span>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <FaCheck className="text-gray-700 text-bold" />
              <span>CyberSercurity Training @ThinkCyber</span>
            </li>
          </ul>
        </div>
        <Image draggable={false} className="lg:w-[50%] w-[90%]  h-full rounded-lg lg:mt-8 mt-12" alt="coder" src={coder} />
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:px-40 px-16 mt-10 bg-gray-200 py-12">
        <div>
          <Image className="h-12 w-12" alt="about" src={facebook} />

          <h2 className="text-gray-900 font-medium text-2xl">Dufitimana Honest</h2>
        </div>
        <div>
          <Image className="h-12 w-12" alt="linked" src={linked} />
          <h2 className="text-2xl font-medium text-gray-900">LinkedIn</h2>
          <a href="" className="text-blue-800">
            Connect me on{" "}
            <span className="text-blue-900 font-medium text-2xl block">Dufitimana Theoneste</span>
          </a>
        </div>
        <div>
          <Image className="h-12 w-12" alt="gmail" src={gmail} />
          <h2>
            <ul>
              <li>dufitimanatheoneste05@gmail.com</li>
              <li>theodufi.rw@gmail.com</li>
              <li>theonestedufitimana015@gmail.com</li>
            </ul>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
