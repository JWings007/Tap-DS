"use client";
import Navbar from "@/components/Navbar";
import { useState, useEffect, useRef } from "react";
import LearningJourneyRoadmap from "@/components/LearningJourney";
import { Skills } from "@/components/Skills";
import Extra from "@/components/Extra";
import Certificate from "@/components/Certificate";
import Tools from "@/components/Tools";
import Testimonials from "@/components/Testimonials";
import CareerCounsellingForm from "@/components/Form";
import Preview from "@/components/Preview";
import CTA from "@/components/CTA";
import StillBox from "@/components/StillBox";
import Why from "@/components/Why";
import FAQ from "@/components/FAQ";
import { CheckIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import Footer from "@/components/Footer";
// Custom hook for count-up animation
export default function Home() {
  const features = [
    {
      id: 1,
      title: "Certified Program",
      icon: "/svg/certificate-svgrepo-com.svg",
      description:
        "Data Scientist Program completion certificate recognized by industry leaders. Join 10,000+ alumni at top tech companies with our industry-recognized certification.",
    },
    {
      id: 2,
      title: "AR-Driven Learning",
      icon: "/svg/ar-zone-svgrepo-com.svg",
      description:
        "Core curriculum delivered in live Augmented Reality online classes. Experience immersive learning with our cutting-edge AR technology that makes complex concepts easier to grasp.",
    },
    {
      id: 3,
      title: "Live AI Sessions",
      icon: "/svg/robot-svgrepo-com.svg",
      description:
        "Interactive sessions on ChatGPT, Generative AI, prompt engineering, and more. Stay ahead of the curve with expert-led discussions on the latest AI trends and technologies.",
    },
    {
      id: 4,
      title: "Hands-on Projects",
      icon: "/svg/computer-svgrepo-com (1).svg",
      description:
        "Build your portfolio with 3 Capstones and 25+ hands-on industry projects. Apply your skills to real-world problems across various domains and build an impressive portfolio.",
    },
    {
      id: 5,
      title: "Essential Tools",
      icon: "/svg/tools-svgrepo-com.svg",
      description:
        "Master Python, Tableau, SQL, ChatGPT, OpenAI, DALL·E, and more. Gain practical experience with the most in-demand tools and technologies in the data science field.",
    },
    {
      id: 6,
      title: "Industry Masterclasses",
      icon: "/svg/building2-svgrepo-com.svg",
      description:
        "Learn directly from experts at leading product-based companies. Get insider knowledge and networking opportunities with professionals from top tech organizations.",
    },
    {
      id: 7,
      title: "Exclusive Events",
      icon: "/svg/event-svgrepo-com.svg",
      description:
        "Participate in hackathons and 'ask-me-anything' sessions. Test your skills, collaborate with peers, and get your questions answered by industry professionals.",
    },
    {
      id: 8,
      title: "Career Services",
      icon: "/svg/services-svgrepo-com.svg",
      description:
        "Get noticed by top hiring companies with dedicated placement assistance. Enjoy 100% placement assistance to help you land your dream job in data science.",
    },
    {
      id: 9,
      title: "AI-Enabled Learning",
      icon: "/svg/elearning-learning-online-book-computer-svgrepo-com.svg",
      description:
        "Personalized learning path with AI-powered recommendations. Experience seamless learning with adaptive content tailored to your progress and learning style.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(features.length / cardsPerPage);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [totalPages, isHovered]);

  return (
    <div className="relative">
      <CTA />
      <Navbar />
      <div className="w-full lg:h-screen bg-cover bg-center flex items-center justify-center px-8 lg:px-32 relative overflow-hidden pt-20 lg:pt-0">
        <img src="/svg/main-blob-1.svg" alt="" className="absolute top-0 right-0 w-1/2 object-cover -z-1 blob-animate" />
        <img src="/svg/main-blob-2.svg" alt="" className="absolute top-[20%] left-1/2 object-cover -z-1 blob-animate-2" />
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-14">
          <div className="w-full h-full flex flex-col items-start justify-center gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl lg:text-4xl font-medium tracking-normal leading-10">
                <span className="text-[#2091d0]">Become a Data Science</span>{" "}
                Pro in 6 Months – Master AI, Analytics & AR-Driven Learning!
              </h1>
              <p className="text-sm tracking-wide">
                Enroll in our online data science courses to master Python,
                explore machine learning, and make data-driven decisions through
                data visualization, statistical analysis, and predictive
                modelling.
              </p>

              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <div className="flex items-center gap-6">
                    <CheckBadgeIcon className="w-8 h-8 text-green-400" />
                    <p className="text-gray-500 text-sm">
                      Generative AI & Hands-On Projects: Master Generative AI
                      and apply your knowledge through practical projects.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex items-center gap-6">
                    <CheckBadgeIcon className="w-8 h-8 text-green-400" />
                    <p className="text-gray-500 text-sm">
                      Generative AI & Hands-On Projects: Master Generative AI
                      and apply your knowledge through practical projects.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex items-center gap-6">
                    <CheckBadgeIcon className="w-8 h-8 text-green-400" />
                    <p className="text-gray-500 text-sm">
                      Generative AI & Hands-On Projects: Master Generative AI
                      and apply your knowledge through practical projects.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex lg:items-start gap-4 w-full lg:flex-row flex-col justify-center lg:justify-start items-center">
              <a
                className="bg-[#2091d0] text-white text-sm px-10 py-3 rounded-full hover-animation-blue"
                href="/downloads/brochure.pdf"
                download
              >
                Download Brochure
              </a>
              <button className="bg-white text-black text-sm px-10 py-3 rounded-full border border-[#2091d0] hover-animation-white">
                Get Free Career Guidance
              </button>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <CareerCounsellingForm />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-16">
        <h1 className="text-3xl lg:text-4xl font-medium text-center pb-4">
          Trusted by <span className="text-[#2091d0]">Learners & Industry Leaders</span>
        </h1>
        <p className="text-center text-gray-500 text-sm lg:text-base px-8 lg:px-0">
          Excel in data-driven careers with our certifications for Data Science,
          boasting a high rate of successful student placements. Get hired by
          top companies.
        </p>
        <div className="w-full overflow-hidden py-16 relative">
          <div className="flex animate-scroll gap-10 opacity-70 whitespace-nowrap">
            {/* First set of logos */}
            <div className="flex items-center gap-5 lg:gap-10 shrink-0">
              <img src="/images/tm.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/Capgemini.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/cognizent.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/Glider.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/razorpay.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/LTM.png" alt="" className="h-6 lg:h-10" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-5 lg:gap-10 shrink-0">
              <img src="/images/tm.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/Capgemini.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/cognizent.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/Glider.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/razorpay.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/LTM.png" alt="" className="h-6 lg:h-10" />
            </div>
            {/* Third set to ensure no gap */}
            <div className="flex items-center gap-5 lg:gap-10 shrink-0">
              <img src="/images/tm.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/Capgemini.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/cognizent.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/Glider.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/razorpay.png" alt="" className="h-6 lg:h-10" />
              <img src="/images/LTM.png" alt="" className="h-6 lg:h-10" />
            </div>
          </div>
        </div>
      </div>
      <Why />
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333%));
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full px-8 lg:px-32 py-8 lg:py-16 flex flex-col gap-10">
        <div>
          <h1 className="text-3xl lg:text-4xl font-medium pb-4">
            What Makes Our{" "}
            <span className="text-[#2091d0]">Data Science Program</span> Stand
            Out?
          </h1>
          <p className="text-gray-500 text-sm lg:text-base">
            Gain an unbeatable edge with industry-aligned AR training, 1:1
            mentorship from FAANG experts, and a 100% placement guarantee. Our
            graduates land roles at 2X the industry average speed with hands-on
            GenAI projects.
          </p>
        </div>
        <div className="relative">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex gap-[1rem] transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 320}px)` }}
            >
              {features.map((feature) => {
                return (
                  <div
                    className="min-w-[20rem] overflow-hidden flex flex-col items-center gap-8 p-6 h-[20rem] rounded-4xl border-2 border-gray-200 hover:border-[#2091d0] transition-all duration-300 cursor-pointer relative after:content-[''] after:absolute after:top-1/2 after:-right-10 after:w-44 after:h-44 after:bg-gray-300 after:rounded-full after:opacity-20 hover:after:scale-200 hover:after:bg-[#2091d0] after:transition-all after:duration-300"
                    key={feature.id}
                  >
                    <div className="flex-col items-center">
                      <img
                        src={feature.icon}
                        alt=""
                        className="w-10 h-10 mb-4"
                      />
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">{feature.title}</h3>
                        <p className="text-gray-500 tracking-wide text-[0.9rem]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="h-[0.1rem] w-3/4 bg-gray-300"></div>
                    <div></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "bg-[#2091d0] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <LearningJourneyRoadmap />
      <Skills />
      <Extra />
      <Certificate />
      <Tools />
      <Preview />
      <Testimonials />
      <StillBox />
      <FAQ />
      <Footer />
    </div>
  );
}
