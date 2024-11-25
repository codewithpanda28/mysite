'use client'

import { useState, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
<div className="bg-[#5B43F5] mt-5 relative lg:h-screen lg:w-screen md:h-[800px] sm:h-[500px] overflow-hidden font-sans h-[50vh] w-full">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 h-full w-full object-cover"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
{/* //summer sarted here */}

<div className="relative z-1  flex h-full flex-col items-center justify-center text-center text-white">
  <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-7xl lg:text-8xl">
  India first global <br/> music conference and  <br/>  showcase
  festival
  </h1>
</div>

   <button
  onClick={togglePlayPause}
  className="absolute bottom-4 right-4 z-20 rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-200"
  aria-label={isPlaying ? 'Pause' : 'Play'}
>
  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
</button>
    </div>
  )
}