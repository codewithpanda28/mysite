import Image from "next/image";

import VideoSrc from "./VideoSrc";
import NewsSection from "./NewsSection";
import Footer from "./Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#6046FF] relative overflow-hidden font-sans">
      {/* Fixed header */}
      <header className="fixed top-0 left-[20%] right-0 flex justify-between items-center p-4 z-10">
        <div className="relative mr-[10px] z-50 flex justify-center md:justify-start">
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
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-20 px-4 relative">
        {/* Left side image */}
        <div className="absolute left-0 top-0 bottom-0 w-1/6 hidden lg:block">
          <div className="text-white bg-gradient-to-b from-[rgb(247,101,223)] to-[rgb(200,80,180)] transition-transform duration-[0.3s] delay-[0.3s] fixed z-[12] w-24 h-screen flex flex-col justify-center items-center bg-[50%_50%] bg-cover bg-no-repeat cursor-pointer box-border inset-[0px_auto_0px_0px]">
            {/* Vertical Welcome text */}
            <h2
              className="relative z-20 text-xl font-bold transform -rotate-90 
  bg-white text-[#6046FF] px-3 font-extrabold
  pt-0 rounded-lg shadow-lg
  transition duration-300 ease-in-out
  hover:bg-yellow-300
  hover:scale-110 hover:shadow-xl"
            >
              LINEUP
            </h2>

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
        <div className="max-w-4xl mx-auto relative z-1">
          {/* LINEUP text */}
          <div className="absolute -left-24 top-1/4 transform -rotate-90 text-white text-9xl font-extrabold opacity-10">
            {/* LINEUP */}
          </div>

          {/* Artist lineup */}
          <div className="container">
         <img
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
                  FT. JOHN O'CALLAHAN & BRYAN KEARNEY
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
                <span>TYSON O'BRIEN</span>
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
        <div className="absolute right-0 top-0 h-full w-1/6 hero-only z-999">
          <Image
            src="/right.png"
            layout="fill"
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

      <div className="pl-20 pr-0">
        <VideoSrc />
        <NewsSection />

        <Footer />
      </div>
    </div>
  );
}
