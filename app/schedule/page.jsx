import Image from 'next/image'
import { Mail, Globe } from 'lucide-react'

export default function schedule() {
  return (
    <div className="relative min-h-screen bg-[#002147] p-4 md:p-8 overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-between items-start mb-8 md:mb-12">
          <Image
            src="/logo.svg"
            alt="IIMW Logo"
            width={120}
            height={40}
            className="w-24 md:w-32"
          />
          <Image
            src="logo.svg"
            alt="Diamond Logo"
            width={40}
            height={40}
            className="w-8 md:w-10"
          />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src="/placeholder.svg"
                  alt="Concert Scene 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src="/placeholder.svg"
                  alt="Concert Scene 2"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Rainbow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-2xl -z-10"></div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FF6B00] mb-4">
              SHAPE THE FUTURE OF MUSIC
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white mb-8 italic">
              Be a Part of IIMW 2025
            </h2>
            
            {/* Highlighted Text Section */}
            <div className="space-y-2 mb-12">
              <div className="bg-[#00FF9D]/20 backdrop-blur-sm p-2 rounded-lg">
                <p className="text-white/80 text-sm md:text-base">
                  Position your brand at the heart of music evolution.
                </p>
              </div>
              <div className="bg-[#00FF9D]/20 backdrop-blur-sm p-2 rounded-lg">
                <p className="text-white/80 text-sm md:text-base">
                  By exclusive branding opportunities and visibility.
                </p>
              </div>
              <div className="bg-[#00FF9D]/20 backdrop-blur-sm p-2 rounded-lg">
                <p className="text-white/80 text-sm md:text-base">
                  Contact us to explore sponsorship opportunities.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <a 
                href="mailto:contact@iimw.in" 
                className="flex items-center justify-center md:justify-start gap-3 text-white hover:text-[#FF6B00] transition-colors"
              >
                <Mail className="w-6 h-6 text-[#FF6B00]" />
                <span className="text-lg">contact@iimw.in</span>
              </a>
              <a 
                href="https://www.iimw.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center md:justify-start gap-3 text-white hover:text-[#FF6B00] transition-colors"
              >
                <Globe className="w-6 h-6 text-[#FF6B00]" />
                <span className="text-lg">www.iimw.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="absolute bottom-4 right-4">
          <Image
            src="logo.svg"
            alt="IMX Logo"
            width={100}
            height={40}
            className="w-20 md:w-24"
          />
        </div>
      </div>
    </div>
  )
}

