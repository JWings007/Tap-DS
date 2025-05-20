import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Lesson {
  title: string;
  duration: string;
  description: string;
  skills: string[];
}

interface Module {
  title: string;
  lessons: Lesson[];
  keySkills: string[];
}

const Preview = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const modules: Module[] = [
    {
      title: "Foundation: Excel, SQL & Programming Basics",
      keySkills: [
        "Data Wrangling",
        "Spreadsheet Analysis",
        "Database Querying",
        "Statistical Foundations",
      ],
      lessons: [
        {
          title: "Introduction to Data Science",
          duration: "45 mins",
          description:
            "Overview of data science, its applications, and career opportunities",
          skills: ["Industry Landscape", "DS Workflows"],
        },
        {
          title: "Excel Fundamentals",
          duration: "60 mins",
          description:
            "Master essential Excel functions, pivot tables, and data analysis tools",
          skills: ["VLOOKUP", "PivotTables", "Data Cleaning"],
        },
        {
          title: "SQL Basics",
          duration: "90 mins",
          description:
            "Learn SQL queries, database concepts, and data manipulation",
          skills: ["SELECT Queries", "JOINs", "Aggregations"],
        },
        {
          title: "Statistics for Data Science",
          duration: "120 mins",
          description:
            "Probability, distributions, and statistical analysis fundamentals",
          skills: [
            "Hypothesis Testing",
            "Probability Distributions",
            "A/B Testing",
          ],
        },
      ],
    },
    {
      title: "Python for Data Science",
      keySkills: [
        "Python Programming",
        "Data Analysis",
        "Data Visualization",
        "Numerical Computing",
      ],
      lessons: [
        {
          title: "Python Programming Fundamentals",
          duration: "120 mins",
          description:
            "Core Python concepts, data structures, and control flow",
          skills: [
            "Loops/Functions",
            "Lists/Dicts",
            "Object-Oriented Programming",
          ],
        },
        {
          title: "Data Analysis with Pandas",
          duration: "90 mins",
          description: "Data manipulation and analysis using Pandas library",
          skills: ["DataFrames", "GroupBy", "Time Series"],
        },
        {
          title: "Data Visualization with Matplotlib/Seaborn",
          duration: "75 mins",
          description:
            "Create insightful visualizations using Matplotlib and Seaborn",
          skills: ["Custom Plots", "EDA Techniques", "Dashboard Design"],
        },
        {
          title: "NumPy for Scientific Computing",
          duration: "60 mins",
          description: "Numerical operations and array processing",
          skills: ["ND Arrays", "Vectorization", "Linear Algebra"],
        },
      ],
    },
    {
      title: "Machine Learning Fundamentals",
      keySkills: [
        "ML Algorithms",
        "Model Training",
        "Feature Engineering",
        "Performance Metrics",
      ],
      lessons: [
        {
          title: "Introduction to Machine Learning",
          duration: "60 mins",
          description: "Core concepts and types of machine learning algorithms",
          skills: ["Supervised vs Unsupervised", "Bias-Variance Tradeoff"],
        },
        {
          title: "Supervised Learning",
          duration: "120 mins",
          description:
            "Regression and classification algorithms implementation",
          skills: ["Linear Regression", "Decision Trees", "Random Forest"],
        },
        {
          title: "Unsupervised Learning",
          duration: "90 mins",
          description: "Clustering and dimensionality reduction techniques",
          skills: ["K-Means", "PCA", "Anomaly Detection"],
        },
        {
          title: "Model Evaluation",
          duration: "90 mins",
          description:
            "Techniques for evaluating and improving model performance",
          skills: ["Confusion Matrix", "ROC-AUC", "Cross-Validation"],
        },
      ],
    },
    {
      title: "Advanced Topics & AI",
      keySkills: ["Neural Networks", "NLP", "Generative AI", "Ethical AI"],
      lessons: [
        {
          title: "Deep Learning & Neural Networks",
          duration: "120 mins",
          description: "Introduction to ANNs, CNNs and their applications",
          skills: ["Tensor Operations", "Backpropagation", "Computer Vision"],
        },
        {
          title: "Natural Language Processing (NLP)",
          duration: "90 mins",
          description: "Text processing and sentiment analysis techniques",
          skills: ["Tokenization", "Word Embeddings", "Transformer Models"],
        },
        {
          title: "Generative AI & LLMs",
          duration: "120 mins",
          description: "Working with GPT models and prompt engineering",
          skills: ["Fine-Tuning", "RAG", "AI Assistant Development"],
        },
        {
          title: "AI Ethics & Responsible AI",
          duration: "60 mins",
          description: "Ethical considerations in AI development",
          skills: [
            "Bias Mitigation",
            "Explainability",
            "Regulatory Compliance",
          ],
        },
      ],
    },
    {
      title: "Industry Tools & Deployment",
      keySkills: [
        "BI Tools",
        "Deep Learning Frameworks",
        "Model Deployment",
        "Big Data",
      ],
      lessons: [
        {
          title: "Power BI/Tableau",
          duration: "90 mins",
          description: "Business intelligence and dashboard creation",
          skills: ["Data Modeling", "Interactive Dashboards", "DAX"],
        },
        {
          title: "TensorFlow/PyTorch",
          duration: "120 mins",
          description: "Building and training neural networks",
          skills: ["Custom Layers", "Transfer Learning", "GPU Acceleration"],
        },
        {
          title: "Model Deployment",
          duration: "90 mins",
          description: "Deploying models using Flask/Django",
          skills: ["API Development", "Containerization", "Cloud Deployment"],
        },
        {
          title: "Big Data Basics (Spark/Hadoop)",
          duration: "60 mins",
          description: "Introduction to distributed computing",
          skills: ["MapReduce", "Spark SQL", "Data Partitioning"],
        },
      ],
    },
    {
      title: "Capstone Project & Career Prep",
      keySkills: [
        "End-to-End Projects",
        "AR Learning",
        "Interview Prep",
        "Portfolio Development",
      ],
      lessons: [
        {
          title: "End-to-End Project",
          duration: "240 mins",
          description:
            "Solve real business problems using all learned concepts",
          skills: [
            "Problem Scoping",
            "Pipeline Development",
            "Stakeholder Presentation",
          ],
        },
        {
          title: "AR Data Science Challenge",
          duration: "120 mins",
          description:
            "Immersive problem-solving using Tap Academy's AR platform",
          skills: ["3D Data Visualization", "Interactive Model Debugging"],
        },
        {
          title: "Resume & Interview Prep",
          duration: "90 mins",
          description:
            "Crafting winning resumes and mastering technical interviews",
          skills: [
            "ATS Optimization",
            "Case Study Frameworks",
            "Salary Negotiation",
          ],
        },
        {
          title: "Industry Project Showcase",
          duration: "60 mins",
          description: "Present your project to hiring partners",
          skills: ["Demo Creation", "Business Impact Communication"],
        },
      ],
    },
  ];

  return (
    <div className="py-16 px-32 overflow-hidden">
      <div className="mb-8">
        <h1 className="text-4xl font-medium pb-2">
          <span className="text-[#2091d0]">Course</span> Preview
        </h1>
        <p className="text-gray-500 text-base">
          Get a glimpse of what you'll learn in our comprehensive data science
          program
        </p>
      </div>

      <div className="flex w-full justify-center items-center mb-8">
        <div className="flex w-fit gap-10 px-8 py-5 border-2 border-gray-200 rounded-2xl">
          <p>
            <span className="text-2xl font-semibold text-[#2091d0]">5+</span>{" "}
            Modules
          </p>
          <p>
            <span className="text-2xl font-semibold text-[#2091d0]">100+</span>{" "}
            Lessons
          </p>
          <p>
            <span className="text-2xl font-semibold text-[#2091d0]">20+</span>{" "}
            Skills
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          {modules.map((module, moduleIndex) => (
            <div
              key={moduleIndex}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedModule(
                    expandedModule === moduleIndex ? null : moduleIndex
                  )
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#2091d0] text-white flex items-center justify-center font-semibold">
                      {moduleIndex + 1}
                    </span>
                    <span className="text-base font-medium text-gray-800">
                      {module.title}
                    </span>
                  </div>
                </div>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform ml-8 duration-300 ${
                    expandedModule === moduleIndex ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  expandedModule === moduleIndex
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex items-start gap-4 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">
                          {lessonIndex + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-sm text-gray-800">
                              {lesson.title}
                            </h4>
                            <span className="text-sm text-gray-500">
                              {lesson.duration}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {lesson.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 w-full justify-start items-center relative p-10 rounded-xl">
          <img
            src="/svg/blob6.svg"
            alt=""
            className="absolute top-[0px] right-0 w-56 h-56 scale-150 z-[1] blob-animate"
          />
          <img
            src="/svg/blob7.svg"
            alt=""
            className="absolute top-[10rem] left-0 w-56 h-56 scale-200 -z-[1] blob-animate-3"
          />
          <div className="z-[1]">
            <h1 className="text-4xl font-medium pb-4 z-[2]">
              From Raw Data to Powerful Insights
            </h1>
            <p className="z-[2] text-base">
              See how our curriculum builds your expertise in statistical
              analysis, machine learning, and data visualization with real-world
              projects
            </p>
          </div>
          <div className="flex w-full items-center">
            <a
              className="bg-[#2091d0] text-white px-6 py-2 text-sm rounded-full relative overflow-hidden hover-animation-blue"
              href="/downloads/syllabus.pdf"
              download
            >
              Download Detailed Curriculum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
