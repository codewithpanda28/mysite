import Image from 'next/image'
import Link from 'next/link'

export default function NewsSection() {
  return (
<div className="min-h-screen bg-white px-12 py-16 md:px-16 lg:px-24 w-full z-50">
      {/* News Header */}
      <h1 className="text-8xl font-black mb-16 tracking-tighter pl-8 md:pl-12">NEWS</h1>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-8 md:pl-12">
        {/* Article 1 */}
        <Link href="#" className="group">
          <div className="space-y-4">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Concert scene with fire effects"
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-2xl font-black tracking-tight">OFFICIAL 2022 AFTERMOVIE</h2>
            <div className="font-mono text-sm">December 19, 2022</div>
          </div>
        </Link>

        {/* Article 2 */}
        <Link href="#" className="group">
          <div className="space-y-4">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Concert crowd with purple lighting"
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-2xl font-black tracking-tight">WEEKEND ONE RECAP MOVIE</h2>
            <div className="font-mono text-sm">December 19, 2022</div>
          </div>
        </Link>

        {/* Article 3 */}
        <Link href="#" className="group">
          <div className="space-y-4">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Artist portrait"
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-2xl font-black tracking-tight">FRESH MIX FRIDAY</h2>
            <div className="font-mono text-sm">November 27, 2022</div>
          </div>
        </Link>
      </div>
    </div>
  )
}