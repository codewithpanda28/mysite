'use client'

import { useState, useEffect } from 'react'
import { XCircle, Menu } from 'lucide-react'

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      title: 'BUY TICKET',
      bgColor: 'bg-blue-500',
      subItems: [
       
        { text: 'Events', link: '/events' },
        { text: 'Schedule', link: '/schedule' },
        { text: 'Artists', link: '/artists' },
        { text: 'Venues', link: '/venues' }
      ]
    },
    {
      title: 'SPEAKER',
      bgColor: 'bg-pink-500',
      subItems: [

        { text: 'Conference', link: '/conference-timetable' },
        { text: 'Panels', link: '/panels' },
        { text: 'Receptions', link: '/receptions' }
      ]
    },
    {
      title: 'ARTIST',
      bgColor: 'bg-yellow-500',
      subItems: [
      
        { text: 'Contact', link: '/contact' },
        { text: 'FAQ', link: '/faq' },
        { text: 'Location', link: '/location' }
      ]
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-container') && !event.target.closest('.close-icon') && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav className="relative z-50 w-[42%] text-white md:absolute lg:right-0 sm:right-[25%] md:right-0">
<button
  className="block md:hidden p-2 rounded-sm text-white text-2xl close-icon ml-[90%] bg-orange-500"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  style={{
    color: isMenuOpen ? 'white' : undefined,
    transition: 'transform 0.3s',
    transform: isMenuOpen ? 'rotateY(180deg)' : 'rotateY(0deg)'
  }}
>
  {isMenuOpen ? <XCircle /> : <Menu />}
</button>
      <div className={`menu-container flex flex-col ml-auto absolute md:flex-row ${isMenuOpen ? 'block' : 'hidden'} md:flex `}>
        {(() => {
          const items = [];
          for (let index = 0; index < menuItems.length; index++) {
            const item = menuItems[index];
            items.push(
              <div
                key={index}
                className="relative md:mx-3 "
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href="#"
                  className={`main-desc block mx-[-30px] px-2 py-2 text-white transition-all duration-300 ${item.bgColor} hover:opacity-100 hover:transform hover:translate-x-[-30px] hover:scale-105 hover:shadow-lg hover:translate-y-1 hover:translate-x-1 whitespace-nowrap overflow-hidden text-ellipsis z-100 hidden md:block`}
                >
                  {item.title}
                </a>
                <div
                 className={`absolute left-[-90%] w-70 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-z-10 ${
                    activeMenu === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`${item.bgColor}`}>
                    {(() => {
                      const subItems = [];
                      for (let subIndex = 0; subIndex < item.subItems.length; subIndex++) {
                        const subItem = item.subItems[subIndex];
                        subItems.push(
                    <a
  key={subIndex}
  href={subItem.link}
  className="navbar-subnav block px-4 py-3 text-white hover:bg-black/10 transition-colors"
  style={{ transition: 'transform 0.3s', transformStyle: 'preserve-3d' }}
  onMouseEnter={e => e.currentTarget.style.transform = 'translateZ(50px)'}
  onMouseLeave={e => e.currentTarget.style.transform = 'translateZ(100px)'}
>
  {subItem.text}
</a>
                        );
                      }
                      return subItems;
                    })()}
                  </div>
                </div>
              </div>
            );
          }
          return items;
        })()}
      </div>
   {isMenuOpen && (
  <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-purple-600 z-[1002] flex flex-col items-start justify-start h-screen p-4 w-3/5 md:hidden ">
  
    {(() => {
      const items = [];
      for (let index = 0; index < menuItems.length; index++) {
        const item = menuItems[index];
        items.push(
          <div key={index} className="w-full">
            <a
              href="#"
              className={`block w-full px-2 py-2 text-white ${isMenuOpen ? item.bgColor : ''} hover:bg-purple-700/80 text-left md:hidden transition-transform transform hover:scale-110 hover:shadow-xl`}
            >
              {item.title}
            </a>
            {(() => {
              const subItems = [];
              for (let subIndex = 0; subIndex < item.subItems.length; subIndex++) {
                const subItem = item.subItems[subIndex];
                subItems.push(
                  <a
                    key={subIndex}
                    href={subItem.link}
                    className="font-myfont block w-full px-4 py-2 text-white hover:bg-purple-700/80 text-left transition-transform transform hover:scale-110 hover:shadow-xl"
                  >
                    {subItem.text}
                  </a>
                );
              }
              return subItems;
            })()}
          </div>
        );
      }
      return items;
    })()}
  </div>
)}
    </nav>
  )
}

export default Navbar