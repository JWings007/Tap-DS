import React, { useState } from "react";
import "../app/main.css";
import {
  CodeBracketIcon,
  ServerIcon,
  ChartBarIcon,
  ChartPieIcon,
  SparklesIcon,
  CloudIcon,
  ChatBubbleLeftRightIcon,
  ArrowTrendingUpIcon,
  CommandLineIcon,
  BeakerIcon,
  PresentationChartBarIcon,
  CpuChipIcon,
  ClockIcon,
  Squares2X2Icon,
  TableCellsIcon,
  CpuChipIcon as CpuIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "AI & Machine Learning",
    description:
      "Master cutting-edge AI technologies including Generative AI, Large Language Models, and Neural Networks.",
    icon: SparklesIcon,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    skills: [
      "Generative AI",
      "Large Language Models",
      "Supervised & Unsupervised Learning",
      "Deep Learning",
      "Ensemble Learning",
    ],
  },
  {
    title: "Data Science Fundamentals",
    description:
      "Build a strong foundation in statistics, data analysis, and scientific methods.",
    icon: ChartPieIcon,
    color: "text-[#2091d0]",
    bgColor: "bg-blue-100",
    skills: [
      "Exploratory Data Analysis (EDA)",
      "Descriptive Statistics",
      "Inferential Statistics",
      "Data Cleaning",
      "Model Building",
    ],
  },
  {
    title: "Programming & Databases",
    description:
      "Learn Python programming and database management for effective data handling.",
    icon: CodeBracketIcon,
    color: "text-green-500",
    bgColor: "bg-green-100",
    skills: [
      "Python Programming",
      "Database Management (SQL)",
      "Data Pre-processing",
      "Model Deployment",
      "API Development",
    ],
  },
  {
    title: "Natural Language Processing",
    description: "Process and analyze text data using advanced NLP techniques.",
    icon: ChatBubbleLeftRightIcon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    skills: [
      "Natural Language Processing",
      "Text Analytics",
      "Sentiment Analysis",
      "ChatGPT Integration",
      "Prompt Engineering",
    ],
  },
  {
    title: "Advanced Analytics",
    description:
      "Apply sophisticated analytical methods for complex problem-solving.",
    icon: ArrowTrendingUpIcon,
    color: "text-red-500",
    bgColor: "bg-red-100",
    skills: [
      "Time-Series Forecasting",
      "Predictive Analytics",
      "Model Fine-Tuning",
      "Explainable AI",
      "Feature Engineering",
    ],
  },
  {
    title: "Visualization & BI",
    description:
      "Create compelling data visualizations and business intelligence dashboards.",
    icon: PresentationChartBarIcon,
    color: "text-indigo-500",
    bgColor: "bg-indigo-100",
    skills: [
      "Data Visualization",
      "Tableau",
      "Power BI",
      "Interactive Dashboards",
      "Data Storytelling",
    ],
  },
  {
    title: "Cloud & Deployment",
    description: "Deploy models to production using modern cloud platforms.",
    icon: CloudIcon,
    color: "text-cyan-500",
    bgColor: "bg-cyan-100",
    skills: [
      "AWS/GCP Fundamentals",
      "Flask/Streamlit",
      "Cloud Deployment",
      "MLOps Basics",
      "Model Monitoring",
    ],
  },
  {
    title: "Emerging Technologies",
    description: "Stay ahead with the latest trends in AI and data science.",
    icon: CpuChipIcon,
    color: "text-rose-500",
    bgColor: "bg-rose-100",
    skills: [
      "Computer Vision",
      "Reinforcement Learning",
      "AutoML",
      "Edge Computing",
      "AI Ethics",
    ],
  },
];

export const Skills: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll ? features : features.slice(0, 6);

  return (
    <section id="features" className="py-20 bg-white px-32">
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-4xl font-medium mb-4">
            What You'll <span className="text-[#2091d0]">Learn</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-slate-600">
            Master these in-demand skills and transform your career with our
            comprehensive curriculum
          </p>
        </div>
        <div className="flex gap-16 w-full justify-center">
          <div className="p-4 border border-slate-200 rounded-xl">
            <h3 className="text-slate-800 text-lg">
              <span className="text-[#2091d0] text-3xl font-bold">6+</span> Projects
            </h3>
          </div>
          <div className="p-4 border border-slate-200 rounded-xl">
            <h3 className="text-slate-800 text-lg">
              <span className="text-[#2091d0] text-3xl font-bold">10+</span> Gen AI Tools
            </h3>
          </div>
          <div className="p-4 border border-slate-200 rounded-xl">
            <h3 className="text-slate-800 text-lg">
              <span className="text-[#2091d0] text-3xl font-bold">1:1</span> Mentorship
            </h3>
          </div>
          <div className="p-4 border border-slate-200 rounded-xl">
            <h3 className="text-slate-800 text-lg">
              <span className="text-[#2091d0] text-3xl font-bold">900+</span> Hiring Partners
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-white cursor-pointer rounded-xl px-5 py-4 border border-slate-200 hover:shadow-md transition-all duration-300 transform relative shadow-main ${
                showAll ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="absolute inset-0 bg-white rounded-xl z-0"></div>
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gray-500 mr-2`}
                      ></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-2 border border-transparent text-sm rounded-full cursor-pointer text-white bg-[#2091d0] hover:bg-[#208dd0] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
          >
            {showAll ? 'Show Less' : 'View More'}
            <svg
              className={`ml-2 h-5 w-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
