import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react"; // Import the icons from lucide-react

export default function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.unsplash.com/photos/?client_id=jP4BDlHEIUMFbr0J2o-89wS8YB1ZQ4DB2UvnXzu1ZtU")
      .then((response) => response.json())
      .then((data) => {
        const formattedArticles = data.map((photo, index) => ({
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
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleNext = () => {
    if (articles.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }
  };

  const handlePrevious = () => {
    if (articles.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
    }
  };

  return (
    <div className="min-h-3 bg-white px-12 py-16 md:px-16 lg:px-24 w-full z-50">
      <h1 className="text-8xl font-black mb-16 tracking-tighter pl-8 md:pl-12">NEWS</h1>

      <div className="relative pl-8 md:pl-12">
        <div className="flex gap-8 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-200 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {articles.map((article, index) => (
            <Link key={article.id} href={article.link} className="group flex-shrink-0 w-80">
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
                <h2 className="text-2xl font-black tracking-tight">{article.title}</h2>
                <div className="font-mono text-sm">{article.date}</div>
              </div>
            </Link>
          ))}
        </div>
        {articles.length > 1 && (
          <>
            <button onClick={handlePrevious} className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <ChevronLeft size={24} className="hover:scale-110 transition-transform duration-300" />
            </button>
            <button onClick={handleNext} className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <ChevronRight size={24} className="hover:scale-110 transition-transform duration-300" />
            </button>
          </>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .flex {
            flex-wrap: nowrap;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .flex {
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .flex > :global(a) {
            width: calc(50% - 16px);
          }
        }
        @media (max-width: 767px) {
          .flex {
            flex-wrap: wrap;
            justify-content: center;
          }
          .flex > :global(a) {
            width: 100%;
          }
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-gray-800 {
          scrollbar-color: #2d3748 #edf2f7;
        }
        .scrollbar-track-gray-200 {
          scrollbar-color: #edf2f7 #edf2f7;
        }
      `}</style>
    </div>
  );
}