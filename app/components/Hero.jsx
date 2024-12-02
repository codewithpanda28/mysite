"use client";
import Image from "next/image";

import VideoSrc from "./VideoSrc";
import NewsSection from "./NewsSection";

import Footer from "./Footer";
import { useState, useEffect } from "react";

import Navbar from "./Navbar";

const menuItems = [
  { title: "BUY TICKETS", href: "#" },
  { title: "LINEUP", href: "#" },
  { title: "EVENT INFO", href: "#" },
  { title: "PARTNERS", href: "#" },
  { title: "NEWS", href: "#" },
  { title: "FAQ", href: "#" },
  { title: "SIGNUP", href: "#" },
  { title: "CONTACT", href: "#" },
];

export default function Page() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2025-02-04`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
        HRS: Math.floor((difference / (1000 * 60 * 60)) % 24),
        MIN: Math.floor((difference / 1000 / 60) % 60),
        SEC: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-[#001B37]  relative overflow-hidden font-sans z-50">
      {/* Header */}
      <div className="lg:pl-0 lg:pb-0 lg:pr-0 lg:pt-0  pt-[120px] pl-[16px]  pr-[16px]">
        <header className="fixed top-0 left-[-8px] right-2 z-50 flex items-center p-2 min-h-[100px] min-w-full sm:justify-between  lg:pl-24 lg:pt-0 lg:left-20 ">
          <div className="text-white text-3xl font-bold ml-8 mt-4 z-10">
        <a href="/">
    <img
        src="/logo.svg"
        alt="Description of the image"
        width="144"
        height="100"
    />
</a>
          </div>

          {/* navbar */}
          <Navbar />

          {/* image for large devices */}
          <div className="hidden lg:block mr-[10%] mt-[4%]">
            <Image src="/Tittle.svg" alt="SIde Logo" width={64} height={64} />
          </div>
        </header>

        {/* Main content */}
        <main className="lg:pt-[132px] sm:pt-24 px-4 relative ">
          {/* Left side image */}
          <div className="left-[-30%] top-[-15%] w-[60%] h-[100%] block fixed z-[-1]">
            <Image
              src="/leftbackground.svg"
              alt="Left decoration"
              width={1864}
              height={800}
              className="bg-[#001B37] w-full object-cover"
            />
          </div>

          {/* Center content */}
          <div className="max-w-5xl mx-auto relative z-1 ">
            {/* LINEUP text */}
            <div className="z-0 absolute inset-0 flex justify-center items-center   w-[100%]">
              {/* LINEUP */}
              <Image
                src="/mainbackground.svg"
                alt="Image Description"
                width={1000}
                height={500}
                className="hidden lg:block lg:mt-[-18%] mt-[-100%] ml-[-10%] z-10 w-[100%] "
              />
            </div>

            {/* Artist lineup */}
            <div className="container h-[100vh] mt-[2%] lg:mx-auto">
              <Image
                src="/centeriimw.svg"
                loading="lazy"
                sizes="(max-width: 479px) 100px, (max-width: 767px) 300px, (max-width: 991px) 400px, 500px"
                srcSet=""
                alt="IIMW GOA 2025"
                width={400}
                height={100}
                className="hero_logo lg:w-[400px] w-[80%] mx-auto lg:mx-auto"
              />

              <div className="text-white  lg:mx-auto">
                <div className="text-xl  mt-5  md:text-3xl  font-extrabold ">
                  <p className="main-subtitle lg:text-[25px] md:text-3xl  lg:mb-[55px] mb-[35px] text-[18px] text-center ">
                    INDIA FIRST{" "}
                    <span className="text-[#FE6F00] ">GLOBAL MUSIC</span>{" "}
                    CONFERENCE AND <span> SHOWCASE</span> <span>FESTIVAL.</span>
                  </p>
                </div>

                {/* counter */}
                <div
                  className="main-count flex justify-center gap-4 mb-8 mr-[36%] sm:mt-[48px] sm:w-[60%] lg:w-3/4 lg:mx-auto pl-[16px] pr-[20px] sm:text-lg lg:justify-center lg:mt-5 md:mr-[50%] md:text-lg w-[100%]"
                  style={{ zIndex: 1000 }}
                >
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div
                      key={unit}
                      className="bg-white text-[#56AEFF] rounded-lg lg:w-[83px] lg:h-[103px] w-[70px] h-[100px]  lg:p-5 p-5 text-center transition-transform duration-300 hover:scale-105"
                      style={{ zIndex: 10 }}
                    >
                      <div className="lg:text-[32px] news-title  text-3xl sm:font-bold lg:font-black hover:text-[#1E90FF] hover:scale-110 transition duration-300 ease-in-out flex justify-center items-center lg:mb-[4px]">
                        {value.toString().padStart(2, "0")}
                      </div>
                      <div className="lg:text-[20px] text-[18px] hover:text-[#1E90FF] hover:scale-110 transition duration-300 ease-in-out flex justify-center items-center">
                        {unit}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-row mt-12 justify-center items-center gap-5 lg:bg-hidden">
                  {/* button for large devices */}
                  <div className="hidden lg:flex lg:justify-center lg:w-full">
                    <button className="main-count1 item-[24px] main-btn mt-2 mb-20 bg-[#FE6F00] text-[#FFFFFF] px-8 py-4 rounded-full font-semibold text-xl transition duration-300 ease-in-out transform hover:bg-[#FFFFFF] hover:text-[#FE6F00] hover:scale-105 hover:shadow-lg hover:cursor-pointer mr-10">
                      BUY TICKETS
                    </button>

                    <button className="main-count1 item-[24px] main-btn mt-2 mb-20 bg-[#FFFFFF] text-[#FE6F00] px-8 py-4 rounded-full font-semibold text-xl transition duration-300 ease-in-out transform hover:bg-[#FE6F00] hover:text-[#FFFFFF] hover:scale-105 hover:shadow-lg hover:cursor-pointer">
                      BECOME SPONSOR
                    </button>
                  </div>

                  {/* button for small devices */}
                  <div className="lg:hidden sm:backdrop-blur-md bg-white/20 fixed top-[74%] bottom-[0] left-0 w-full z-[9999] backdrop-filter backdrop-blur-xl rounded-md">
                    <button className="main-count1 item-[24px] main-btn ml-[5%] mr-[5%] mt-5 mb-2 mx-auto bg-[#FE6F00] text-[#FFFFFF] px-10 py-4 rounded-full font-semibold text-xl transition duration-300 ease-in-out transform hover:bg-[#FFFFFF] hover:text-[#FE6F00] hover:scale-105 hover:shadow-lg hover:cursor-pointer w-[90%]">
                      BUY TICKETS
                    </button>

                    <button className="main-count1 item-[24px] main-btn ml-[5%] mr-[5%] mt-2 mb-20 mx-auto bg-[#FFFFFF] text-[#FE6F00] px-8 py-4 rounded-full font-semibold text-xl transition duration-300 ease-in-out transform hover:bg-[#FE6F00] hover:text-[#FFFFFF] hover:scale-105 hover:shadow-lg hover:cursor-pointer w-[90%]">
                      BECOME SPONSOR
                    </button>
                  </div>
                </div>

                {/* card section */}
                <section className="news-title mt-[-1%] container mx-auto px-4 lg:py-10 lg:w-[100%] lg:mx-auto">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ml-[10%]">
                    {/* 1st card */}
                    <div className="hidden sm:block">
                      <div className="text-[#56AEFF] text-2xl font-black mb-2 ">
                        WED 04 FEB
                      </div>

                      <div className="text-white/80 section-card hover:text-yellow-400 transition duration-300">
                        <span className="text-[#FF7A05] "> &#8226; </span>
                        Opening Night Performance
                      </div>
                    </div>

                    {/* 2nd */}
                    <div className="hidden sm:block  items-start">
                      <div className="text-[#56AEFF] text-2xl font-black mb-2">
                        THU 05 FEB
                      </div>

                      <div className="text-white/80 section-card hover:text-yellow-400 transition duration-300">
                        <span className="text-[#FF7A05]">&#8226; </span>
                        Pro Sessions
                      </div>
                      <div className="text-white/80 section-card hover:text-yellow-400 transition duration-300">
                        <span className="text-[#FF7A05]">&#8226; </span>
                        Networking Events
                      </div>
                      <div className="text-white/80 section-card hover:text-yellow-400 transition duration-300">
                        <span className="text-[#FF7A05]">&#8226; </span>
                        Evening Showcases
                      </div>
                    </div>

                    {/* 3rd card */}
                    <div className="hidden sm:block items-start">
                      <div className="text-[#56AEFF] text-2xl font-black mb-2">
                        FRI 06 FEB
                      </div>

                      <div className="text-white/80 section-card hover:text-yellow-400 transition duration-300">
                        <span className="text-[#FF7A05]">&#8226; </span>
                        Pro Sessions
                      </div>
                      <div className="text-white/80 section-card hover:text-yellow-400 transition duration-300">
                        <span className="text-[#FF7A05]">&#8226; </span>
                        Networking Events
                      </div>
                      <div className="text-white/80 section-card hover:text-yellow-400 transition duration-300">
                        <span className="text-[#FF7A05]">&#8226; </span>
                        Evening Showcases
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Right side decoration */}
          <div className="absolute bottom-24 right-[-35%] h-100vh hidden lg:block">
            <Image
              src="/rightbackground.svg"
              width={1020}
              height={520}
              alt="Image"
              className="opacity-100 hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "bg-[#6046FF]",
                borderRadius: "8px",
                height: "100%",
              }}
            />
          </div>
        </main>
      </div>

      {/* Cookie preferences */}
      {/* <button 
  className="fixed left-4 bottom-4 bg-yellow-400 text-black font-bold text-sm px-4 py-2 rounded-full z-50"
  onClick={() => window.location.href = '/cookies-permission'}
>
  COOKIE PREFERENCES
</button> */}

      {/* all other section  */}
      <div className="pr-0  w-full lg:pl-[8rem]">
        <VideoSrc />
        <NewsSection />
        <Footer />
      </div>
    </div>
  );
}
