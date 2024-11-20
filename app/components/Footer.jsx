import Link from "next/link"
import { Facebook, Twitter, Instagram, SnailIcon as Snapchat } from 'lucide-react'

export default function Footer() {
  return (
    <div className="min-h-screen bg-[#6046FF] relative overflow-hidden font-sans m-4 z-50">
      {/* Abstract shapes decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        {/* Replace this with your actual SVG or component for the abstract shapes */}
        <div className="w-full h-full bg-[url('/abstract-shapes.svg')] bg-no-repeat bg-contain"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
        <div className="flex flex-col md:flex-row justify-between flex-grow">
          {/* Left navigation */}
          <nav className="space-y-1 text-white text-[40px] md:text-[50px] font-extrabold leading-none">
            <Link className="block hover:opacity-80 transition-opacity" href="#">SIGNUP</Link>
            <Link className="block hover:opacity-80 transition-opacity" href="#">LINEUP</Link>
            <Link className="block hover:opacity-80 transition-opacity" href="#">EVENT INFO</Link>
            <Link className="block hover:opacity-80 transition-opacity" href="#">NEWS</Link>
            <Link className="block hover:opacity-80 transition-opacity" href="#">FAQ</Link>
          </nav>

          {/* Right navigation */}
          <nav className="space-y-2 text-white mt-8 md:mt-0 text-lg">
            <Link className="block hover:opacity-80 transition-opacity" href="#">PARTNERS</Link>
            <Link className="block hover:opacity-80 transition-opacity" href="#">CONTACT</Link>
            <Link className="block hover:opacity-80 transition-opacity" href="#">PRIVACY</Link>
            <Link className="block hover:opacity-80 transition-opacity" href="#">TERMS</Link>
            <Link className="block hover:opacity-80 transition-opacity" href="#">COOKIES</Link>
          </nav>
        </div>

        {/* Footer content */}
        <div className="mt-auto">
          {/* Festival logo */}
       <div className="mb-12">
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 20H150" stroke="white" strokeWidth="2"/>
    <text x="10" y="30" fill="white" fontSize="18" fontWeight="bold">festival x</text>
  </svg>
</div>

          {/* Sponsor logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center mb-8">
            <div className="text-white">HARDWARE</div>
            <div className="text-white">ONELOVE</div>
            <div className="text-white">LIVE NATION</div>
            <div className="text-white">MOUNTAIN GOAT</div>
            <div className="text-white">LATITUDE PAY</div>
            <div className="text-white">RED BULL</div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center mb-8">
            <div className="text-white">JIM BEAM</div>
            <div className="text-white">tinder</div>
            <div className="text-white">ARCHIE ROSE</div>
            <div className="text-white">SMIRNOFF</div>
            <div className="text-white">DRY</div>
            <div className="text-white">DrinkWise</div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center mb-12">
            <div className="text-white">Uber</div>
            <div className="text-white">Glue Store</div>
            <div className="text-white">TEMPUS TWO</div>
          </div>

          {/* Footer navigation */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 text-white mb-4 md:mb-0">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Snapchat size={24} />
              </Link>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  )
}