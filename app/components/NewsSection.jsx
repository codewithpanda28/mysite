import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div className="min-h-3 bg-white px-5 py-5 md:px-16 lg:pl-32 lg:pr-12 sm:px-10 w-full z-50">
      <h1 className="news-heading text-6xl lg:text-8xl font-black mb-16 tracking-tighter pl-12 md:pl-16">NEWS</h1>

      <div className="relative pl- md:pl-12">
        <div className="flex gap-8 w-full overflow-x-auto custom-scrollbar transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
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
          scrollbar-width: thin;
          scrollbar-color: #4a5568 #edf2f7;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4a5568;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: #edf2f7;
        }
      `}</style>
    </div>
  );
}