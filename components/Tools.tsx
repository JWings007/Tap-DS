import React, { useEffect, useRef } from "react";
import Image from "next/image";

function Tools() {
  const tools = [
    {
      name: "Python",
      image: "/svg/python-svgrepo-com.svg",
    },
    {
      name: "Pandas",
      image: "/svg/icons8-pandas.svg",
    },
    {
      name: "Numpy",
      image: "/svg/icons8-numpy.svg",
    },
    {
      name: "Scikit-learn",
      image: "/svg/scikit-learn.svg",
    },
    {
      name: "Tableau",
      image: "/svg/tableau-software.svg",
    },
    {
      name: "MySQL",
      image: "/svg/icons8-mysql-logo.svg",
    },
    {
      name: "Power BI",
      image: "/svg/powerbi.svg",
    },
    {
      name: "PyTorch",
      image: "/svg/icons8-pytorch.svg",
    },
    {
      name: "Seaborn",
      image: "/svg/seaborn-1.svg",
    },
    {
      name: "Chat GPT",
      image: "/svg/icons8-chat-gpt.svg",
    },
    {
      name: "Bard",
      image: "/svg/icons8-bard.svg",
    },
    {
      name: "Mid Journey",
      image: "/svg/icons8-midjourney.svg",
    },
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const cards = document.querySelectorAll('.tool-card');
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
    <div className="py-8 lg:py-16 px-8 lg:px-32">
      <div className="text-center">
        <h1 className="text-3xl lg:text-4xl font-medium pb-2">
          <span className="text-[#2091d0]">Tools</span> you'll learn
        </h1>
        <p className="text-gray-500 text-sm lg:text-base">
          Master these essential tools and technologies to become a proficient data scientist
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map((tool, index) => (
          <div 
            key={tool.name} 
            className={`tool-card flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 group cursor-pointer opacity-0 translate-y-8`}
            style={{
              animationDelay: `${index * 100}ms`,
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div className="w-16 h-16 relative mb-4">
              <img src={tool.image} alt={tool.name} className="w-full h-full object-contain group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tool-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tool-card.animate-slide-in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .tool-card {
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  );
}

export default Tools;
