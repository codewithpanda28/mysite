"use client";

import { useState, useEffect } from "react";
import { XCircle, Menu } from "lucide-react";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".menu-container") &&
        !event.target.closest(".close-icon") &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    // navbar start
    <nav className="relative z-50 w-[42%] text-white md:absolute lg:right-0 sm:right-[25%] md:right-0">
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

      {/* festival section start */}
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
          <a
            href="#"
            className="main-desc block mx-[-30px] px-3 py-3 text-white text-xl transition-all duration-300 bg-[#56AEFF] hover:opacity-100 hover:transform hover:translate-x-[-30px] hover:scale-105 hover:shadow-lg hover:translate-y-1 hover:translate-x-1 whitespace-nowrap overflow-hidden text-ellipsis z-100 hidden md:block"
          >
            FESTIVAL
          </a>
          <div
            className={`absolute left-[-120%]  w- overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-z-10 ${
              activeMenu === 0
                ? "max-h-64 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#56AEFF]">
              <a
                href="/artists"
                className="news-title  block px-5 py-4 mt- text-white hover:bg-black/20 transition-colors"
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
              </a>
            </div>
          </div>
        </div>

        {/* conference section start  */}
        <div
          className="relative md:mx-3 "
          onMouseEnter={() => setActiveMenu(1)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <a
            href="#"
            className="main-desc block mx-[-30px] px-3 py-3 text-white text-xl transition-all duration-300 bg-[#fe6f00] hover:opacity-100 hover:transform hover:translate-x-[-30px] hover:scale-105 hover:shadow-lg hover:translate-y-1 hover:translate-x-1 whitespace-nowrap overflow-hidden text-ellipsis z-100 hidden md:block"
          >
            CONFERENCE
          </a>
          <div
            className={`absolute left-[-120%]  w- overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-z-10 ${
              activeMenu === 1
                ? "max-h-64 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#fe6f00] ml-12 ">
              <a
                href="/conference-timetable"
                className="news-title  block px-5 py-3 text-white hover:bg-black/20 transition-colors"
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
              </a>
            </div>
          </div>
        </div>

        {/* info section start */}
        <div
          className="relative md:mx-3 "
          onMouseEnter={() => setActiveMenu(2)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <a
            href="/info"
            className="main-desc block mx-[-30px] px-3 py-3 text-white text-xl transition-all duration-300 bg-yellow-500 hover:opacity-100 hover:transform hover:translate-x-[-30px] hover:scale-105 hover:shadow-lg hover:translate-y-1 hover:translate-x-1 whitespace-nowrap overflow-hidden text-ellipsis z-100 hidden md:block"
          >
            INFO
          </a>
          <div
            className={`absolute left-[-800%]  w- overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-z-10 ${
              activeMenu === 2
                ? "max-h-64 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-yellow-500">
              <a
                href="/contact"
                className="news-title  block px-5 py-3 text-white hover:bg-black/20 transition-colors"
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
              </a>
              <a
                href="/schedule"
                className="news-title  block px-5 py-3 text-white hover:bg-black/20 transition-colors"
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
              </a>
              <a
                href="/info"
                className="news-title  block px-5 py-3 text-white hover:bg-black/20 transition-colors"
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
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu start */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-600 z-99 flex flex-col items-start justify-start h-screen p-4 w-3/5 md:hidden z-50">
          <div className="w-full">
            <a
              href="#"
              className={`block w-full px-2 py-2 text-white ${
                isMenuOpen ? "bg-[#56AEFF]" : ""
              } hover:bg-purple-700/80 text-left md:hidden transition-transform transform hover:scale-110 hover:shadow-xl`}
            >
              FESTIVAL
            </a>
            <a
              href="/artists"
              className="menu-nav block w-full px-4 py-2 text-white hover:bg-purple-700/80 text-left transition-transform transform hover:scale-110 hover:shadow-xl"
            >
              ARTISTS
            </a>
          </div>
          <div className="w-full">
            <a
              href="#"
              className={`block w-full px-2 py-2 text-white ${
                isMenuOpen ? "bg-[#fe6f00]" : ""
              } hover:bg-purple-700/80 text-left md:hidden transition-transform transform hover:scale-110 hover:shadow-xl`}
            >
              CONFERENCE
            </a>
            <a
              href="/conference-timetable"
              className="menu-nav block w-full px-4 py-2 text-white hover:bg-purple-700/80 text-left transition-transform transform hover:scale-110 hover:shadow-xl"
            >
              SPEAKER
            </a>
          </div>
          <div className="w-full">
            <a
              href="/info"
              className={`block w-full px-2 py-2 text-white ${
                isMenuOpen ? "bg-yellow-500" : ""
              } hover:bg-purple-700/80 text-left md:hidden transition-transform transform hover:scale-110 hover:shadow-xl`}
            >
              INFO
            </a>
            <a
              href="/contact"
              className="menu-nav block w-full px-4 py-2 text-white hover:bg-purple-700/80 text-left transition-transform transform hover:scale-110 hover:shadow-xl"
            >
              CONTACT
            </a>
            <a
              href="/faq"
              className="menu-nav block w-full px-4 py-2 text-white hover:bg-purple-700/80 text-left transition-transform transform hover:scale-110 hover:shadow-xl"
            >
              FAQ
            </a>
            <a
              href="/location"
              className="menu-nav block w-full px-4 py-2 text-white hover:bg-purple-700/80 text-left transition-transform transform hover:scale-110 hover:shadow-xl"
            >
              LOCATION
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;