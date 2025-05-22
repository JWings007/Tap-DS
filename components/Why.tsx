import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useRef, useEffect } from "react";

const useCountUp = (
  end: number,
  duration: number = 3000,
  prefix: string = "",
  suffix: string = ""
) => {
  const [count, setCount] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const startTime = performance.now();
            const startValue = 0;
            const endValue = end;

            const updateCount = (currentTime: number) => {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(
                startValue + (endValue - startValue) * easeOutQuart
              );

              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              }
            };

            requestAnimationFrame(updateCount);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [end, duration]);

  return { count, elementRef, prefix, suffix };
};

function Why() {
  const { count: jobsCount, elementRef: jobsRef } = useCountUp(65000);
  const { count: salaryCount, elementRef: salaryRef } = useCountUp(
    12,
    2000,
    "₹"
  );
  const { count: hikeCount, elementRef: hikeRef } = useCountUp(
    150,
    2000,
    "",
    "%"
  );
  const { count: growthCount, elementRef: growthRef } = useCountUp(
    30.7,
    2000,
    "$",
    " Billion"
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(448); // Default width
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    {
      ref: jobsRef,
      blob: "/svg/blob-1.svg",
      value: jobsCount.toLocaleString() + "+",
      text: "Data Science Jobs in India",
      color: "#0b1721",
      refImage: "/images/Nasscom-logo-svg.svg",
    },
    {
      ref: growthRef,
      blob: "/svg/blob5.svg",
      value: "$" + growthCount.toLocaleString(),
      text: "Billion Market Growth",
      color: "#0b1721",
      refImage: "/images/fortune.png",
    },
    {
      ref: salaryRef,
      blob: "/svg/blob4.svg",
      value: salaryCount.toLocaleString() + " LPA",
      text: "Average Salary",
      color: "#ffc021",
      refImage: "/images/Glassdoor_Logo.svg",
    },
    {
      ref: hikeRef,
      blob: "/svg/blob3.svg",
      value: hikeCount.toLocaleString() + "%",
      text: "Average Salary Hike",
      color: "#3646ff",
      refImage: "/images/Glassdoor_Logo.svg",
    },
  ];

  // useEffect(() => {
  //   let interval: NodeJS.Timeout;
  //   if (isAutoPlaying) {
  //     interval = setInterval(() => {
  //       setCurrentIndex((prev) => (prev + 1) % cards.length);
  //     }, 3000);
  //   }
  //   return () => clearInterval(interval);
  // }, [isAutoPlaying, cards.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 875);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setCardWidth(320);
    } else {
      setCardWidth(448);
    }
  }, [isMobile]);

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
    if (currentIndex < cards.length - 3 && !isMobile) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex < cards.length - 1 && isMobile) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Create indicators
  const indicators = Array(isMobile ? cards.length : cards.length - 2)
    .fill(0)
    .map((_, index) => (
      <button
        key={index}
        onClick={() => {
          setIsAutoPlaying(false);
          setCurrentIndex(index);
        }}
        className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 cursor-pointer hover:bg-[#2091d0] ${
          currentIndex === index ? "bg-[#2091d0] w-6" : "bg-gray-300"
        }`}
      />
    ));

  return (
    <div className="overflow-hidden w-full flex flex-col items-center justify-center relative py-5 lg:py-16">
      <div className="flex flex-col px-8 lg:px-32">
        <h1 className="text-3xl lg:text-4xl font-medium pb-4 lg:w-3/4 lg:leading-14 leading-10">
          Why
          <span className="text-[#2091d0]"> Data Science? </span>Explosive
          Growth, High Salaries & Unlimited Opportunities
        </h1>
        <div className="flex items-start justify-between flex-col lg:flex-row lg:items-center gap-4 lg:gap-0">
          <p className="text-gray-500 text-base lg:w-3/4">
            Data Science is the future. It's the key to unlocking the power of
            data and making informed decisions. It's the key to unlocking the
            power of data and making informed decisions.
          </p>
          <div className="flex items-center gap-8">
            <button
              className={`${
                currentIndex === 0 ? "bg-gray-300 scale-75" : "bg-[#2091d0]"
              } text-white p-4  rounded-full transition-all duration-200`}
              onClick={handlePrevious}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              className={`${
                currentIndex === cards.length - 1 && isMobile
                  ? "bg-gray-300 scale-75"
                  : currentIndex === cards.length - 3 && !isMobile
                  ? "bg-gray-300 scale-75"
                  : "bg-[#2091d0]"
              } text-white p-4  rounded-full transition-all duration-200`}
              onClick={handleNext}
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative py-8 lg:py-16 px-8 lg:px-32 w-full">
        <div className="">
          {/* Carousel container with cards */}
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {/* Display cards twice to create a smooth infinite loop effect */}
            {cards.map((card, i) => (
              <div
                key={i}
                className="w-[20rem] lg:w-[28rem] pr-4 flex-shrink-0"
              >
                <div
                  className={`relative text-right w-full flex flex-col gap-48 items-start justify-between border rounded-3xl px-10 py-14 group overflow-hidden cursor-pointer shadow-lg ${
                    i === 0
                      ? "border-[#0b1721]"
                      : i === 1
                      ? "border-[#d422f0]"
                      : i === 2
                      ? "border-[#ffc021]"
                      : "border-[#28f022]"
                  }`}
                  ref={card.ref}
                >
                  <img
                    src={card.blob}
                    alt=""
                    className="absolute w-3/4 rotate-[30deg] bottom-[-20%] lg:bottom-[-30%] left-[-30%] group-hover:scale-[5] transition-all duration-600 -z-1"
                  />
                  <div className="flex flex-col gap-8 items-start">
                    <img src={card.refImage} alt="" className="h-3 lg:h-5" />
                    <div className="flex flex-col items-start">
                      <h1
                        className={`text-5xl lg:text-7xl font-semibold ${
                          i === 0
                            ? "text-[#0b1721]"
                            : i === 1
                            ? "text-[#d422f0]"
                            : i === 2
                            ? "text-[#ffc021]"
                            : "text-[#28f022]"
                        } group-hover:text-white transition-all duration-500`}
                      >
                        {card.value}
                      </h1>
                      <p className="text-gray-500 group-hover:text-white transition-all duration-500 text-sm lg:text-base">
                        {card.text}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-white group-hover:scale-125 transition-all"
                  >
                    Read <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8">{indicators}</div>
      </div>
    </div>
  );
}

export default Why;

//   <button
//   onClick={handlePrevious}
//   className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-[#2091d0] shadow-lg flex items-center justify-center hover:bg-[#2091d0] transition-all duration-200 cursor-pointer hover:scale-110"
// >
//   <ChevronLeftIcon className="w-6 h-6 text-white" />
// </button>
// <button
//   onClick={handleNext}
//   className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-[#2091d0] shadow-lg flex items-center justify-center hover:bg-[#2091d0] transition-all duration-200 cursor-pointer hover:scale-110"
// >
//   <ChevronRightIcon className="w-6 h-6 text-white" />
// </button>
