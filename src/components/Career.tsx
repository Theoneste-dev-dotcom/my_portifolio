import React from "react";

function Career({theme}) {
  return (
    <div>
      <div className="text-white px-12 lg:px-40">
        <h1 className={`${theme ? "text-black" :"text-white"} font-medium text-3xl mb-8 mt-12`}>Career Path</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-[100%] lg:w-[80%]">
            <div>
              <h1 className={`${theme ? "text-black": "text-white"}`}>Nodejs</h1>
              <div className="w-[100%] h-8 mt-2 mb-8 bg-white rounded-[50px]">
                {" "}
                <div className="w-[80%] h-[100%] bg-[#0065f3] rounded-[50px]"></div>
              </div>
            </div>
            <div>
              <h1 className={`${theme ? "text-black": "text-white"}`}>Vanilla Javascript</h1>
              <div className="w-[100%] h-8 mt-2 mb-8 bg-white rounded-[50px]">
                {" "}
                <div className="w-[80%] h-[100%] bg-[#0065f3] rounded-[50px]"></div>
              </div>
            </div>
            <div>
              <h1 className={`${theme ? "text-black": "text-white"}`}>Python</h1>
              <div className="w-[100%] h-8 mt-2 mb-8 bg-white rounded-[50px]">
                {" "}
                <div className="w-[80%] h-[100%] bg-[#0065f3] rounded-[50px]"></div>
              </div>
            </div>
            <div>
              <h1 className={`${theme ? "text-black": "text-white"}`}>React js</h1>
              <div className="w-[100%] h-8 mt-2 mb-8 bg-white rounded-[50px]">
                {" "}
                <div className="w-[80%] h-[100%] bg-[#0065f3] rounded-[50px]"></div>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[80%]">
            <div>
              <h1 className={`${theme ? "text-black": "text-white"}`}>React Native</h1>
              <div className="w-[100%] h-8 mt-2 mb-8 bg-white rounded-[50px]">
                {" "}
                <div className="w-[80%] h-[100%] bg-[#0065f3] rounded-[50px]"></div>
              </div>
            </div>
            <div>
              <h1 className={`${theme ? "text-black": "text-white"}`}>Java</h1>
              <div className="w-[100%] h-8 mt-2 mb-8 bg-white rounded-[50px]">
                {" "}
                <div className="w-[80%] h-[100%] bg-[#0065f3] rounded-[50px]"></div>
              </div>
            </div>
            <div>
              <h1 className={`${theme ? "text-black": "text-white"}`}>SpringBoot</h1>
              <div className="w-[100%] h-8 mt-2 mb-8 bg-white rounded-[50px]">
                {" "}
                <div className="w-[80%] h-[100%] bg-[#0065f3] rounded-[50px]"></div>
              </div>
            </div>
            <div>
              <h1 className={`${theme ? "text-black": "text-white"}`}>PHP</h1>
              <div className="w-[100%] h-8 mt-2 mb-8 bg-white rounded-[50px]">
                {" "}
                <div className="w-[80%] h-[100%] bg-[#0065f3] rounded-[50px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
