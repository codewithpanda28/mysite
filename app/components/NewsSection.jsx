import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const mockData = [
  {
    id: 1,
    description: "India International Music Week to be held in Goa in 2025",
    created_at: "2024-01-23T12:00:00Z",
    urls: { small: "/news1.svg" },
    alt_description: "A beautiful landscape",
    links: {
      html: "https://www.heraldgoa.in/amp/story/cafe/india-international-music-week-to-be-held-in-goa-in-2025/216912",
    },
  },
  {
    id: 2,
    description:
      "India International Music Week 2025 Opens Applications for Artists",
    created_at: "2024-09-06T12:00:00Z",
    urls: { small: "/news2.svg" },
    alt_description: "A city skyline",
    links: {
      html: "https://rollingstoneindia.com/india-international-music-week-iimw-2025-apply-to-perform/amp/",
    },
  },
 

];

export default function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPreviousIcon, setShowPreviousIcon] = useState(false);

  useEffect(() => {
    const monthNames = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];
    const formattedArticles = mockData.map((photo, index) => {
      const date = new Date(photo.created_at);
      const formattedDate = ` ${
        monthNames[date.getMonth()]
      }  ${date.getDate()}, ${date.getFullYear()}`;
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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
      setShowPreviousIcon(true);
    }
  };

  const handlePrevious = () => {
    if (articles.length > 0) {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + articles.length) % articles.length;
        setShowPreviousIcon(newIndex !== 0);
        return newIndex;
      });
    }
  };

  return (
    // news section start
    <div
      className="relative lg:min-h-[100vh] lg:mb-0 mb-[60px] bg-white lg:py-[80px] py-[40px] md:px-14  lg:pl-[60px] px-[2%] w-full"
      style={{ zIndex: 2 }}
    >
      {/* news heading section */}
      <h1 className="main-subtitle lg:ml-[-5%] ml-[16px] lg:mt-0 lg:mr-0  mr-[16px]    text-8xl lg:text-[80px] font-black lg:mb-[72px] mb-[32px] tracking-tighter md:pl-[60px]">
        NEWS
      </h1>

      <div className="relative lg:w-full md:w-auto w-full lg:mt-0 ">
      <div
  className="flex gap-10 w-full overflow-x-auto custom-scrollbar transition-transform duration-500 ease-in-out"
  style={{ gap: "40px" }}
>
  {articles.map((article, index) => (
    <Link
      key={article.id}
      href={article.link}
      className={`group flex-shrink-0 ${
        index >= currentIndex && index < currentIndex + 3 ? "block" : "hidden"
      }`}
      style={{
        zIndex: index === currentIndex ? 1 : 0,
      }}
    >
      <div className="space-y-4">
        <div className="w-[416px] h-[276px] mb-[24px] relative overflow">
          <Image
            src={article.image.src}
            alt={article.image.alt || "Image description not available"}
            width={400}
            height={276}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            style={{
              transform: "translateZ(0)",
              transition: "transform 0.5s, filter 0.5s",
            }}
          />
        </div>
        <h2 className="main-subtitle text-[20px] font-black tracking-tight upp line-clamp-2">
          {article.title}
        </h2>
        <div className="section-card text-[20px] ">{article.date}</div>
      </div>
    </Link>
  ))}
</div>
      </div>

      <div className="flex justify-center mt-8">
        {showPreviousIcon && (
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-[#FFFFFF99] rounded-full border-black mr-4 absolute top-[50%] lg:left-[6%] md:left-[9%] left-[6%] hover:scale-110 transition-transform duration-300"
            style={{ zIndex: 3 }}
          >
            <Image
              src="/leftarrow.svg"
              width={15}
              height={15}
              alt="Previous"
              className="inline-block rotate-180"
            />
          </button>
        )}
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-[#FFFFFF99] rounded-full absolute lg:right-[75px] right-[7%] md:right-[9%] top-[50%]  hover:scale-110 transition-transform duration-300"
          style={{ zIndex: 3 }}
        >
          <Image
            src="/leftarrow.svg"
            width={15}
            height={15}
            alt="Next"
            className="inline-block"
          />
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
            overflow-x: hidden;
          }
          .flex > :global(a) {
            width: 100%;
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

