import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function info() {
  return (
    <div className="min-h-screen bg-[#002147] p-4 md:p-8">
      {/* Header Section */}
      <div className="h-32">
        <header className="fixed top-0 left-[-8px] right-2 z-50 flex items-center p-2 min-h-[100px] min-w-full sm:justify-between  lg:pl-24 lg:pt-0 lg:left-20 ">
          <div className="text-white text-3xl font-bold ml-8 mt-4 z-10">
          <a href="/">
  <Image
    src="/logo.svg"
    alt="Description of the image"
    width={144}
    height={100}
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
      </div>
      <div className="mb-8 md:mb-12 text-center">
        <h1 className="mb-4 md:mb-8 text-2xl md:text-4xl lg:text-6xl font-bold text-[#FF6B00]">
          IIMW 2025 - PROGRAM OVERVIEW
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 md:h-8 md:w-8 text-[#FF6B00]" />
            <span className="text-lg md:text-2xl">February 4-6, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 md:h-8 md:w-8 text-[#FF6B00]" />
            <span className="text-lg md:text-2xl">Goa, India</span>
          </div>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="mx-auto max-w-full overflow-x-auto">
        <div className="min-w-[320px] md:min-w-[768px] lg:min-w-[1024px]">
          {/* Header Row */}
          <div className="grid grid-cols-4">
            <div className="border border-white bg-[#004466] p-2 md:p-4">
              <h2 className="text-sm md:text-xl font-bold text-white">
                DAY/TIME
              </h2>
            </div>
            <div className="border border-white bg-[#004466] p-2 md:p-4">
              <h2 className="text-sm md:text-xl font-bold text-white">
                TUESDAY
              </h2>
            </div>
            <div className="border border-white bg-[#004466] p-2 md:p-4">
              <h2 className="text-sm md:text-xl font-bold text-white">
                WEDNESDAY
              </h2>
            </div>
            <div className="border border-white bg-[#004466] p-2 md:p-4">
              <h2 className="text-sm md:text-xl font-bold text-white">
                THURSDAY
              </h2>
            </div>
          </div>

          {/* Time Slots */}
          {/* 10 AM - 5 PM */}
          <div className="grid grid-cols-4">
            <div className="border border-white bg-[#002147] p-2 md:p-4">
              <span className="text-xs md:text-lg text-white">
                10 AM - 5 PM
              </span>
            </div>
            <div className="border border-white bg-[#002147] p-2 md:p-4"></div>
            <div className="border border-white bg-[#2E1F5E] p-2 md:p-4">
              <span className="text-xs md:text-lg text-white">
                IIMW Pro Conference Day 1
              </span>
            </div>
            <div className="border border-white bg-[#2E1F5E] p-2 md:p-4">
              <span className="text-xs md:text-lg text-white">
                IIMW Pro Conference Day 2
              </span>
            </div>
          </div>

          {/* 6 PM - 10 PM */}
          <div className="grid grid-cols-4">
            <div className="border border-white bg-[#002147] p-2 md:p-4">
              <span className="text-xs md:text-lg text-white">
                6 PM - 10 PM
              </span>
            </div>
            <div className="border border-white bg-[#B8860B] p-2 md:p-4">
              <span className="text-xs md:text-lg text-white">
                IIMW Opening Show
              </span>
            </div>
            <div className="border border-white bg-[#D2691E] p-2 md:p-4">
              <span className="text-xs md:text-lg text-white">
                IIMW Live Showcase Day 1 Outdoors
                <br className="hidden md:inline" />
                <span className="md:hidden"> - </span>
                2-3 Stages
              </span>
            </div>
            <div className="border border-white bg-[#D2691E] p-2 md:p-4">
              <span className="text-xs md:text-lg text-white">
                IIMW Live Showcase Day 2 Outdoors
                <br className="hidden md:inline" />
                <span className="md:hidden"> - </span>
                2-3 Stages
              </span>
            </div>
          </div>

          {/* 10 PM - 2 AM */}
          <div className="grid grid-cols-4">
            <div className="border border-white bg-[#002147] p-2 md:p-4">
              <span className="text-xs md:text-lg text-white">
                10 PM - 2 AM
              </span>
            </div>
            <div className="border border-white bg-[#002147] p-2 md:p-4"></div>
            <div className="border border-white bg-[#D2691E] p-2 md:p-4">
              <span className="text-xs md:text-lg text-white">
                IIMW Live Showcase Day 1 Indoors
                <br className="hidden md:inline" />
                <span className="md:hidden"> - </span>
                2-3 Venues
              </span>
            </div>
            <div className="border border-white bg-[#D2691E] p-2 md:p-4">
              <span className="text-xs md:text-lg text-white">
                IIMW Live Showcase Day 2 Indoors
                <br className="hidden md:inline" />
                <span className="md:hidden"> - </span>
                2-3 Venues
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
