"use client";
import Image from "next/image"; // Import Image component from Next.js
import { useState } from "react";
import {
  XCircle,
  Menu,
  Facebook,
  Instagram,
  Music2,
  AirplayIcon as Spotify,
} from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [artists, setArtists] = useState([
    {
      id: 0,
      name: "ARIJIT SINGH",
      image: "arijit.svg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eveniet, aperiam quas cumque quasi molestiae labore voluptatem neque similique optio aliquam aspernatur provident cum dicta reiciendis quo quibusdam perferendis sint minima exercitationem amet libero soluta odio voluptates. Totam quos quidem quo, explicabo nisi commodi exercitationem modi! Explicabo consequatur ducimus ullam ipsam. Saepe quisquam ducimus numquam delectus earum, ad maxime non quam quis alias similique soluta error exercitationem libero repudiandae dolorem hic suscipit tempore harum veniam blanditiis cupiditate rem! Laborum, odio quis. Excepturi odio nesciunt eius ipsam architecto nisi saepe possimus. Illo commodi aliquam a odio, ratione culpa cum ipsum animi?",
      socialLinks: {
        facebook: "https://www.linkedin.com/in/codewithpanda28/",
        instagram: "https://instagram.com/artistone",
        spotify: "https://spotify.com/artistone",
      },
    },
    {
      id: 1,
      name: "BOYS NOISE",
      image: "arijit.svg",
      bio: "Bio for Artist Two.",
      socialLinks: {
        facebook: "https://facebook.com/artisttwo",
        instagram: "https://instagram.com/artisttwo",
        spotify: "https://spotify.com/artisttwo",
      },
    },
    {
      id: 2,
      name: "ANNA LUNOE",
      image: "arijit.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
    {
      id: 5,
      name: "CHACE",
      image: "arijit.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
    {
      id: 6,
      name: "ARIJIT SINGH",
      image: "arijit.svg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eveniet, aperiam quas cumque quasi molestiae labore voluptatem neque similique optio aliquam aspernatur provident cum dicta reiciendis quo quibusdam perferendis sint minima exercitationem amet libero soluta odio voluptates. Totam quos quidem quo, explicabo nisi commodi exercitationem modi! Explicabo consequatur ducimus ullam ipsam. Saepe quisquam ducimus numquam delectus earum, ad maxime non quam quis alias similique soluta error exercitationem libero repudiandae dolorem hic suscipit tempore harum veniam blanditiis cupiditate rem! Laborum, odio quis. Excepturi odio nesciunt eius ipsam architecto nisi saepe possimus. Illo commodi aliquam a odio, ratione culpa cum ipsum animi?",
      socialLinks: {
        facebook: "https://facebook.com/artistone",
        instagram: "https://instagram.com/artistone",
        spotify: "https://spotify.com/artistone",
      },
    },
    {
      id: 7,
      name: "BOYS NOISE",
      image: "arijit.svg",
      bio: "Bio for Artist Two.",
      socialLinks: {
        facebook: "https://facebook.com/artisttwo",
        instagram: "https://instagram.com/artisttwo",
        spotify: "https://spotify.com/artisttwo",
      },
    },
    {
      id: 8,
      name: "ANNA LUNOE",
      image: "arijit.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
    {
      id: 9,
      name: "CHACE",
      image: "arijit.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
    {
      id: 10,
      name: "ARIJIT SINGH",
      image: "arijit.svg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eveniet, aperiam quas cumque quasi molestiae labore voluptatem neque similique optio aliquam aspernatur provident cum dicta reiciendis quo quibusdam perferendis sint minima exercitationem amet libero soluta odio voluptates. Totam quos quidem quo, explicabo nisi commodi exercitationem modi! Explicabo consequatur ducimus ullam ipsam. Saepe quisquam ducimus numquam delectus earum, ad maxime non quam quis alias similique soluta error exercitationem libero repudiandae dolorem hic suscipit tempore harum veniam blanditiis cupiditate rem! Laborum, odio quis. Excepturi odio nesciunt eius ipsam architecto nisi saepe possimus. Illo commodi aliquam a odio, ratione culpa cum ipsum animi?",
      socialLinks: {
        facebook: "https://facebook.com/artistone",
        instagram: "https://instagram.com/artistone",
        spotify: "https://spotify.com/artistone",
      },
    },
    {
      id: 11,
      name: "BOYS NOISE",
      image: "arijit.svg",
      bio: "Bio for Artist Two.",
      socialLinks: {
        facebook: "https://facebook.com/artisttwo",
        instagram: "https://instagram.com/artisttwo",
        spotify: "https://spotify.com/artisttwo",
      },
    },
    {
      id: 12,
      name: "ANNA LUNOE",
      image: "arijit.svg",
      bio: "Bio for Artist Three.",
      socialLinks: {
        facebook: "https://facebook.com/artistthree",
        instagram: "https://instagram.com/artistthree",
        spotify: "https://spotify.com/artistthree",
      },
    },
    {
      id: 13,
      name: "CHACE",
      image: "arijit.svg",
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
  const [selectedSpeaker, setSelectedSpeaker] = useState(null); // Added state for selected speaker

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closeArtistDetails = () => {
    setIsPanelOpen(false);
    setSelectedArtist(null);
    setIsMenuOpen(false); // Close the side navbar
  };

  const closeSpeakerDetails = () => {
    setIsPanelOpen(false);
    setSelectedSpeaker(null);
    setIsMenuOpen(false); // Close the side navbar
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
            onClick={closeArtistDetails}
            className={`absolute lg:right-[-130%] right-[-175px] top-[-80px] lg:top-[500%] px-3 py-3 rounded-full bg-white text-black transform transition-all duration-300 z-1000  ${
              !isPanelOpen ? "hidden" : ""
            }`}
            style={{ zIndex: 99999 }}
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
            className={` fixed inset-y-0  left-0 lg:w-[70%] w-[100%] min-h-[100vh] h-[100vh] max-h-[100vh] bg-[#001B37] transform transition-transform duration-100 ease-in-out z-[9999] overflow-y-auto ${
              isPanelOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap- mt-0">
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
                    <h2 className="main-subtitle uppercase absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-[22px] font-bold w-[100%]">
                      {artist.name}
                    </h2>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* artist Detail  */}

          <div
            className={`fixed inset-y-0 lg:right-[30%] right-0  z-[9999] h-full transition-all duration-300 ease-in-out ${
              selectedArtist
                ? "w-full lg:max-w-[50%] max-w-[85%] bg-[#001B37] animate-slideInRight"
                : "w-0 max-w-0  "
            } z-50`}
          >
            {selectedArtist && (
              <button
                onClick={() => setSelectedArtist(null)}
                className="absolute left-[-15%] top-[7%] bg-white text-black rounded-full p-2 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:translate-z-4 hover:shadow-lg"
              >
                <Image
                  src="arrowicon.svg"
                  width={30}
                  height={30}
                  alt="Arrow Right"
                  className="w-7 "
                />
              </button>
            )}
            {selectedArtist && (
              <div className="w-full h-full overflow-y-auto">
                <div className="relative w-full h-1/2">
                  <Image
                    src={selectedArtist.image}
                    alt={selectedArtist.name}
                    className="object-cover lg:p-10 p-6 w-full h-full"
                    fill
                  />
                </div>

                <div className="lg:p-10 p-6 text-white h-1/2 lg:mt-[-6%] mt-[-8%]">
                  <h1 className="main-subtitle lg:text-4xl text-[25px] font-bold lg:mb-6 mb-2 ">
                    {selectedArtist.name}
                  </h1>
                  <p className="section-card text-lg mb-8">
                    {selectedArtist.bio}
                  </p>

                  <div className="flex ml-[-3%]">
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
              <button
                onClick={() => setIsPanelOpen(true)}
                className="main-subtitle block px-5 py-3 text-white hover:bg-black/20 transition-colors"
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
              </button>
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
            <button
              onClick={() => setIsPanelOpen(true)}
              className="menu-nav block w-full text-[16px] px-6 py-4 text-white hover:text-[#56aeff] text-left transition-transform transform"
            >
              ARTISTS
            </button>
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
            <button
              onClick={() => setIsPanelOpen(true)}
              className="menu-nav block w-full text-[16px]  px-6 py-4 text-white hover:text-[#fe6f00] text-left transition-transform transform "
            >
              SPEAKER
            </button>
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