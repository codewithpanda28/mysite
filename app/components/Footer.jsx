import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative overflow-hidden font-sans w-full bg-[#001B37]">
      <div className="container mx-auto px-4 py- flex flex-col lg:hidden">
        {/* Mobile and Tablet content section */}
        <div className="flex flex-col justify-between">
          {/* Left content */}
          <nav className="space-y-4 mt-[40px] max-w-full z-50 text-white">
            <h2 className="text-xl mb-6 footer-font">
              Whether you're an Artist, Industry Professional, or Music
              Enthusiast - There's something for everyone!
            </h2>
            <h3 className="text-xl mb-4 footer-font">
              Let's shape the{" "}
              <span className="text-[#FE6F00]">Global Music</span> scene
              together.
            </h3>
            <h3 className="text-[13px] footer-font">
              February 4-6, 2025 | W Goa, India
            </h3>
          </nav>
          </div>

          {/* Right navigation */}
 <div className="flex flex-row mt-[80px] gap-16">
  {/* Partners and Social Media section */}
  <div className="flex flex-col">
    {/* Partners Section */}
    <div>
      <h3 className="text-xl font-bold mb-6 text-white footer-font">
        OUR PARTNERS
      </h3>
<div className="flex flex-row w-[60%] justify-between items-center space-x-4">
        {[1, 2, 3].map((num) => (
          <div key={num} className="w-full">
            <Image
              src={`footer/image${num}.svg`}
              alt={`Partner ${num}`}
              width={40}
              height={52}
              className="w-[40px] max-w-[40px] h-auto"
            />
          </div>
        ))}
</div>
    </div>

    {/* Social Media Section */}
    <div className="mb-[196px]">
      <h3 className="text-xl font-bold mb-6 mt-[64px] text-white footer-font">
        FOLLOW US
      </h3>
     <div className="flex space-x-6 items-center">
  {[
    ["linkedin.svg", "LinkedIn", "https://www.linkedin.com/showcase/iimw/?viewAsMember=true"],
    ["instagram.svg", "Instagram", "https://www.instagram.com/iimw.in?igsh=czFocGVuMjZydDJ5"],
  ].map(([src, alt, url]) => (
    <a key={alt} href={url} target="_blank" rel="noopener noreferrer">
      <div className="w-8">
        <Image
          src={`footer/${src}`}
          alt={alt}
          width={150}
          height={60}
          className="w-full h-auto"
        />
      </div>
    </a>
  ))}
</div>
    </div>
  </div>

  {/* Navigation Section */}
  <nav className="z-10 text-white">
    <ul className="flex flex-col space-y-4">
      {[
        ["PARTNERS", "#link1"],
        ["CONTACT", "#link3"],
        ["SCHEDULE", "#link4"],
        ["INFO", "#link4"],
        ["COOKIES", "#link4"],
      ].map(([text, href]) => (
        <li key={text}>
          <Link
            href={href}
            className="footer-fontleft block text-base font-bold hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
</div>
      </div>

   <div className="hidden lg:block lg:w-full lg:min-h-screen lg:px-[5%]">
        {/* Large devices content section */}
        <div className="container mx-auto lg:px-0 py-16 flex flex-row justify-between">
          {/* Left content */}
          <nav className="space-y-5 mt-[80px] max-w-[748px] z-50 text-white">
            <h2 className="text-2xl mb-[56px] footer-font">
              Whether you're an Artist, Industry Professional, or Music
              Enthusiast - There's something for everyone!
            </h2>
            <h3 className="text-3xl mb-[24px] footer-font">
              Let's shape the{" "}
              <span className="text-[#FE6F00]">Global Music</span> scene
              together.
            </h3>
            <h3 className="text-xl footer-font">
              February 4-6, 2025 | W Goa, India
            </h3>
          </nav>

          {/* Right navigation */}
          <nav className="mt-[75px] mr-[190px] text-white z-20">
            <ul className="flex flex-col space-y-2">
              {[
                ["PARTNERS", "#link1"],
                ["CONTACT", "#link3"],
                ["SCHEDULE", "#link4"],
                ["INFO", "#link4"],
                ["COOKIES", "#link4"],
              ].map(([text, href]) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="footer-fontleft block text-[20px] font-bold hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Partners and Social Media section */}
      <div className="flex flex-row mt-32">
  {/* Partners Section */}
  <div className="mb-0">
    <h3 className="text-2xl font-bold mb-[40px] text-white footer-font">
      OUR PARTNERS
    </h3>
    <div className="grid grid-cols-4 gap-16 mb-[40px] items-center">
      {[1, 2, 3].map((num) => (
        <div key={num} className="w-full transform transition duration-300 hover:scale-110">
          <Image
            src={`footer/image${num}.svg`}
            alt={`Partner ${num}`}
            width={80}
            height={52}
            className="w-[88px] h-auto"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Social Media Section */}
<div className="ml-48">
  <h3 className="text-2xl font-bold mb-[40px] text-white footer-font">
    FOLLOW US
  </h3>
<div className="flex space-x-[40px] items-center">
  {[
    ["linkedin.svg", "LinkedIn", "https://www.linkedin.com/showcase/iimw/?viewAsMember=true"],
    ["instagram.svg", "Instagram", "https://www.instagram.com/iimw.in?igsh=czFocGVuMjZydDJ5"],
  ].map(([src, alt, url]) => (
    <a href={url} target="_blank" rel="noopener noreferrer" key={alt}>
      <div className="w-12 transform transition duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-lg z-20">
        <Image
          src={`footer/${src}`}
          alt={alt}
          width={150}
          height={60}
          className="w-full h-auto"
        />
      </div>
    </a>
  ))}
</div>
</div>
</div>
        {/* Image in bottom right corner */}
   <div className="absolute bottom-[-40%] right-[-83%] z-10">
  <Image
    src="rightbackground.svg"
    alt="Descriptive Alt Text"
    width={100}
    height={100}
    className="w-[80%] h-auto"
  />
</div>
      </div>
    </div>
  );
}
