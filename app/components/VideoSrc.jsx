'use client'

import { useRef, useState } from 'react'

export default function VideoSrc() {
    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false)

  return (
 <div className="relative h-screen w-[1510px] bg-black overflow-hidden ">


{/* Video Background */}
<div className="absolute inset-0">
  <video
    className="w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    poster="/placeholder.svg?height=1080&width=1920"
    ref={videoRef}
  >
    <video src="https://cdn.prod.website-files.com/62f1dc4f15468ed2a2d18a29/62f1defb089777ac71826b28_FX22 Header Animation-transcode.mp4,https://cdn.prod.website-files.com/62f1dc4f15468ed2a2d18a29/62f1defb089777ac71826b28_FX22 Header Animation-transcode.webm" type="video/mp4" />
  </video>
  {/* Overlay for better text contrast */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
  
  {/* Play/Pause Button */}
  <button 
    className="absolute bottom-4 right-6 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
    onClick={() => {
      const video = videoRef.current;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }}
  >
    {videoRef?.current?.paused ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
      </svg>
    )}
  </button>
</div>

  {/* Main Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
    <h1 className="text-6xl md:text-8xl font-extrabold text-center leading-tight tracking-tight">
      SUMMER<br />
      STARTS<br />
      HERE
    </h1>
  </div>
</div>
  )
}