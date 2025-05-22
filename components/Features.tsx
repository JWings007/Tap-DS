import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
function Features() {
  const features = [
    {
      id: 1,
      title: "Certified Program",
      icon: "/svg/certificate-svgrepo-com.svg",
      image: "/images/certificate.jpg",
      description:
        "Data Scientist Program completion certificate recognized by industry leaders. Join 10,000+ alumni at top tech companies with our industry-recognized certification.",
    },
    {
      id: 2,
      title: "AR-Driven Learning",
      icon: "/svg/ar-zone-svgrepo-com.svg",
      image: "/images/AR.jpg",
      description:
        "Core curriculum delivered in live Augmented Reality online classes. Experience immersive learning with our cutting-edge AR technology that makes complex concepts easier to grasp.",
    },
    {
      id: 3,
      title: "Live AI Sessions",
      icon: "/svg/robot-svgrepo-com.svg",
      image: "/images/ai.jpg",
      description:
        "Interactive sessions on ChatGPT, Generative AI, prompt engineering, and more. Stay ahead of the curve with expert-led discussions on the latest AI trends and technologies.",
    },
    {
      id: 4,
      title: "Hands-on Projects",
      icon: "/svg/computer-svgrepo-com (1).svg",
      image: "/images/projects.jpg",
      description:
        "Build your portfolio with 3 Capstones and 25+ hands-on industry projects. Apply your skills to real-world problems across various domains and build an impressive portfolio.",
    },
    {
      id: 5,
      title: "Essential Tools",
      icon: "/svg/tools-svgrepo-com.svg",
      image: "/images/tools.jpg",
      description:
        "Master Python, Tableau, SQL, ChatGPT, OpenAI, DALL·E, and more. Gain practical experience with the most in-demand tools and technologies in the data science field.",
    },
    {
      id: 6,
      title: "Industry Masterclasses",
      icon: "/svg/building2-svgrepo-com.svg",
      image: "/images/masterclass.jpg",
      description:
        "Learn directly from experts at leading product-based companies. Get insider knowledge and networking opportunities with professionals from top tech organizations.",
    },
    {
      id: 7,
      title: "Exclusive Events",
      icon: "/svg/event-svgrepo-com.svg",
      image: "/images/events.jpg",
      description:
        "Participate in hackathons and 'ask-me-anything' sessions. Test your skills, collaborate with peers, and get your questions answered by industry professionals.",
    },
    {
      id: 8,
      title: "Career Services",
      icon: "/svg/services-svgrepo-com.svg",
      image: "/images/career.png",
      description:
        "Get noticed by top hiring companies with dedicated placement assistance. Enjoy 100% placement assistance to help you land your dream job in data science.",
    },
    {
      id: 9,
      title: "AI-Enabled Learning",
      icon: "/svg/elearning-learning-online-book-computer-svgrepo-com.svg",
      image: "/images/ai.jpg",
      description:
        "Personalized learning path with AI-powered recommendations. Experience seamless learning with adaptive content tailored to your progress and learning style.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardWidth, setCardWidth] = useState(336); // Default width
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) =>
          !isMobile
            ? (prev + 1) % (features.length - 2)
            : (prev + 1) % features.length
        );
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 875);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    if (currentIndex > 0 && !isMobile) {
      setCurrentIndex(currentIndex - 1);
    } else if (currentIndex > 0 && isMobile) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    if (currentIndex < features.length - 3 && !isMobile) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex < features.length - 1 && isMobile) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-full px-8 lg:px-32 py-8 lg:py-16 flex flex-col gap-5 lg:gap-10">
      <div>
        <h1 className="text-3xl lg:text-4xl font-medium pb-4">
          What Makes Our{" "}
          <span className="text-[#2091d0]">Data Science Program</span> Stand
          Out?
        </h1>
        <div className="flex items-start justify-between flex-col lg:flex-row lg:items-center gap-4 lg:gap-0">
          <p className="text-gray-500 text-sm lg:text-base">
            Gain an unbeatable edge with industry-aligned AR training, 1:1
            mentorship from FAANG experts, and a 100% placement guarantee. Our
            graduates land roles at 2X the industry average speed with hands-on
            GenAI projects.
          </p>
          <div className="flex items-center gap-8">
            <button
              className={`${
                currentIndex === 0
                  ? "bg-gray-300 scale-75"
                  : "bg-[#2091d0] scale-100"
              } text-white p-4  rounded-full transition-all duration-400 cursor-pointer`}
              onClick={handlePrevious}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              className={`${
                currentIndex === features.length - 1 && isMobile
                  ? "bg-gray-300 scale-75"
                  : currentIndex === features.length - 3 && !isMobile
                  ? "bg-gray-300 scale-75"
                  : "bg-[#2091d0] scale-100"
              } text-white p-4  rounded-full transition-all duration-400 cursor-pointer`}
              onClick={handleNext}
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex gap-[1rem] transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {features.map((feature) => {
              return (
                <div
                  className="min-w-[20rem] overflow-hidden flex flex-col items-center gap-4 rounded-4xl border-2 border-gray-200 hover:border-[#2091d0] transition-all duration-300 cursor-pointer relative after:content-[''] after:absolute after:top-1/2 after:-right-10 after:w-44 after:h-44 after:bg-gray-300 after:rounded-full after:opacity-20 hover:after:scale-200 hover:after:bg-[#2091d0] after:transition-all after:duration-300"
                  key={feature.id}
                >
                  <div className="z-2 relative w-full">
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-6 left-3 bg-white rounded-full p-4">
                      <img src={feature.icon} alt="" className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-col items-center px-6 py-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-medium lg:font-bold">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 tracking-wide text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array(isMobile ? features.length : features.length - 2)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-[#2091d0] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
