import React from "react";

const ProgressBar = ({valueText, percent} :{valueText:string, percent:number} ) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-900 ">
          {valueText}
        </span>
        <span className="text-sm font-medium text-gray-900 ">
          {percent}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-200">
        <div className={`bg-gray-900 h-3.5 rounded-full w-[${percent}%]`}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
