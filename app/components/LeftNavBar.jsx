import Image from "next/image";
import React from "react";

const SideNavBar = () => {
  return (
    <main className="pt-20 px-4 relative">
      {/* Left side image */}
      <div className="absolute left-0 top-0 bottom-0 w-1/6">
        <div className="text-white bg-gradient-to-b from-[rgb(247,101,223)] to-[rgb(200,80,180)] transition-transform duration-[0.3s] delay-[0.3s] fixed z-[12] w-24 h-screen flex flex-col justify-center items-center bg-[50%_50%] bg-cover bg-no-repeat cursor-pointer box-border inset-[0px_auto_0px_0px]">
          {/* Vertical Welcome text */}
          <h2
            className="relative z-20 text-xl font-bold transform -rotate-90 
             bg-gradient-to-r from-purple-500 to-pink-500 
          p-4 rounded-lg shadow-lg
          transition duration-300 ease-in-out
         hover:scale-110 hover:shadow-xl hover:from-pink-500 hover:to-purple-500
         hover:text-white"
          >
            LINEUP
          </h2>

          <Image
            src="/placeholder.svg"
            alt="Left decoration"
            layout="fill"
            objectFit="cover"
            className="opacity-50 hover:opacity-75 transition-opacity"
          />
        </div>
      </div>
    </main>
  );
};

export default SideNavBar;
