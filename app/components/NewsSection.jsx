import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';

const mockData = [
  {
    id: 1,
    description: "Beautiful Landscape",
    created_at: "2023-10-01T12:00:00Z",
    urls: { small: "/news.jpg" },
    alt_description: "A beautiful landscape",
    links: { html: "https://example.com/photo1" },
  },
  {
    id: 2,
    description: "City Skyline",
    created_at: "2023-10-02T12:00:00Z",
    urls: { small: "https://example.com/image2.jpg" },
    alt_description: "A city skyline",
    links: { html: "https://example.com/photo2" },
  },
  {
    id: 3,
    description: " View",
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
    description: "Beautiful Landscape",
    created_at: "2023-10-01T12:00:00Z",
    urls: { small: "https://example.com/image1.jpg" },
    alt_description: "A beautiful landscape",
    links: { html: "https://example.com/photo1" },
  },
  {
    id: 2,
    description: "City Skyline",
    created_at: "2023-10-02T12:00:00Z",
    urls: { small: "https://example.com/image2.jpg" },
    alt_description: "A city skyline",
    links: { html: "https://example.com/photo2" },
  },
  {
    id: 3,
    description: " View",
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
    description: "Beautiful Landscape",
    created_at: "2023-10-01T12:00:00Z",
    urls: { small: "https://example.com/image1.jpg" },
    alt_description: "A beautiful landscape",
    links: { html: "https://example.com/photo1" },
  },
];

export default function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const formattedArticles = mockData.map((photo, index) => ({
      id: index + 1,
      title: photo.description || "Untitled",
      date: new Date(photo.created_at).toLocaleDateString(),
      image: {
        src: photo.urls.small,
        alt: photo.alt_description || "Image",
        width: 800,
        height: 600,
      },
      link: photo.links.html,
    }));
    setArticles(formattedArticles);
  }, []);

  const handleNext = () => {
    if (articles.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % articles.length);
    }
  };

  const handlePrevious = () => {
    if (articles.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 4 + articles.length) % articles.length);
    }
  };

  return (
    <div className="relative min-h-3 bg-white px-[100px] py-5 md:px-16 lg:pl-16 lg:pr-24 sm:px-10 w-full">
      <h1 className="footer-font text-6xl lg:text-8xl font-black mb-8 tracking-tighter pl-12 md:pl-16">NEWS</h1>

      <div className="relative md:pl-12">
        <div className="flex gap-8 w-full overflow-x-auto custom-scrollbar transition-transform duration-500 ease-in-out">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={article.link}
              className={`group flex-shrink-0 ${index >= currentIndex && index < currentIndex + 4 ? 'block' : 'hidden'}`}
              style={{ zIndex: index >= currentIndex && index < currentIndex + 4 ? 1 : 0 }}
            >
              <div className="space-y-4">
                <div className="aspect-[4/3] relative overflow">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt || "Image description not available"}
                    width={article.image.width}
                    height={article.image.height}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="news-font text-2xl font-black tracking-tight line-clamp-2">{article.title}</h2>
                <div className="news-date text-sm">{article.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button onClick={handlePrevious} className="px-2 py-2 bg-gray-300 rounded-full border-black mr-4 absolute top-[50%] left-[1%]">
          <ArrowLeft className="inline-block" />
        </button>
        <button onClick={handleNext} className="px-2 py-2 bg-gray-300 rounded-full absolute right-[1%] top-[50%]">
          <ArrowRight className="inline-block" />
        </button>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .flex {
            flex-wrap: nowrap;
          }
          .flex > :global(a) {
            width: 24%;
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