"use client";
import Navbar from "@/components/Navbar";
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
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
// Custom hook for count-up animation
export default function Home() {
  return (
    <div className="relative">
      <CTA />
      <Navbar />
      <div className="w-full lg:h-screen bg-cover bg-center flex items-center justify-center px-8 lg:px-32 relative overflow-hidden pt-28 lg:pt-0">
        <img
          src="/svg/main-blob-1.svg"
          alt=""
          className="absolute top-0 right-0 w-1/2 object-cover -z-1 blob-animate"
        />
        <img
          src="/svg/main-blob-2.svg"
          alt=""
          className="absolute top-[20%] left-1/2 object-cover -z-1 blob-animate-2"
        />
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-14">
          <div className="w-full h-full flex flex-col items-start justify-center gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl lg:text-4xl font-medium tracking-normal leading-10 z-[5]">
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
          Trusted by{" "}
          <span className="text-[#2091d0]">Learners & Industry Leaders</span>
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
      <Features />

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
