"use client"
import Image from "next/image";

import VideoSrc from "./VideoSrc";
import NewsSection from "./NewsSection";
import { X, ChevronLeft, Facebook, Instagram, Music2, AirplayIcon as Spotify, LucideX } from 'lucide-react'
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Link from "next/link";

const menuItems = [
  { title: 'BUY TICKETS', href: '#' },
  { title: 'LINEUP', href: '#' },
  { title: 'EVENT INFO', href: '#' },
  { title: 'PARTNERS', href: '#' },
  { title: 'NEWS', href: '#' },
  { title: 'FAQ', href: '#' },
  { title: 'SIGNUP', href: '#' },
  { title: 'CONTACT', href: '#' }
]

export default function Page() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("https://api.unsplash.com/photos/?client_id=jP4BDlHEIUMFbr0J2o-89wS8YB1ZQ4DB2UvnXzu1ZtU")
      .then(response => response.json())
      .then(data => {
        const fetchedArtists = data.map(photo => ({
          name: photo.user.name,
          image: photo.urls.small,
          bio: photo.description || "No bio available."
        }));
        setArtists(fetchedArtists);
      })
      .catch(error => console.error('Error fetching artists:', error));
  }, []);

  return (
    <div className="min-h-screen bg-[#6046FF] relative overflow-hidden font-sans">
      {/* Fixed header */}
  <header className="fixed top-0 md:left-[20%] w-full md:w-auto left-[1%] right-0 flex justify-between items-center p-4 z-10">
  <div className="relative mr-[10px] z-50 flex justify-center md:justify-start lg:left-auto sm:left-0">
    <svg
      id="b"
      xmlns="http://www.w3.org/2000/svg"
      width="34" 
      height="34"
      viewBox="0 0 79.3 79.3"
    >
      <polygon
        points="79.3 0 57 0 39.7 17.4 22.3 0 0 0 0 22.3 17.4 39.7 0 57 0 79.3 22.3 79.3 39.7 62 57 79.3 79.3 79.3 79.3 57 62 39.7 79.3 22.3 79.3 0"
        fill="currentColor"
      ></polygon>
    </svg>
  </div>
  <div className="flex flex-col gap-1.5">
    {/* <div className="w-6 h-0.5 bg-black"></div>
    <div className="w-6 h-0.5 bg-black"></div> */}
        {/* Hamburger Menu Trigger */}
        <button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-4 right-4 z-50 flex flex-col gap-1.5 p-2"
        aria-label="Open menu"
      >
        <div className="w-10 h-1 bg-black"></div>
        <div className="w-10 h-1 bg-black"></div>
      </button>

   {/* Menu Panel */}
<div
  className={`fixed inset-y-0 right-0 w-full md:w-1/3 bg-[#6046FF] transform transition-transform duration-500 ease-in-out z-[99999] overflow-y-auto ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
  style={{ height: window.innerWidth <= 768 ? '100vh' : 'auto' }}
>
  {useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen])}

  <div className="relative h-full p-8 flex flex-col overflow-y-auto">
    <button
      onClick={() => setIsMenuOpen(false)}
      className="absolute right-4 top-4 text-white hover:opacity-75 transition-opacity font-black"
    >
      <X size={24} />
    </button>

    <nav className="mt-16 flex-1">
      <ul className="space-y-0">
        {menuItems.map((item) => (
          <li key={item.title} className="break-words">
            <Link
              href={item.href}
              className="text-white text-2xl md:text-3xl font-black hover:text-pink-300 transition-colors block tracking-tighter leading-tight"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 absolute bottom-24 space-x-8">
        {/* Large image on top */}

<Image
  src="https://cdn.prod.website-files.com/62f1dc4f15468ed2a2d18a29/62f44ffa01f1ea03da4355a6_logoAsset%201.svg"
  alt="Logo"
  width={500} // Specify the width
  height={300} // Specify the height
/>
        
        {/* 3 images below in a row */}
        <div className="grid grid-cols-3 gap-4">
          <Image src="https://cdn.prod.website-files.com/62f1dc4f15468ed2a2d18a29/62f992528c6d84fc5d0a106e_hardwareAsset%202.svg" alt="Image 2"width={100} height={100}  />
          <Image src="https://cdn.prod.website-files.com/62f1dc4f15468ed2a2d18a29/62f992524d32ee50fbb1bda9_oneloveAsset%203.svg" alt="Image 3" width={100} height={100} />
          <Image src="https://cdn.prod.website-files.com/62f1dc4f15468ed2a2d18a29/62f99252a3e05d214d74b494_lnAsset%204.svg" alt="Image 4" width={100} height={100}  />
        </div>
      </div>
    </nav>
  </div>
</div>
  </div>
</header>

      {/* Main content */}
      <main className="pt-20 px-4 relative">
        {/* Left side image */}
<div className="absolute left-0 top-0 bottom-0 w-[10%] hidden lg:block">
  <div className="text-white bg-gradient-to-b from-[rgb(247,101,223)] to-[rgb(200,80,180)] transition-transform duration-[0.3s] delay-[0.3s] fixed z-[12] w-[10%] h-screen flex flex-col justify-center items-center bg-[50%_50%] bg-cover bg-no-repeat cursor-pointer box-border inset-[0px_auto_0px_0px]">
    {/* Vertical Welcome text */}

  {/* Lineup Text Trigger */}
  <button
        onClick={() => setIsPanelOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 transform -rotate-90 bg-white text-[#6046FF] px-4 py-2 rounded-t-lg font-bold text-xl z-30 hover:scale-105 transition-transform"
      >
        LINEUP
      </button>

      {/* Main Artist Grid Panel */}
  <div
  className={` fixed inset-y-0 left-0 w-[60%] min-h-[100vh] h-[100vh] max-h-[100vh] bg-[#6046FF] transform transition-transform duration-500 ease-in-out z-40 overflow-y-auto ${
    isPanelOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className="p-0">
<button
  onClick={() => setIsPanelOpen(false)}
  className="absolute right-4 top-2 text-white transform transition-all duration-300 
  hover:scale-110 hover:rotate-12 hover:translate-y-[-2px] hover:translate-x-[2px]
  hover:opacity-75 hover:shadow-lg hover:shadow-white/30
  active:scale-95 active:rotate-0 active:translate-y-[1px]
  motion-safe:animate-pulse
  perspective-1000 hover:preserve-3d
  border border-white/20 rounded-lg p-1
  backdrop-blur-sm bg-white/10"
>
  <LucideX size={24} className="drop-shadow-md hover:drop-shadow-lg" />
</button>
    
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-12">
      {artists.map((artist) => (
        <button
          key={artist.name}
          className="relative aspect-square overflow-hidden group"
          onClick={() => setSelectedArtist(artist)}
        >
          <Image
            src={artist.image}
            alt={artist.name}
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold">{artist.name}</h2>
        </button>
      ))}
    </div>
  </div>
</div>

   {/* Artist Detail Panel */}
<div
  className={`fixed inset-y-0 left-0 h-full w-full max-w-[40%] bg-[#6046FF] transform transition-transform duration-500 ease-in-out z-50 ${
    selectedArtist ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  {selectedArtist && (
    <div className="w-full h-full overflow-y-auto">
      <div className="relative w-full h-1/2">
        <Image
          src={selectedArtist.image}
          alt={selectedArtist.name}
          className="object-cover w-full h-full"
          fill
        />
        <button
          onClick={() => setSelectedArtist(null)}
          className="absolute right-0 top-[0%] text-white flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:translate-z-4 hover:shadow-lg"
        >
          <ChevronLeft className="w-14 h-14 animate-pulse " />
        </button>
      </div>
      
      <div className="p-8 text-white h-1/2">
        <h1 className="text-4xl font-bold mb-6">{selectedArtist.name}</h1>
        <p className="text-lg mb-8">{selectedArtist.bio}</p>
        
        <div className="flex gap-4">
          <button className="hover:opacity-75 transition-opacity">
            <Spotify size={24} />
          </button>
          <button className="hover:opacity-75 transition-opacity">
            <Facebook size={24} />
          </button>
          <button className="hover:opacity-75 transition-opacity">
            <Instagram size={24} />
          </button>
          <button className="hover:opacity-75 transition-opacity">
            <Music2 size={24} />
          </button>
        </div>
      </div>
    </div>
  )}
</div>


    <Image
      src="/left.png"
      alt="Left decoration"
      layout="fill"
      objectFit="cover"
      className=""
    />
  </div> 
</div>

        {/* ---------------------------------------------------------------------------------- */}

        {/* Center content */}
        <div className="max-w-4xl mx-auto relative z-1 ]">
          {/* LINEUP text */}
          <div className="absolute -left-24 top-1/4 transform -rotate-90 text-white text-9xl font-extrabold opacity-10">
            {/* LINEUP */}
          </div>

          {/* Artist lineup */}
          <div className="container">
         <Image
  src="https://cdn.prod.website-files.com/62f1dc4f15468ed2a2d18a29/62f450d6844ebd0e826a11f2_Group%201%403x.png"
  loading="lazy"
  sizes="(max-width: 479px) 200px, (max-width: 767px) 300px, (max-width: 991px) 400px, 500px"
  srcSet="https://assets-global.website-files.com/62f1dc4f15468ed2a2d18a29/62f450d6844ebd0e826a11f2_Group%201%403x-p-500.png 500w, https://assets-global.website-files.com/62f1dc4f15468ed2a2d18a29/62f450d6844ebd0e826a11f2_Group%201%403x-p-800.png 800w, https://assets-global.website-files.com/62f1dc4f15468ed2a2d18a29/62f450d6844ebd0e826a11f2_Group%201%403x-p-1080.png 1080w, https://assets-global.website-files.com/62f1dc4f15468ed2a2d18a29/62f450d6844ebd0e826a11f2_Group%201%403x-p-1600.png 1600w, https://assets-global.website-files.com/62f1dc4f15468ed2a2d18a29/62f450d6844ebd0e826a11f2_Group%201%403x-p-2000.png 2000w, https://assets-global.website-files.com/62f1dc4f15468ed2a2d18a29/62f450d6844ebd0e826a11f2_Group%201%403x.png 2361w"
  alt="Festival X 2022"
  className="hero_logo mt-4"
  style={{ marginTop: '4rem' }}
/>
            <div className="text-white  mt-10">
<div className="text-4xl md:text-6xl font-extrabold tracking-tighter">
  CALVIN HARRIS
</div>
<div className="text-4xl md:text-6xl font-extrabold tracking-tighter">
  DON TOLIVER
</div>
              <div className="flex flex-wrap items-center gap-0 text-2xl font-bold mt-2 leading-none">
                <span className="text-[#FF69B4] border border-[#ff6984] rounded-[30px] text-sm py-0 px-2">
                  A-Z
                </span>
                <span>BOYS NOIZE</span>
                <span className="text-[#FF69B4]">•</span>
                <span>GREEN VELVET</span>
                <span className="text-[#FF69B4]">•</span>
                <span>JOHN SUMMIT</span>
              </div>
              <div className="flex flex-wrap items-center gap-0 text-2xl font-bold leading-none">
                <span>LUUDE</span>
                <span className="text-[#FF69B4]">•</span>
                <span>MARLO</span>
                <span className="text-[#FF69B4]">•</span>
                <span>NINA KRAVIZ</span>
                <span className="text-[#FF69B4]">•</span>
                <span>SUB FOCUS</span>
                <span className="bg-white text-black text-xs px-2 py-0.5 rounded-full">
                  DJ SET & ID
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-0 text-2xl font-bold leading-none">
                <span>TCHAMI</span>
                <span className="text-[#FF69B4]">•</span>
                <span>WILKINSON</span>
                <span className="bg-white text-black text-xs px-2 py-0.5 rounded-full">
                  DJ SET
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-0 text-xl font-bold mt-2 leading-none">
                <span className="text-[#FF69B4] border border-[#ff6984] rounded-[30px] text-sm py-0 px-2">
                  A-Z
                </span>
                <span>ANNA LUNOE</span>
                <span className="text-[#FF69B4]">•</span>
                <span>BABYFACE MAL</span>
                <span className="text-[#FF69B4]">•</span>
                <span>BADRAPPER</span>
              </div>
              <div className="flex flex-wrap items-center gap-0 text-xl font-bold leading-none">
                <span>BEAUZ</span>
                <span className="text-[#FF69B4]">•</span>
                <span>BLASTOYZ</span>
                <span className="text-[#FF69B4]">•</span>
                <span>CHACE</span>
                <span className="text-[#FF69B4]">•</span>
                <span>CHOOMBA</span>
                <span className="text-[#FF69B4]">•</span>
                <span>COSMIC GATE</span>
              </div>
              <div className="flex flex-wrap items-center gap-0 text-xl font-bold leading-none">
                <span>FRANKY RIZARDO</span>
                <span className="text-[#FF69B4]">•</span>
                <span>HALIENE</span>
              </div>
              <div className="flex flex-wrap items-center gap-0 text-xl font-bold leading-none">
                <span>KEY4050</span>
                <span className="text-xs font-bold text-black m-1 p-1 bg-white rounded-lg items-center">
                  FT. JOHN CALLAHAN & BRYAN KEARNEY
                </span>
                <span className="text-[#FF69B4]">•</span>
                <span>LAURA KING</span>
                <span className="text-[#FF69B4]">•</span>
                <span>LEN FAKI</span>
              </div>
              <div className="flex flex-wrap items-center gap-0 text-xl font-bold leading-none">
                <span>NIFRA</span>
                <span className="text-[#FF69B4]">•</span>
                <span>NORA EN PURE</span>
                <span className="text-[#FF69B4]">•</span>
                <span>PROSPA</span>
                <span className="text-[#FF69B4]">•</span>
                <span>SUNSET BROS</span>
              </div>
              <div className="flex flex-wrap items-center gap-0 text-xl font-bold leading-none">
                <span>TAGLO</span>
                <span className="text-[#FF69B4]">•</span>
                <span>TYSON BRIEN</span>
              </div>
            <section className="container mx-auto px-4 py-16">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    <div className="border-r border-dotted border-white/20">
      <div className="text-[#FF69B4] text-2xl font-bold mb-2">
        SAT 26 NOV
      </div>
      <div className="text-white text-3xl font-extrabold mb-2 hover:text-yellow-400 transition duration-300">
        MELBOURNE
      </div>
      <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
        Flemington Racecourse
      </div>
    </div>

    <div className="border-r border-dotted border-white/20 items-start">
      <div className="text-[#FF69B4] text-2xl font-bold mb-2">
        SUN 27 NOV
      </div>
      <div className="text-white text-3xl font-extrabold mb-2 hover:text-yellow-400 transition duration-300">
        GOLD COAST
      </div>
      <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
        Metricon Stadium
      </div>
    </div>

    <div className="items-start">
      <div className="text-[#FF69B4] text-2xl font-bold mb-2">
        FRI 02 DEC
      </div>
      <div className="text-white text-3xl font-extrabold mb-2 hover:text-yellow-400 transition duration-300">
        ADELAIDE
      </div>
      <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">Bonython Park</div>
    </div>

    <div className="border-r border-dotted border-white/20 items-start">
      <div className="text-[#FF69B4] text-2xl font-bold mb-2">
        SAT 03 DEC
      </div>
      <div className="text-white text-3xl font-extrabold mb-2 hover:text-yellow-400 transition duration-300">
        SYDNEY
      </div>
      <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
        Sydney Showground
      </div>
    </div>

    <div className="items-start">
      <div className="text-[#FF69B4] text-2xl font-bold mb-2">
        SUN 04 DEC
      </div>
      <div className="text-white text-3xl font-extrabold mb-2 hover:text-yellow-400 transition duration-300">
        PERTH
      </div>
      <div className="text-white/80 font-mono hover:text-yellow-400 transition duration-300">
        Claremont Showground
      </div>
    </div>
  </div>
</section>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------- */}

        {/* Right side decoration */}
       <div className="absolute right-0 top-0 h-[150vh] md:h-[150vh] sm:h-[100vh] w-1/6 hero-only z-999">
          <Image
            src="/right.png"
            layout="fill"
            alt="Image"
            objectFit="cover"
            className=" opacity-90 hover:opacity-100 transition-opacity duration-300"
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
<button className="fixed right-4 bottom-10 bg-[#FFFF00] text-black font-bold font-extrabold font-weight-800 px-6 py-2 rounded-full z-50">
  SIGNUP <span className="ml-1">➜</span>
</button>

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