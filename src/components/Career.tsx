import React from "react";
import ProgressBar from "./ProgressBar";

type CareerProps = {
  theme: boolean;
};

function Career({theme}:CareerProps) {
  return (
    <div>
      <div className=" px-12 lg:px-40 mt-24">
        <h1 className={`${theme ? "text-black" :"text-white"} font-medium text-3xl mb-8 mt-12`}>My Skills</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProgressBar valueText="Spring Boot" percent={60}/>
          <ProgressBar valueText="Nestjs" percent={70}/>
          <ProgressBar valueText="ExpressJs" percent={90}/>
          <ProgressBar valueText="Nextjs" percent={70}/>
          <ProgressBar valueText="Java" percent={90}/>
        </div>
      </div>
    </div>
  );
}

export default Career;
