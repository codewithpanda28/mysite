import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const mockData = [
  {
    id: 1,
    description: "Beautiful Landscape",
    created_at: "2023-10-01T12:00:00Z",
    urls: { small: "/news1.svg" },
    alt_description: "A beautiful landscape",
    links: { html: "https://example.com/photo1" },
  },
  {
    id: 2,
    description: "City Skyline",
    created_at: "2023-10-02T12:00:00Z",
    urls: { small: "/news2.svg" },
    alt_description: "A city skyline",
    links: { html: "https://example.com/photo2" },
  },
  {
    id: 3,
    description: " View City Skyline City Skyline City Skyline City Skyline City Skylin",
    created_at: "2023-10-03T12:00:00Z",
    urls: { small: "/news3.svg" },
    alt_description: "A mountain view",
    links: { html: "https://example.com/photo3" },
  },
  {
    id: 4,
    description: "Ocean ",
    created_at: "2023-10-04T12:00:00Z",
    urls: { small: "/news1.svg" },
    alt_description: "An ocean sunset",
    links: { html: "https://example.com/photo4" },
  },
  {
    id: 1,
    description: "Beautiful Landscape ",
    created_at: "2023-10-01T12:00:00Z",
    urls: { small: "/news2.svg" },
    alt_description: "A beautiful landscape",
    links: { html: "https://example.com/photo1" },
  },
  {
    id: 2,
    description: " City Skyline City Skyline City Skyline City Skyline City Skyline",
    created_at: "2023-10-02T12:00:00Z",
    urls: { small: "/news3.svg" },
    alt_description: "A city skyline",
    links: { html: "https://example.com/photo2" },
  },
  {
    id: 3,
    description: " View ",
    created_at: "2023-10-03T12:00:00Z",
    urls: { small: "/news.jpg" },
    alt_description: "A mountain view",
    links: { html: "https://example.com/photo3" },
  },
  {
    id: 4,
    description: "Ocean ",
    created_at: "2023-10-04T12:00:00Z",
    urls: { small: "/news.jpg" },
    alt_description: "An ocean sunset",
    links: { html: "https://example.com/photo4" },
  },
  {
    id: 1,
    description: "Beautiful Landscape City Skyline City Skyline City Skyline City Skyline City Skylin",
    created_at: "2023-10-01T12:00:00Z",
    urls: { small: "/news2.svg" },
    alt_description: "A beautiful landscape",
    links: { html: "https://example.com/photo1" },
  },
];

export default function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPreviousIcon, setShowPreviousIcon] = useState(false);

 useEffect(() => {
  const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  const formattedArticles = mockData.map((photo, index) => {
    const date = new Date(photo.created_at);
    const formattedDate = ` ${monthNames[date.getMonth()]}  ${date.getDate()}, ${date.getFullYear()}`;
    return {
      id: index + 1,
      title: photo.description || "Untitled",
      date: formattedDate,
      image: {
        src: photo.urls.small,
        alt: photo.alt_description || "Image",
        width: 800,
        height: 600,
      },
      link: photo.links.html,
    };
  });
  setArticles(formattedArticles);
}, []);

  const handleNext = () => {
    if (articles.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % articles.length);
      setShowPreviousIcon(true);
    }
  };

  const handlePrevious = () => {
    if (articles.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 4 + articles.length) % articles.length);
      setShowPreviousIcon(currentIndex !== 0);
    }
  };

  return (
    // news section start
<div className="relative lg:min-h-screen bg-white  py-5 md:px-14 lg:pl-16 lg:pr-0 px-[2%] w-full" style={{ zIndex: 2 }}>

  {/* news heading section */}
  <h1 className="footer-font text-8xl lg:text-9xl font-black mb-14 tracking-tighter md:pl-16">NEWS</h1>

<div className="relative w-full md:w-auto sm:w-full">
    <div className="flex gap-8 w-full overflow-x-auto custom-scrollbar transition-transform duration-500 ease-in-out">
      {articles.map((article, index) => (
        <Link
          key={article.id}
          href={article.link}
          className={`group flex-shrink-0 ${index >= currentIndex && index < currentIndex + 3 ? 'block' : 'hidden'}`}
          style={{ zIndex: index >= currentIndex && index < currentIndex + 3 ? 1 : 0 }}
        >
          <div className="space-y-4">
            <div className="aspect-[4/3] relative overflow">
              <Image
                src={article.image.src}
                alt={article.image.alt || "Image description not available"}
                width={1200}
                height={900}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                style={{ transform: 'translateZ(0)', transition: 'transform 0.5s, filter 0.5s' }}
              />
            </div>
            <h2 className="footer-fontleft text-2xl font-black tracking-tight line-clamp-2">{article.title}</h2>
            <div className="news-date text-lg">{article.date}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>

<div className="flex justify-center mt-8">
  {showPreviousIcon && (
<button onClick={handlePrevious} className="px-4 py-2 bg-[#FFFFFF99] rounded-full border-black mr-4 absolute top-[50%] left-[6%] hover:scale-110 transition-transform duration-300" style={{ zIndex: 3 }}>
  <img src="/leftarrow.svg" alt="Previous" className="inline-block rotate-180" />
</button>
)}
<button onClick={handleNext} className="px-4 py-2 bg-[#FFFFFF99] rounded-full absolute right-[2%] top-[50%] hover:scale-110 transition-transform duration-300" style={{ zIndex: 3 }}>
  <img src="/leftarrow.svg" alt="Next" className="inline-block" />
</button>
</div>

  <style jsx>{`
    @media (min-width: 1024px) {
      .flex {
        flex-wrap: nowrap;
      }
      .flex > :global(a) {
        width: 33.33%;
      }
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      .flex {
        flex-wrap: nowrap;
      }
      .flex > :global(a) {
        width: 50%;
      }
    }
    @media (max-width: 767px) {
      .flex {
        flex-wrap: nowrap;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
      }
      .flex > :global(a) {
        width: 100%;
        scroll-snap-align: start;
      }
    }
    .custom-scrollbar {
      scrollbar-width: none; /* Firefox */
    }
    .custom-scrollbar::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}</style>
</div>
  );
}