"use client";
import Image from "next/image"; // Import Image component from Next.js
import { useState } from "react";
import {
  XCircle,
  Menu,
  LucideX,
  ChevronLeft,
  Facebook,
  Instagram,
  Music2,
  AirplayIcon as Spotify,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [artists, setArtists] = useState([
    {
      id: 0,
      name: "Artist One",
      image: "news1.svg",
      bio: "Bio for Artist One.",
      socialLinks: {
        facebook: "https://facebook.com/artistone",
        instagram: "https://instagram.com/artistone",
        spotify: "https://spotify.com/artistone",
      },
    },
    {
      id: 1,
      name: "Artist Two",
      image: "news2.svg",
      bio: "Bio for Artist Two.",
      socialLinks: {
        facebook: "https://facebook.com/artisttwo",
        instagram: "https://instagram.com/artisttwo",
        spotify: "https://spotify.com/artisttwo",
      },
    },
    {
      id: 2,
      name: "Artist Three",
      image: "news3.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
    {
      id: 3,
      name: "Artist Three",
      image: "news1.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
    {
      id: 4,
      name: "Artist Three",
      image: "news2.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
    {
      id: 5,
      name: "Artist Three",
      image: "news3.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
    {
      id: 6,
      name: "Artist Three",
      image: "news1.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
    {
      id: 7,
      name: "Artist Three",
      image: "news2.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
    {
      id: 8,
      name: "Artist Three",
      image: "news3.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false); // Added state for panel open
  const [selectedArtist, setSelectedArtist] = useState(null); // Added state for selected artist

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-50 w-[40%] text-white md:absolute lg:right-0 sm:right-[25%] md:right-0">
      <button
        className="block md:hidden lg:mt-0 mt-[17%] p-2 rounded-sm text-white text-2xl close-icon ml-[90%] bg-orange-500"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          color: isMenuOpen ? "white" : undefined,
          transition: "transform 0.3s",
          transform: isMenuOpen ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {isMenuOpen ? <XCircle /> : <Menu />}
      </button>

      <div
        className={`menu-container flex flex-col ml-auto absolute md:flex-row ${
          isMenuOpen ? "block" : "hidden"
        } md:flex `}
      >
        <div
          className="relative md:mx-3 "
          onMouseEnter={() => setActiveMenu(0)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link
            href="#"
            className="main-subtitle block mx-[-30px] px-3 py-3 text-white text-xl transition-all duration-300 bg-[#56AEFF] hover:opacity-100 hover:transform hover:translate-x-[-30px] hover:scale-105 hover:shadow-lg hover:translate-y-1 hover:translate-x-1 whitespace-nowrap overflow-hidden text-ellipsis z-100 hidden md:block"
          >
            FESTIVAL
          </Link>
          <div
            className={`absolute left-[-120%]  w- overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-z-10 ${
              activeMenu === 0 ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#56AEFF]">
              <button
                onClick={() => setIsPanelOpen(true)}
                className="main-subtitle block px-5 py-4 mt- text-white hover:bg-black/20 transition-colors"
                style={{
                  transition: "transform 0.3s",
                  transform: "translateZ(0)",
                  willChange: "transform",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateZ(10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateZ(0)")
                }
              >
                ARTISTS
              </button>
            </div>
          </div>

          {/* artist-image */}
        <button
  onClick={() => {
    setIsPanelOpen(false);
    setSelectedArtist(null);
  }}
  className={`absolute right-[-130%] top-[500%] px-3 py-3 rounded-full bg-white text-black transform transition-all duration-300 z-50 ${
    !isPanelOpen ? "hidden" : ""
  }`}
  style={{ zIndex: 1000 }}
>
  <Image
    src="closeicon.svg"
    alt="Button Image"
    className="drop-shadow-md hover:drop-shadow-lg"
    width={30}
    height={30}
  />
</button>
          <div
            className={` fixed inset-y-0 left-0 w-[70%] min-h-[100vh] h-[100vh] max-h-[100vh] bg-[#6046FF] transform transition-transform duration-100 ease-in-out z-40 overflow-y-auto ${
              isPanelOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-0">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap- mt-0">
                {artists.map((artist) => (
                  <button
                    key={artist.id} // Use the unique id as the key
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
                  <h2 className="main-subtitle uppercase absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-[20px] font-bold w-[100%]">
                      {artist.name}
                    </h2>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* artist Detail  */}

          <div
            className={`fixed inset-y-0 right-[31%] h-full transition-all duration-300 ease-in-out ${
              selectedArtist
                ? "w-full max-w-[40%] bg-[#6046FF] animate-slideInRight"
                : "w-0 max-w-0  "
            } z-50`}
          >
            {selectedArtist && (
          <button
  onClick={() => setSelectedArtist(null)}
  className="absolute left-[-15%] top-[7%] bg-white text-black rounded-full p-2 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:translate-z-4 hover:shadow-lg"
>
  <Image src="arrowicon.svg"
  width={30}
  height={30}
  alt="Arrow Right" className="w-7" />
</button>
            )}
            {selectedArtist && (
              <div className="w-full h-full overflow-y-auto">
                <div className="relative w-full h-1/2">
                  <Image
                    src={selectedArtist.image}
                    alt={selectedArtist.name}
                    className="object-cover p-14 w-full h-full"
                    fill
                  />
                </div>

                <div className="p-14 text-white h-1/2 mt-[-14%]">
                  <h1 className="main-subtitle text-4xl font-bold mb-6 ">
                    {selectedArtist.name}
                  </h1>
                  <p className="section-card text-lg mb-8">{selectedArtist.bio}</p>

                  <div className="flex gap-0">
                    <a
                      href={selectedArtist.socialLinks.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-pink-500 transition-opacity duration-300 rounded-full p-4"
                    >
                      <Spotify size={24} />
                    </a>
                    <a
                      href={selectedArtist.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-pink-500 transition-opacity duration-300 rounded-full p-4"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href={selectedArtist.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-pink-500 transition-opacity duration-300 rounded-full p-4"
                    >
                      <Instagram size={24} />
                    </a>
                    <button className="hover:bg-pink-500 transition-opacity duration-300 rounded-full p-4">
                      <Music2 size={24} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="relative md:mx-3 "
          onMouseEnter={() => setActiveMenu(1)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link
            href="#"
            className="main-subtitle block mx-[-30px] px-3 py-3 text-white text-xl transition-all duration-300 bg-[#fe6f00] hover:opacity-100 hover:transform hover:translate-x-[-30px] hover:scale-105 hover:shadow-lg hover:translate-y-1 hover:translate-x-1 whitespace-nowrap overflow-hidden text-ellipsis z-100 hidden md:block"
          >
            CONFERENCE
          </Link>
          <div
            className={`absolute left-[-120%]  w- overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-z-10 ${
              activeMenu === 1 ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#fe6f00] ml-12 ">
              <Link
                href="/conference-timetable"
                className="main-subtitle  block px-5 py-3 text-white hover:bg-black/20 transition-colors"
                style={{
                  transition: "transform 0.3s",
                  transform: "translateZ(0)",
                  willChange: "transform",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateZ(10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateZ(0)")
                }
              >
                SPEAKER
              </Link>
            </div>
          </div>
        </div>

        <div
          className="relative md:mx-3 "
          onMouseEnter={() => setActiveMenu(2)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link
            href="/info"
            className="main-subtitle block mx-[-30px] px-3 py-3 text-white text-xl transition-all duration-300 bg-yellow-500 hover:opacity-100 hover:transform hover:translate-x-[-30px] hover:scale-105 hover:shadow-lg hover:translate-y-1 hover:translate-x-1 whitespace-nowrap overflow-hidden text-ellipsis z-100  md:block"
          >
            INFO
          </Link>
          <div
            className={`absolute left-[-800%]  w- overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-z-10 ${
              activeMenu === 2 ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-yellow-500">
              <Link
                href="/contact"
                className="main-subtitle  block px-5 py-3 text-white hover:bg-black/20 transition-colors"
                style={{
                  transition: "transform 0.3s",
                  transform: "translateZ(0)",
                  willChange: "transform",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateZ(10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateZ(0)")
                }
              >
                CONTACT
              </Link>
              <Link
                href="/info"
                className="main-subtitle  block px-5 py-3 text-white hover:bg-black/20 transition-colors"
                style={{
                  transition: "transform 0.3s",
                  transform: "translateZ(0)",
                  willChange: "transform",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateZ(10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateZ(0)")
                }
              >
                SCHEDULE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed main-subtitle inset-0 bg-gradient-to-r bg-[#012e5d] z-99 flex flex-col items-start justify-start h-screen p-4 w-3/5 md:hidden z-50">
          <div className="w-full">
            <Link
              href="#"
              className={`block w-full px-2 py-2 text-white ${
                isMenuOpen ? "bg-[#56aeff]" : ""
              } hover:bg-purple-700/80 text-left md:hidden transition-transform transform hover:scale-110 hover:shadow-xl`}
              onClick={(e) => e.preventDefault()}
            >
              FESTIVAL
            </Link>
            <Link
              href="/artists"
              className="menu-nav block w-full text-[16px]  px-6 py-4 text-white hover:text-[#56aeff] text-left transition-transform transform "
            >
              ARTISTS
            </Link>

            {/* Main Artist Grid Panel */}
            <div
              className={` fixed inset-y-0 left-0 w-[60%] min-h-[100vh] h-[100vh] max-h-[100vh] bg-[#6046FF] transform transition-transform duration-500 ease-in-out z-40 overflow-y-auto ${
                isPanelOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-0">
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="absolute right-4 top-2 text-white transform transition-all duration-300 
  hover:scale-110 hover:rotate-12 hover:translate-y-[-2px] hover:translate-x-[2px]
  hover:opacity-75 hover:shadow-lg hover:shadow-white/30
  active:scale-95 active:rotate-0 active:translate-y-[1px]
  motion-safe:animate-pulse
  perspective-1000 hover:preserve-3d
  border border-white/20 rounded-lg p-1
  backdrop-blur-sm bg-white/10"
                >
                  <XCircle
                    size={24}
                    className="drop-shadow-md hover:drop-shadow-lg"
                  />
                </button>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-12">
                  {artists.map((artist) => (
                    <button
                      key={artist.id} // Use the unique id as the key
                      className="relative aspect-square overflow-hidden group"
                      onClick={() => setSelectedArtist(artist)}
                    >
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                        {artist.name}
                      </h2>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Artist Detail Panel */}
            <div
              className={`fixed inset-y-0 right-0 h-full w-full max-w-[40%] bg-[#6046FF] transform transition-transform duration-500 ease-in-out z-50 ${
                selectedArtist ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {selectedArtist && (
                <div className="w-full h-full overflow-y-auto">
                  <div className="relative w-full h-1/2">
                    <img
                      src={selectedArtist.image}
                      alt={selectedArtist.name}
                      className="object-cover w-full h-full"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <button
                      onClick={() => setSelectedArtist(null)}
                      className="absolute left-0 top-[0%] text-white flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:translate-z-4 hover:shadow-lg"
                    >
                      <ChevronRight className="w-14 h-14 animate-pulse " />
                    </button>
                  </div>

                  <div className="p-8 text-white h-1/2">
                    <h1 className="text-4xl font-bold mb-6">
                      {selectedArtist.name}
                    </h1>
                    <p className="text-lg mb-8">{selectedArtist.bio}</p>

                    <div className="flex gap-4">
                      <a
                        href={selectedArtist.socialLinks.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity"
                      >
                        <Spotify size={24} />
                      </a>
                      <a
                        href={selectedArtist.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity"
                      >
                        <Facebook size={24} />
                      </a>
                      <a
                        href={selectedArtist.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity"
                      >
                        <Instagram size={24} />
                      </a>
                      <button className="hover:opacity-75 transition-opacity">
                        <Music2 size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full">
            <Link
              href="#"
              className={`block w-full px-2 py-2 text-white ${
                isMenuOpen ? "bg-[#fe6f00]" : ""
              } hover:bg-purple-700/80 text-left md:hidden transition-transform transform hover:scale-110 hover:shadow-xl`}
              onClick={(e) => e.preventDefault()}
            >
              CONFERENCE
            </Link>
            <Link
              href="/conference-timetable"
              className="menu-nav block w-full text-[16px]  px-6 py-4 text-white hover:text-[#fe6f00] text-left transition-transform transform "
            >
              SPEAKER
            </Link>
          </div>
          <div className="w-full">
            <Link
              href="#"
              className={`block w-full px-2 py-2 text-white ${
                isMenuOpen ? "bg-yellow-500" : ""
              } hover:bg-purple-700/80 text-left md:hidden transition-transform transform hover:scale-110 hover:shadow-xl`}
            >
              INFO
            </Link>
            <Link
              href="/contact"
              className="menu-nav block w-full text-[16px]  px-6 py-4 text-white hover:text-yellow-500 text-left transition-transform transform"
            >
              CONTACT
            </Link>
            <Link
              href="/info"
              className="menu-nav block w-full text-[16px] px-6 py-0 text-white hover:text-yellow-500 text-left transition-transform transform "
            >
              SCHEDULE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;