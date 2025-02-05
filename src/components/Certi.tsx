import Image from "next/image";
import React from "react";
import python from "@/images/python.png";
import Button from "./Button";

const Certi = ({ theme }: { theme: boolean }) => {

  return (
    <div>
      <div>
        <div
       
          className={ `bg-base-100 ${  theme ? "bg-white" : "bg-gray-800"}  flex flex-col justify-between items-center  rounded-lg shadow-lg md:flex-row md:max-w-xl h-auto w-auto`}
        >
          <Image
            className="h-full md:h-[280px] md:w-[40%] w-full object-cover rounded-t-lg   md:rounded-none md:rounded-s-lg"
            src={python}
            alt="python"
          />
          <div className="flex flex-col p-4 leading-normal justify-around h-full w-full lg:w-[60%]">
            <h5
              className={`${
                theme ? " text-gray-900" : " text-gray-100"
              } mb-2 text-2xl font-bold tracking-tight `}
            >
              Noteworthy technology acquisitions 2021
            </h5>
            <p
              className={`${
                theme ? "text-gray-200" : "text-gray-600"
              } mb-3 font-normal text-gray-700 dark:text-gray-400`}
            >
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certi;
