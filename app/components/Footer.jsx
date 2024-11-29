import Link from "next/link";
import { myfont } from "next/font/local";

import {
  Facebook,
  Twitter,
  Instagram,
  SnailIcon as Snapchat,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="  lg:min-h-screen  z-2  relative overflow-hidden font-sans w-[100%]  lg:px-20">
      {/* Abstract shapes decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        {/* Replace this with your actual SVG or component for the abstract shapes */}
        <div className="w-full bg-[url('/abstract-shapes.svg')] bg-no-repeat bg-contain"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto lg:w-[100%] sm:w-[70%] px-4 py-16 flex flex-col ">
        <div className="flex flex-row justify-between flex-grow">
          {/* Left navigation */}
          <nav className="max-w-[748px] mt-[58px] space-y-5 z-50 text-white text-[30px] md:text-[50px] font-extrabold leading-none">
            <h2 className="lg:text-2xl text-xl  mb-[39px] footer-font">
              Whether you’re an Artist, Industry Professional, or Music
              Enthusiast - There’s something for everyone!
            </h2>
            <h3 className="lg:text-3xl text-xl mb-[24px] footer-font">
              Let’s shape the{" "}
              <span className="text-[#FE6F00]"> Global Music </span> scene
              together.
            </h3>
            <h3 className="lg:text-xl text-[13px] footer-font">Februrary 4-6, 2025 | W Goa, India</h3>
          </nav>

          {/* Right navigation */}
          <nav className="space-y-2 z-50 text-white text-[20px] md:text-[38px] font-bold leading-none">
            <ul className="lg:space-y-[-5] space-y-2 lg:mt-[19%] mt-[50%] lg:mr-12">
              <li>
                <Link
                  href="#link1"
                  className="footer-fontleft cursor-pointer text-white sm:text-2xl md:text-3xl lg:text-2xl font-bold  hover:text-blue-500 transition-colors duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  PARTNERS
                </Link>
              </li>

              <li>
                <Link
                  href="#link3"
                  className="footer-fontleft cursor-pointer text-white sm:text-2xl md:text-3xl lg:text-2xl font-bold  hover:text-blue-500 transition-colors duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href="#link4"
                  className="footer-fontleft cursor-pointer text-white sm:text-2xl md:text-3xl lg:text-2xl font-bold  hover:text-blue-500 transition-colors duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  SCHEDULE
                </Link>
              </li>
              <li>
                <Link
                  href="#link4"
                  className="footer-fontleft cursor-pointer text-white sm:text-2xl md:text-3xl lg:text-2xl font-bold  hover:text-blue-500 transition-colors duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  INFO
                </Link>
              </li>
              <li>
                <Link
                  href="#link4"
                  className="footer-fontleft cursor-pointer text-white sm:text-2xl md:text-3xl lg:text-2xl font-bold  hover:text-blue-500 transition-colors duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  COOKIES
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Image sections */}

        <div className="flex  md:flex-row  lg:mt-32">
          {/* Left image section with 4 images */}
            {/* Partners Section */}
      <div className="mt-24">
  <h3 className="text-2xl font-bold mb-8 text-white footer-font">OUR PARTNERS</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-16 items-center mb-16">
<div className="">
  <Image
    src="footer/image1.svg"
    alt="Partner 1"
    width={80}
    height={52}
    className="w-48 h-auto"
  />
</div>
<div className="">
  <Image
    src="footer/image2.svg"
    alt="Partner 1"
    width={80}
    height={52}
    className="w-48 h-auto"
  />
</div>
<div className="">
  <Image
    src="footer/image3.svg"
    alt="Partner 1"
    width={80}
    height={52}
    className="w-48 h-auto"
  />
</div>
  </div>
</div>
<div className="mt-24 ml-48">
  <h3 className="text-2xl font-bold mb-8 text-white footer-font">FOLLOW US</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16">
    <div className="">
      <Image
        src="footer/linkedin.svg"
        alt="Service 1"
        width={150}
        height={60}
        className="w-28 ml-0 h-auto"
      />
    </div>
    <div className="">
      <Image
        src="footer/instagram.svg"
        alt="Service 2"
        width={150}
        height={60}
        className="w-full h-auto"
      />
    </div>
  </div>
</div>

          {/* Right image section with 1 image */}
          <div className="flex justify-center md:w-1/2 ">
            <Image
              src="/rightbackground.svg"
              alt="Image 5"
              width={1200}
              height={300}
              className=" absolute right-[-40%] bottom-[-28%]"
            />
          </div>
        </div>
      </div>

      {/* Footer content */}
    </div>
  );
}
