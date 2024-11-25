import Link from "next/link"
import { Facebook, Twitter, Instagram, SnailIcon as Snapchat } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
  return (
<div className="footer-font  bg-[#6046FF] relative overflow-hidden font-sans w-[100%] lg:px-20   ">
      {/* Abstract shapes decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        {/* Replace this with your actual SVG or component for the abstract shapes */}
        <div className="w-full  bg-[url('/abstract-shapes.svg')] bg-no-repeat bg-contain"></div>
      </div>

      {/* Main content */}
     <div className="container mx-auto w-[90%] px-4 py-8 flex flex-col ">
  <div className="flex flex-col md:flex-row justify-between flex-grow">
    {/* Left navigation */}
<nav className="space-y-1 z-50 text-white text-[40px] md:text-[50px] font-extrabold leading-none">
<ul className="lg:space-y-5 sm:space-y-2 mt-[10%] ">
  <li>
    <Link
      href="#lineup"
      className="cursor-pointer text-white sm:text-3xl md:text-5xl lg:text-6xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
    >
      LINEUP
    </Link>
  </li>
  <li>
    <Link
      href="#event-info"
      className="cursor-pointer text-white sm:text-3xl md:text-5xl lg:text-6xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
    >
      EVENT INFO
    </Link>
  </li>
  <li>
    <Link
      href="#schedule"
      className="cursor-pointer text-white sm:text-3xl md:text-5xl lg:text-6xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
    >
      SCHEDULE
    </Link>
  </li>
  <li>
    <Link
      href="#news"
      className="cursor-pointer text-white sm:text-3xl md:text-5xl lg:text-6xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
    >
      NEWS
    </Link>
  </li>
  <li>
    <Link
      href="#contact"
      className="cursor-pointer text-white sm:text-3xl md:text-5xl lg:text-6xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
    >
      CONTACT
    </Link>
  </li>
</ul>
</nav>
<div className="absolute inset-0 flex justify-center items-center z-10 transition-transform duration-300 hover:scale-105">
            {/* LINEUP */}
            <Image
    src="/mainbackground.svg"
    alt="Image Description"
    width={1100}
    height={100}
    className=" transition-opacity w-[64%] duration-300 hover:opacity-80"
  />
          </div>




<div className="absolute z-10 lg:right-0 hidden lg:block w-full lg:w-auto">
<Image
        src="footerbackground.svg"
        alt="New Image"
        width={250}
        height={300}
        className='mt-[-13%]  '
      />
</div>
  </div>

  {/* Footer content */}

</div>
    </div>
  )
}