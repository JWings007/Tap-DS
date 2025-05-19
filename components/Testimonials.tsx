import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Star = ({ filled = true }: { filled?: boolean }) => {
  return filled ? (
    <svg
      className="w-5 h-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448 1.287 3.957c.3.922-.755 1.688-1.54 1.117L10 13.347l-3.375 2.47c-.784.57-1.838-.195-1.538-1.117l1.287-3.957-3.37-2.448c-.783-.57-.38-1.81.588-1.81h4.163l1.286-3.958z" />
    </svg>
  ) : (
    <svg
      className="w-5 h-5 text-gray-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448 1.287 3.957c.3.922-.755 1.688-1.54 1.117L10 13.347l-3.375 2.47c-.784.57-1.838-.195-1.538-1.117l1.287-3.957-3.37-2.448c-.783-.57-.38-1.81.588-1.81h4.163l1.286-3.958z" />
    </svg>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote:
        "The AR learning modules made complex ML concepts click instantly. Landed my dream job at Accenture with 60% salary hike!",
      fullText:
        "Tap Academy's AR platform transformed how I learn - visualizing neural networks in 3D space was revolutionary. Their placement team prepped me for 8 interviews, and I got 3 offers within a month of completing the course. The salary negotiation workshop alone was worth the entire course fee!",
      name: "Priya M.",
      role: "Data Scientist, Accenture",
      rating: 5,
      date: "15th Mar 2024",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      quote:
        "From mechanical engineer to Data Analyst at Capgemini in 5 months - the career transition support was exceptional.",
      fullText:
        "As a complete beginner, the Python fundamentals module gave me rock-solid coding skills. My mentor from Google spent 10+ hours helping me with my capstone project on predictive maintenance - which became my interview talking point. The 24/7 doubt support saved me countless times!",
      name: "Rahul K.",
      role: "Data Analyst, Capgemini",
      rating: 5,
      date: "2nd Feb 2024",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      quote:
        "The GenAI specialization helped me stand out - got promoted to AI Specialist at Glider within 6 months.",
      fullText:
        "The prompt engineering masterclass and LLM fine-tuning projects were exactly what my company needed. I implemented a ChatGPT integration that reduced our customer support costs by 30%, earning me an early promotion. The course paid for itself 10x over!",
      name: "Neha S.",
      role: "AI Specialist, Glider",
      rating: 4,
      date: "28th Jan 2024",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      quote:
        "100% placement guarantee wasn't marketing - I had 3 offers before course completion!",
      fullText:
        "The 'Data Wars' hackathon connected me directly with hiring managers from Amazon. Their resume-building workshop helped me highlight the right projects, and mock interviews eliminated my stage fear. Went from ₹6LPA to ₹15LPA in one career move!",
      name: "Arjun P.",
      role: "ML Engineer, TCS",
      rating: 5,
      date: "10th Dec 2023",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 5,
      quote:
        "The 1:1 mentorship helped me crack Google interviews - something I'd failed at twice before.",
      fullText:
        "My mentor (an ex-Google engineer) drilled me on system design and LeetCode patterns specific to data roles. The AR-based whiteboard practice sessions simulated real interviews perfectly. Got my offer letter 3 weeks after the final project showcase!",
      name: "Ananya R.",
      role: "Data Engineer, Google",
      rating: 5,
      date: "5th Nov 2023",
      img: "https://randomuser.me/api/portraits/women/54.jpg",
    },
    {
      id: 6,
      quote:
        "As a working mom, the flexible schedule and AR labs let me upskill without quitting my job.",
      fullText:
        "Recorded lectures with 2x speed option and weekend mentor sessions made learning manageable. The AR mobile app let me practice SQL during my commute. Transitioned from HR analytics to proper Data Science role at my company with 40% raise!",
      name: "Deepika M.",
      role: "Senior Data Analyst, Deloitte",
      rating: 4,
      date: "20th Oct 2023",
      img: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: 7,
      quote:
        "The healthcare domain projects got me hired at a healthtech startup immediately.",
      fullText:
        "My capstone on diabetic retinopathy detection (using their AR medical imaging datasets) became my portfolio centerpiece. The career team introduced me to 5 healthtech founders - accepted a ₹18LPA offer before graduation!",
      name: "Karan T.",
      role: "Healthcare Data Scientist, Innovaccer",
      rating: 5,
      date: "8th Sep 2023",
      img: "https://randomuser.me/api/portraits/men/71.jpg",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) =>
        (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2)
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  return (
    <div className="py-16 px-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold pb-4">
          <span className="text-[#2091d0]">Student</span> Success Stories
        </h1>
        <p className="text-gray-500">
          Hear from our graduates about their journey and achievements
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden py-2">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-1/3 flex-shrink-0 px-4">
                <div className="h-full rounded-xl shadow-md p-6 bg-white text-gray-800 space-y-4">
                  <p className="text-lg font-semibold leading-snug">
                    {t.quote}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {t.fullText}
                    <span className="text-blue-500 font-medium cursor-pointer">
                      {" "}
                      Read More
                    </span>
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} filled={index < t.rating} />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(testimonials.length - 2)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#2091d0] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
        <div className="relative w-full">
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-[#2091d0] shadow-lg flex items-center justify-center hover:bg-[#2091d0] transition-all duration-200 cursor-pointer hover:scale-110 "
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-[#2091d0] shadow-lg flex items-center justify-center hover:bg-[#2091d0] transition-all duration-200 cursor-pointer hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
