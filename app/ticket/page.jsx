"use client";
import Image from "next/image";


import Link from "next/link";
// import Navbar from "../components/Navbar";

const menuItems = [
  { title: "BUY TICKETS", href: "/ticket" },
  { title: "LINEUP", href: "#" },
  { title: "EVENT INFO", href: "#" },
  { title: "PARTNERS", href: "#" },
  { title: "NEWS", href: "#" },
  { title: "FAQ", href: "#" },
  { title: "SIGNUP", href: "#" },
  { title: "CONTACT", href: "#" },
];

export default function Page() {





  return (
    <div className=" bg-[#001B37] h-[100vh]  relative overflow-hidden font-sans z-50">
      {/* Header */}
      <div className="lg:pl-0 lg:pb-0 lg:pr-0 lg:pt-0  pt-[120px] pl-[16px]  pr-[16px]">
        {/* <header className="fixed top-0 left-[-8px] right-2 z-50 flex items-center p-2 min-h-[100px] min-w-full sm:justify-between  lg:pl-24 lg:pt-0 lg:left-20 ">
          <div className="text-white text-3xl font-bold ml-8 mt-4 z-10">
            <Link href="/">
              <img
                src="/logo.svg"
                alt="Description of the image"
                width="144"
                height="100"
              />
            </Link>
          </div>

          {/* navbar */}
          {/* <Navbar /> */}

          {/* image for large devices */}
          {/* <div className="hidden lg:block mr-[10%] mt-[4%]">
            <Link href="/">
              <Image src="/Tittle.svg" alt="SIde Logo" width={64} height={64} />
            </Link>
          </div> */}
        {/* </header>  */}

        {/* Main content */}
        <main className="lg:pt-[132px] sm:pt-24 px-4 relative ">
          {/* Left side image */}
          <div className="left-[-30%] top-[-15%] w-[60%] h-[100%] block fixed z-[-1]">
            <Image
              src="/leftbackground.svg"
              alt="Left decoration"
              width={1864}
              height={800}
              className="bg-[#001B37] w-full object-cover"
            />
          </div>

          {/* Center content */}
          <div className="max-w-5xl mx-auto relative z-1 ">
            {/* LINEUP text */}
            <div className="z-[-1] absolute inset-0 flex justify-center items-center   w-[100%]">
              {/* LINEUP */}
              <Image
                src="/mainbackground.svg"
                alt="Image Description"
                width={1000}
                height={500}
                className="hidden lg:block lg:mt-[-60%] mt-[-100%] ml-[-10%] z-10 w-[100%] "
              />
            </div>

            {/* Artist lineup */}
            <div className="container h-[100vh] mt-[2%] lg:mx-auto">
            <div className="text-xl  mt-[20%]  md:text-3xl  font-extrabold ">
                  <p className="main-subtitle lg:text-[42px] md:text-3xl  lg:mt-0 mt-[50%]  lg:mb-[55px] mb-[50%]  text-[24px] text-center text-white">
                  &quot;Get ready-tickets go{" "}
                    <span className="text-[#FE6F00] ">live soon!</span>&quot;
                   
                  </p>
                </div>
            </div>
          </div>

          {/* Right side decoration */}
          <div className="absolute bottom-44 right-[-35%] h-100vh hidden lg:block">
            <Image
              src="/rightbackground.svg"
              width={1020}
              height={520}
              alt="Image"
              className="opacity-100 hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "bg-[#6046FF]",
                borderRadius: "8px",
                height: "100%",
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
