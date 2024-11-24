import Link from "next/link"
import { Facebook, Twitter, Instagram, SnailIcon as Snapchat } from 'lucide-react'

export default function Footer() {
  return (
<div className=" bg-[#6046FF] relative overflow-hidden font-sans w-[100%] p-4 ">
      {/* Abstract shapes decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        {/* Replace this with your actual SVG or component for the abstract shapes */}
        <div className="w-full  bg-[url('/abstract-shapes.svg')] bg-no-repeat bg-contain"></div>
      </div>

      {/* Main content */}
     <div className="container mx-auto w-[90%] px-4 py-8 flex flex-col ">
  <div className="flex flex-col md:flex-row justify-between flex-grow">
    {/* Left navigation */}
<nav className="space-y-1 text-white text-[40px] md:text-[50px] font-extrabold leading-none">
  <Link className="block hover:opacity-80 transition-opacity hover:scale-105 transform duration-300" href="#">SIGNUP</Link>
  <Link className="block hover:opacity-80 transition-opacity hover:scale-105 transform duration-300" href="#">LINEUP</Link>
  <Link className="block hover:opacity-80 transition-opacity hover:scale-105 transform duration-300" href="#">EVENT INFO</Link>
  <Link className="block hover:opacity-80 transition-opacity hover:scale-105 transform duration-300" href="#">NEWS</Link>
  <Link className="block hover:opacity-80 transition-opacity hover:scale-105 transform duration-300" href="#">FAQ</Link>
</nav>



<div className="absolute right-0 w-[40%]">
  <img src="https://assets-global.website-files.com/62f1dc4f15468ed2a2d18a29/62f9b1a38c6d8424bb0b8fe3_FX22-Memphis-2-p-1080.png" alt="description" className="h-full w-full object-cover"/>
</div>
  </div>

  {/* Footer content */}

</div>
    </div>
  )
}