import React from "react";
import Button from "./Button";

const CardComponent = ({theme}:{theme:boolean}) => {
    console.log("")
  return (
    <div>
      <div className={`rounded-lg bg-base-100 ${theme ? "bg-white" : "bg-gray-800"} w-auto shadow-xl`}>
        <div className=" p-8 m-4 flex flex-col gap-6">
          <h2 className={`text-3xl font-bold ${theme ? "text-gray-900" : "text-white"}`}>Card title!</h2>
          <p className={`text-gray-400`}>If a dog chews shoes whose shoes does he choose?</p>
           <Button theme={theme}/>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
