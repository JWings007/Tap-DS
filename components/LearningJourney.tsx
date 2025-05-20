import React, { useEffect, useRef } from "react";
import {
  SparklesIcon,
  CodeBracketIcon,
  ServerIcon,
  PresentationChartBarIcon,
  ChartPieIcon,
  RocketLaunchIcon,
  CloudIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const LearningJourneyRoadmap = () => {
  const journeySteps = [
    {
      id: 1,
      title: "Foundation: Excel, SQL & Programming Basics",
      description: [
        "Understand Excel functions, conditional formatting",
        "Master SQL queries and database concepts",
        "Learn Python fundamentals and basic coding logic",
      ],
      icon: <CodeBracketIcon className="size-6" />,
      date: "Month 1-2",
      image: "/svg/python-svgrepo-com.svg",
    },
    {
      id: 2,
      title: "Python for Data Science",
      description: [
        "Python statistics, probability, and essential libraries (NumPy, Pandas)",
        "Exploratory data analysis & data cleaning techniques",
      ],
      icon: <ServerIcon className="size-6" />,
      date: "Month 3-4",
      image: "/svg/icons8-pandas.svg",
    },
    {
      id: 3,
      title: "Data Visualization",
      description: [
        "Tableau and Power BI training",
        "Build interactive dashboards and reports",
      ],
      icon: <PresentationChartBarIcon className="size-6" />,
      date: "Month 5-6",
      image: "/svg/icons8-numpy.svg",
    },
    {
      id: 4,
      title: "Machine Learning using Python",
      description: [
        "Supervised and unsupervised learning (Regression, Clustering, KNN, etc.)",
        "Feature engineering, model tuning, and evaluation",
      ],
      icon: <ChartPieIcon className="size-6" />,
      image: "/svg/scikit-learn.svg",
    },
    {
      id: 5,
      title: "Applied Data Science with Capstone Projects",
      description: [
        "Apply ML models to real-world datasets",
        "Solve domain-specific problems (Finance, Healthcare, E-commerce, etc.)",
      ],
      icon: <RocketLaunchIcon className="size-6" />,
      image: "/svg/tableau-software.svg",
    },
    {
      id: 6,
      title: "Model Deployment & Cloud Basics",
      description: [
        "Deploy ML models using platforms like Streamlit or Flask",
        "Introduction to AWS/GCP for model hosting",
      ],
      icon: <CloudIcon className="size-6" />,
      image: "/svg/icons8-mysql-logo.svg",
    },
    {
      id: 7,
      title: "Deep Learning & Generative AI",
      description: [
        "Basics of Neural Networks, LLMs, and tools like ChatGPT",
        "Introduction to prompt engineering and RAG",
      ],
      icon: <SparklesIcon className="size-6" />,
      image: "/svg/powerbi.svg",
    },
    {
      id: 8,
      title: "Hackathons & Competitions",
      description: [
        "Participate in Tap Academy-led AI/DS competitions",
        "Build portfolio projects for GitHub/LinkedIn",
      ],
      icon: <TrophyIcon className="size-6" />,
      date: "Month 9-10",
      image: "/svg/icons8-pytorch.svg",
    },
    {
      id: 9,
      title: "Career Enablement",
      description: [
        "Resume building & LinkedIn profile optimization",
        "Mock interviews, recruiter connects & placement support",
      ],
      icon: <UserGroupIcon className="size-6" />,
      date: "Month 11-12",
      image: "/svg/icons8-bard.svg",
    },
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const cards = document.querySelectorAll(".journey-card");
    cards.forEach((card) => {
      observerRef.current?.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="py-8 lg:py-16 relative overflow-hidden">
      <img
        src="/svg/main-blob-2.svg"
        alt=""
        className="absolute top-[10%] right-[10%] w-56 object-cover -z-1 blob-animate-2"
      />

      <img
        src="/svg/main-blob-3.svg"
        alt=""
        className="absolute top-[40%] left-[10%] w-56 object-cover -z-1 blob-animate-2"
      />
      <img
        src="/svg/blob6.svg"
        alt=""
        className="absolute bottom-[7%] scale-90 right-[10%] w-56 object-cover -z-1 blob-animate-2"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-medium pb-4">
            Learning <span className="text-[#2091d0]">Journey</span>
          </h1>
          <p className="text-sm lg:text-base text-gray-600 max-w-3xl mx-auto">
            Your roadmap to becoming a proficient data scientist - carefully
            structured to build your skills step by step
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#2091d0] to-blue-100"></div>

          {journeySteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center md:justify-between mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`w-full md:w-5/12 mb-6 md:mb-0 journey-card ${
                  index % 2 === 0 ? "slide-from-left" : "slide-from-right"
                }`}
              >
                <div className="bg-white cursor-pointer rounded-4xl shadow py-6 px-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border-2 border-gray-200 hover:border-[#94d3f6] hover:shadow-[#2092d059]">
                  <img
                    src={step.image}
                    alt=""
                    className="w-16 absolute -bottom-[15%] right-0"
                  />
                  <div className="flex items-center justify-between mb-3">
                    <div className="border border-[#2091d0] bg-blue-200 rounded-xl w-12 h-12 flex items-center justify-center font-bold mr-3">
                      {step.icon}
                    </div>
                    <span className="text-sm text-gray-500">{step.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {step.description.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-[#2091d0] to-[#75c5f0] shadow-lg flex items-center justify-center z-10">
                  <span className="text-white font-bold text-lg">
                    {step.id}
                  </span>
                </div>
              </div>

              {/* Empty space for opposite side */}
              <div className="w-full md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .journey-card {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 0.8s ease-out;
        }

        .journey-card.slide-from-right {
          transform: translateX(100px);
        }

        .journey-card.animate-slide-in {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .journey-card {
            transform: translateY(50px);
          }

          .journey-card.animate-slide-in {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LearningJourneyRoadmap;
