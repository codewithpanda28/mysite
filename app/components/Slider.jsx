'use client'

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, Facebook, Instagram, Music2, AirplayIcon as Spotify } from 'lucide-react'
import Image from "next/image"

const artists = [
  {
    name: "ANNA LUNOE",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Hailing from Sydney, Anna Lunoe continuously breaks boundaries as a DJ, radio host, producer, vocalist & curator in the dance scene. Starting as a radio host on Australia's FBi community radio, Anna quickly rose to prominence on the airwaves and soon emerged as one of the best DJ's amidst Australia's burgeoning dance scene. She released her debut Anna Lunoe & Friends EP, establishing herself as not only an exceptional DJ, but producer as well. From there she bounced one club banger to the next releasing on Fools Gold, Mad Decent and OWSLA while simultaneously becoming a crowd favorite in the USA live circuit, appearing at Coachella, Lollapalooza, & EDC Las Vegas, where she was the first solo female at to play the main stage."
  },
  {
    name: "BABYFACE MAL",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Rising star in the electronic music scene"
  },
  {
    name: "BADRAPPER",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Electronic music producer and DJ"
  },
  {
    name: "BEAUZ",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Electronic music duo"
  },
  {
    name: "BLASTOYZ",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Psytrance music producer"
  },
  {
    name: "BOYS NOIZE",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Electronic music producer and DJ"
  },
  {
    name: "CALVIN HARRIS",
    image: "/placeholder.svg?height=400&width=400",
    bio: "World-renowned DJ and producer"
  },
  {
    name: "CHACE",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Electronic music artist"
  },
]

export default function Slider() {
  const [selectedArtist, setSelectedArtist] = useState(null)
  
  const handlePrevious = () => {
    const currentIndex = artists.findIndex(artist => artist.name === selectedArtist.name)
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : artists.length - 1
    setSelectedArtist(artists[previousIndex])
  }

  const handleNext = () => {
    const currentIndex = artists.findIndex(artist => artist.name === selectedArtist.name)
    const nextIndex = currentIndex < artists.length - 1 ? currentIndex + 1 : 0
    setSelectedArtist(artists[nextIndex])
  }

  return (
    <div className="min-h-screen bg-[#6366F1] p-4">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

      {/* Artist Detail Modal */}
      <Dialog open={selectedArtist !== null} onOpenChange={() => setSelectedArtist(null)}>
        <DialogContent className="max-w-4xl p-0 bg-[#6366F1] text-white overflow-hidden">
          <button
            onClick={() => setSelectedArtist(null)}
            className="absolute right-4 top-4 z-10 text-white hover:opacity-75 transition-opacity"
          >
            <X className="h-6 w-6" />
          </button>
          
          {selectedArtist && (
            <div className="relative">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  className="object-cover"
                  fill
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h2 className="text-4xl font-bold">{selectedArtist.name}</h2>
                <p className="text-white/80 leading-relaxed">{selectedArtist.bio}</p>
                
                <div className="flex gap-4">
                  <Button size="icon" variant="ghost" className="text-white hover:text-white/80">
                    <Spotify className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-white hover:text-white/80">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-white hover:text-white/80">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-white hover:text-white/80">
                    <Music2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition-opacity"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition-opacity"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}