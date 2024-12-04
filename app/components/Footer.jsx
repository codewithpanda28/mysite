import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative overflow-hidden font-sans w-full bg-[#001B37]">
      <div className="container mx-auto px-4 py- flex flex-col lg:hidden">
        {/* Mobile and Tablet content section */}
        <div className="flex flex-col justify-between">
          {/* Left content */}
          <nav className="space-y-4 mt-[40px] max-w-full z-10 text-white">
            <h2 className="text-xl mb-6 main-subtitle">
              Whether you are an Artist, Industry Professional, or Music
              Enthusiast - There something for everyone!
            </h2>
            <h3 className="text-xl mb-4 main-subtitle">
              Let&apos;s shape the{" "}
              <span className="text-[#FE6F00]">Global Music</span> scene
              together.
            </h3>
            <h3 className="text-[13px] main-subtitle">
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
              <h3 className="text-xl font-bold mb-6 text-white main-subtitle">
                OUR PARTNERS
              </h3>
        <div className="grid grid-cols-3 gap-4 justify-between items-center">
  {[1, 2, 3, 4, 5, 6].map((num) => (
    <div key={num} className="w-1/3 mb-3">
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
            <div className="mb-[110px]">
              <h3 className="text-xl font-bold mb-6 mt-[64px] text-white main-subtitle">
                FOLLOW US
              </h3>
              <div className="flex space-x-6 items-center">
                {[
                  [
                    "linkedin.svg",
                    "LinkedIn",
                    "https://www.linkedin.com/showcase/iimw/?viewAsMember=true",
                  ],
                  [
                    "instagram.svg",
                    "Instagram",
                    "https://www.instagram.com/iimw.in?igsh=czFocGVuMjZydDJ5",
                  ],
                ].map(([src, alt, url]) => (
                  <a
                    key={alt}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                 ["ARTIST", "#link1"],
                 ["SPEAKER", "#link3"],
                 ["SCHEDULE", "/info"],
                 ["CONATCT", "/contact"],
              ].map(([text, href]) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="main-subtitleleft block text-base font-bold hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
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
          <nav className="space-y-5 mt-[80px] max-w-[748px] z-10 text-white">
            <h2 className="text-2xl mb-[56px] main-subtitle ">
              Whether you are an Artist, Industry Professional, or Music
              Enthusiast - There something for everyone!
            </h2>
            <h3 className="text-3xl mb-[24px] main-subtitle">
              Let&apos;s shape the{" "}
              <span className="text-[#FE6F00]">Global Music</span> scene
              together.
            </h3>
            <h3 className="text-xl main-subtitle">
              February 4-6, 2025 | W Goa, India
            </h3>
          </nav>

          {/* Right navigation */}
          <nav className="mt-[75px] mr-[190px] text-white z-20">
            <ul className="flex flex-col space-y-2">
              {[
                ["ARTIST", "#link1"],
                ["SPEAKER", "#link3"],
                ["SCHEDULE", "/info"],
                ["CONATCT", "/contact"],
               
              ].map(([text, href]) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="main-subtitle block text-[24px] font-bold hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
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
            <h3 className="text-2xl font-bold mb-[40px] text-white main-subtitle">
              OUR PARTNERS
            </h3>
            <div className="grid grid-cols-3 gap-16 mb-[40px] items-center">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="w-full transform transition duration-300 hover:scale-110"
                >
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
          <div className="ml-48 z-10">
            <h3 className="text-2xl font-bold mb-[40px] text-white main-subtitle">
              FOLLOW US
            </h3>
            <div className="flex space-x-[40px] items-center">
              {[
                [
                  "linkedin.svg",
                  "LinkedIn",
                  "https://www.linkedin.com/showcase/iimw/?viewAsMember=true",
                ],
                [
                  "instagram.svg",
                  "Instagram",
                  "https://www.instagram.com/iimw.in?igsh=czFocGVuMjZydDJ5",
                ],
              ].map(([src, alt, url]) => (
                <a href={url} rel="noopener noreferrer" key={alt}>
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
        <div className="absolute bottom-[-50%] right-[-85%] z-1">
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
