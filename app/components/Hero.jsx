"use client";
import Image from "next/image";

import VideoSrc from "./VideoSrc";
import NewsSection from "./NewsSection";
import {
  X,
  ChevronLeft,
  Facebook,
  Instagram,
  Music2,
  AirplayIcon as Spotify,
  LucideX,
} from "lucide-react";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Link from "next/link";
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
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Min: Math.floor((difference / 1000 / 60) % 60),
        Sec: Math.floor((difference / 1000) % 60),
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

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [artists, setArtists] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=jP4BDlHEIUMFbr0J2o-89wS8YB1ZQ4DB2UvnXzu1ZtU"
    )
      .then((response) => response.json())
      .then((data) => {
        const fetchedArtists = data.map((photo, index) => ({
          id: index, // Add a unique id for each artist
          name: photo.user.name,
          image: photo.urls.small,
          bio: photo.description || "No bio available.",
        }));
        setArtists(fetchedArtists);
      })
      .catch((error) => console.error("Error fetching artists:", error));
  }, []);

  return (
    <div className="min-h-screen bg-[#6046FF] relative overflow-hidden font-sans z-10">
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center p-4 min-h-[100px] min-w-full sm:justify-between lg:pl-24 lg:pt-12 lg:left-20">
        <div className="text-white text-3xl font-bold ml-10 z-10">
          <Image
            src="/logo.svg"
            alt="Description of the image"
            width={200}
            height={200}
          />
        </div>

        {/* navbar */}
        <Navbar />
      </header>

      {/* Main content */}
      <main className="pt-20 px-4 relative">
        {/* Left side image */}
        <div className=" left-0 top-0 bottom-0 w-[14%] h-[100%] z-50 hidden lg:block fixed">
          <Image
            src="/leftbackground.svg"
            alt="Left decoration"
            width={800}
            height={800}
            className="bg-[#6046FF] w-[500px] z-10 left-0  "
          />
        </div>

        {/* Center content */}
        <div className="max-w-4xl mx-auto relative z-1 ]">
          {/* LINEUP text */}
          <div className="absolute inset-0 flex justify-center items-center z-10 transition-transform duration-300 hover:scale-105 ">
            {/* LINEUP */}
            <Image
    src="/mainbackground.svg"
    alt="Image Description"
    width={1100}
    height={500}
    className="mt-[-20%] z-10  transition-opacity duration-300 hover:opacity-80"
  />
          </div>

          {/* Artist lineup */}
          <div className="container">
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
              style={{ marginTop: "4rem" }}
            />
            <div className="text-white  ">
              <div className="text-xl mb-5 md:text-3xl sm:text-xl font-extrabold tracking-tighter">
                <p className="lg:text-3xl md:text-3xl sm:text-2xl">
                India First{" "}
                <span className="text-orange-400 ">Global Music</span> Conference
                and <span> showcase</span> <br />{" "}
                <span className="lg:mr-[48%] lg:text-left">Festival.</span></p>
              </div>

              {/* counter */}
              <div className="main-count flex justify-center gap-4 mb-8 mr-[36%] sm:mt-12 lg:justify-start  sm:mr-0  lg:mt-5 ">
                {Object.entries(timeLeft).map(([unit, value]) => (
              <div
  key={unit}
  className="bg-white text-[#5a2d82] rounded-lg p-4 w-24 text-center"
>
  <div className="text-4xl font-bold">{value}</div>
  <div className="text-sm">{unit}</div>
</div>
                ))}
              </div>

          {/* button */}
<button className="main-btn mt-5 sm:mb-5 bg-[#EAF943] text-black px-8 py-3 rounded-full font-semibold text-xl mr-[47%] md:justify-center lg:justify-start transition duration-300 ease-in-out transform hover:bg-[#D4E536] hover:scale-105 hover:shadow-lg z-10">
  BECOME SPONSOR
</button>

           <section className="container mx-auto px-4 lg:py-16 ">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    <div className="hidden sm:block border-r border-dotted border-white/20">
      <div className="text-[#EAF943] text-2xl font-bold ">
        WED 05 FEB
      </div>

      <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
        <span className="text-[#FF7A05]"> &#8226; </span>
        Opening Night Performance
      </div>
    </div>

    {/* 2nd */}

    <div className="hidden sm:block border-r border-dotted border-white/20 items-start">
      <div className="text-[#EAF943] text-2xl font-bold mb-2">
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
      <div className="text-[#EAF943] text-2xl font-bold mb-2">
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
        <div className="absolute top-0 right-0 h-100vh  hidden lg:block">
          <Image
            src="/rightbackground.svg"
            width={320}
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

      {/* Bottom left signup button */}
      <button
        onClick={togglePopup}
        className="fixed right-4 bottom-10 bg-yellow-400 text-black font-bold px-6 py-2 rounded-full z-50"
      >
        SIGNUP <span className="ml-1">➜</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <button
              onClick={togglePopup}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
