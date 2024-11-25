import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  SnailIcon as Snapchat,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer-font bg-[#001B37] relative overflow-hidden font-sans w-[100%] lg:px-20">
      {/* Abstract shapes decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        {/* Replace this with your actual SVG or component for the abstract shapes */}
        <div className="w-full bg-[url('/abstract-shapes.svg')] bg-no-repeat bg-contain"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto lg:w-[90%] sm:w-[70%] px-4 py-8 flex flex-col">
      <div className="flex flex-row justify-between flex-grow">
        {/* Left navigation */}
        <nav className="space-y-2 z-50 text-white text-[30px] md:text-[50px] font-extrabold leading-none">
          <ul className="lg:space-y-2 sm:space-y-2 mt-[5%]">
            <li>
              <Link
                href="#event-info"
                className=" footer-font cursor-pointer text-white sm:text-3xl md:text-5xl lg:text-6xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="#schedule"
                className=" footer-font cursor-pointer text-white sm:text-3xl md:text-5xl lg:text-6xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
              >
                SCHEDULE
              </Link>
            </li>
            <li>
              <Link
                href="#news"
                className=" footer-font cursor-pointer text-white sm:text-3xl md:text-5xl lg:text-6xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
              >
                NEWS
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className=" footer-font cursor-pointer text-white sm:text-3xl md:text-5xl lg:text-6xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right navigation */}
        <nav className="space-y-2 z-50 text-white text-[18px] md:text-[50px] font-bold leading-none">
          <ul className="lg:space-y-0 sm:space-y-2 mt-[10%]">
            <li>
              <Link
                href="#link1"
                className=" footer-font cursor-pointer text-white sm:text-2xl md:text-3xl lg:text-4xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
              >
                PARTNERS
              </Link>
            </li>
            <li>
              <Link
                href="#link2"
                className=" footer-font cursor-pointer text-white  sm:text-2xl md:text-3xl lg:text-4xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                href="#link3"
                className=" footer-font cursor-pointer text-white sm:text-2xl md:text-3xl lg:text-4xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
              >
                PRIVACY
              </Link>
            </li>
            <li>
              <Link
                href="#link4"
                className=" footer-font cursor-pointer text-white  sm:text-2xl md:text-3xl lg:text-4xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
              >
                TERMS
              </Link>
            </li>
            <li>
              <Link
                href="#link4"
                className=" footer-font cursor-pointer text-white  sm:text-2xl md:text-3xl lg:text-4xl font-bold italic hover:text-yellow-500 transition-colors transform hover:scale-105"
              >
                COOKIES
              </Link>
            </li>
          </ul>
        </nav>
      </div>

        {/* Image sections */}
        <div className="flex flex-col md:flex-row mt-16">
          {/* Left image section with 4 images */}
          <div className="flex flex-col justify-center md:w-1/2 gap-5">
            <Image
              src="/footer1.svg"
              alt="Image 1"
              width={200}
              height={150}
              className="m-2"
            />
            <Image
              src="/footer2.svg"
              alt="Image 2"
              width={425}
              height={150}
              className="m-2"
            />
            <Image
              src="/footer3.svg"
              alt="Image 3"
              width={380}
              height={150}
              className="m-2"
            />
          </div>

          {/* Right image section with 1 image */}
          <div className="flex justify-center md:w-1/2 ">
            <Image
              src="/footerbackground.png"
              alt="Image 5"
              width={800}
              height={300}
              className=" absolute right-0 bottom-0"
            />
          </div>
        </div>
      </div>

      {/* Footer content */}
    </div>
  );
}
