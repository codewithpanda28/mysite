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
    const difference = +new Date(`2025-01-01`) - +new Date();
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
    <div className="min-h-screen bg-[#001B37] relative overflow-hidden font-sans z-50">
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center p-4 min-h-[100px] min-w-full sm:justify-between  lg:pl-24 lg:pt-5 lg:left-20">
        <div className="text-white text-3xl font-bold ml-10 z-10">
          <Image
            src="/logo.svg"
            alt="Description of the image"
            width={134}
            height={100}
          />
        </div>

        {/* navbar */}
        <Navbar />
      </header>

      {/* Main content */}
      <main className="lg:pt-32 sm:pt-24 px-4 relative ">
        {/* Left side image */}
        <div className="left-0 top-0 bottom-0 w-[30%] h-[100%] hidden lg:block absolute z-[-1]">
          <Image
            src="/leftbackground.png"
            alt="Left decoration"
            width={1000}
            height={800}
            className="bg-[#001B37] w-[1164px]"
          />
        </div>

        {/* Center content */}
        <div className="max-w-4xl mx-auto relative z-1 ">
          {/* LINEUP text */}
          <div className="z-0 absolute inset-0 flex justify-center items-center  transition-transform duration-300 hover:scale-105 w-[120%]">
            {/* LINEUP */}
            <Image
              src="/mainbackground.svg"
              alt="Image Description"
              width={1000}
              height={500}
              className="mt-[-55%] ml-[-10%] z-10 w-[100%] opacity-40  transition-opacity duration-300 hover:opacity-80"
            />
          </div>

          {/* Artist lineup */}
          <div className="container mt-32">
            <img
              src="/centeriimw.svg"
              loading="lazy"
              sizes="centeriimw.svg
  (max-width: 479px) 200px, (max-width: 767px) 300px, (max-width: 991px) 400px, 500px"
              srcSet=""
              alt="IIMW GOA 2025"
              width={500}
              height={300}
              className="hero_logo mt-4"
            />
            <div className="text-white  ">
              <div className="text-xl mb-12 mt-10 md:text-3xl sm:text-xl font-extrabold tracking-tighter">
                <p className="lg:text-3xl md:text-3xl sm:text-2xl">
                  INDIA FIRST{" "}
                  <span className="text-[#FE6F00] ">GLOBAL MUSIC</span>{" "}
                  CONFERENCE AND <span> SHOWCASE</span> <br />{" "}
                  <span className="lg:mr-[48%] lg:text-left">FESTIVAL.</span>
                </p>
              </div>

              {/* counter */}
           <div className="main-count flex justify-center gap-4 mb-8 mr-[36%] sm:mt-12 sm:w-[50%] lg:justify-start lg:mt-5 lg:mr-[50%] md:mr-[50%]">
  {Object.entries(timeLeft).map(([unit, value]) => (
    <div
      key={unit}
      className="bg-white text-[#56AEFF] rounded-lg w-[100px] lg:p-8 sm:p-5 text-center transition-transform duration-300 hover:scale-105"
    >
      <div className="lg:text-4xl sm:text-4xl sm:font-bold lg:font-bold hover:text-[#1E90FF]">
        {value}
      </div>
      <div className="lg:text-sm sm:text-xs hover:text-[#1E90FF]">{unit}</div>
    </div>
  ))}
</div>

              {/* button */}
              <button className="main-btn mt-8 sm:mb-5 bg-[#FE6F00] text-[#FFFFFF] px-8 py-3 rounded-full font-semibold text-xl mr-[47%] md:justify-center lg:justify-start transition duration-300 ease-in-out transform hover:bg-[#FFFFFF] hover:text-[#FE6F00] hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:z-20 z-99 w-full sm:w-auto">
                BECOME SPONSOR
              </button>

              <section className="container mx-auto px-4 lg:py-16 ">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="hidden sm:block border-r border-dotted border-white/20">
                    <div className="text-[#56AEFF] text-2xl font-bold ">
                      WED 05 FEB
                    </div>

                    <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
                      <span className="text-[#FF7A05]"> &#8226; </span>
                      Opening Night Performance
                    </div>
                  </div>

                  {/* 2nd */}

                  <div className="hidden sm:block border-r border-dotted border-white/20 items-start">
                    <div className="text-[#56AEFF] text-2xl font-bold mb-2">
                      THU 06 FEB
                    </div>

                    <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
                      <span className="text-[#FF7A05]">&#8226;</span>
                      Pro Sessions
                    </div>
                    <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
                      <span className="text-[#FF7A05]">&#8226;</span>
                      Networking Events
                    </div>
                    <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
                      <span className="text-[#FF7A05]">&#8226;</span>
                      Evening Showcases
                    </div>
                  </div>

                  <div className="hidden sm:block items-start">
                    <div className="text-[#56AEFF] text-2xl font-bold mb-2">
                      FRI 07 FEB
                    </div>

                    <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
                      <span className="text-[#FF7A05]">&#8226;</span>
                      Pro Sessions
                    </div>
                    <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
                      <span className="text-[#FF7A05]">&#8226;</span>
                      Networking Events
                    </div>
                    <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
                      <span className="text-[#FF7A05]">&#8226;</span>
                      Evening Showcases
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Right side decoration */}
        <div className="absolute bottom-24 right-0 h-100vh  hidden lg:block">
          <Image
            src="/rightbackground.png"
            width={520}
            height={320}
            alt="Image"
            className=" opacity-100 hover:opacity-100 transition-opacity duration-300"
            style={{
              background: " bg-[#6046FF]",
              // boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              height: "100%",
            }}
          />
        </div>
      </main>



      {/* Cookie preferences */}
      <button className="fixed left-4 bottom-4 bg-yellow-400 text-black font-bold text-sm px-4 py-2 rounded-full z-50">
        COOKIE PREFERENCES
      </button>
      <div className="pr-0  w-full lg:pl-20">
        <VideoSrc />
        <NewsSection />

        <Footer />
      </div>
    </div>
  );
}
