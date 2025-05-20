import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to your business needs.",
  },
  {
    id: 2,
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity. A typical website project can take 4-8 weeks, while more complex applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally. Our team is always available to help with updates, improvements, and technical issues.",
  },
  {
    id: 4,
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on your specific requirements. We provide detailed quotes after understanding your project scope. We believe in transparent pricing with no hidden costs.",
  },
  {
    id: 5,
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We specialize in website redesigns that improve both aesthetics and functionality. Our team will analyze your current site, identify opportunities for improvement, and create a modern, high-performing update.",
  },
  {
    id: 6,
    question: "Do you build e-commerce solutions?",
    answer:
      "Yes, we create custom e-commerce platforms as well as implement solutions using established platforms like Shopify, WooCommerce, and Magento. We ensure your online store is secure, scalable, and optimized for conversions.",
  },
  {
    id: 7,
    question: "How do you handle project management and communication?",
    answer:
      "We use an agile approach with regular check-ins and updates. Each client is assigned a dedicated project manager, and we utilize collaborative tools that provide real-time visibility into project progress, milestones, and deliverables.",
  },
  {
    id: 8,
    question: "What technologies do you specialize in?",
    answer:
      "Our team is proficient in a wide range of technologies including React, Angular, Vue.js, Node.js, Python, PHP, AWS, and more. We select the most appropriate technology stack based on your specific project requirements and goals.",
  },
  {
    id: 9,
    question: "Do you offer SEO services?",
    answer:
      "Yes, we provide comprehensive SEO services including technical SEO, on-page optimization, content strategy, and link building. All our web projects are built with SEO best practices in mind from the ground up.",
  },
  {
    id: 10,
    question: "Are your solutions mobile-friendly?",
    answer:
      "Absolutely! All our digital solutions are built with a mobile-first approach to ensure optimal performance across all devices. We conduct extensive testing on various screen sizes and devices to guarantee a seamless experience.",
  },
  {
    id: 11,
    question: "What makes your company different from other agencies?",
    answer:
      "We combine technical expertise with strategic thinking to deliver solutions that not only look great but also achieve measurable business results. Our collaborative approach, transparent communication, and commitment to long-term partnerships set us apart.",
  },
  {
    id: 12,
    question: "Do you work with clients internationally?",
    answer:
      "Yes, we work with clients globally. Our team is experienced in managing remote collaborations across different time zones. We use digital collaboration tools and establish communication protocols that ensure smooth project execution regardless of location.",
  },
  {
    id: 13,
    question: "What is your design process like?",
    answer:
      "Our design process begins with understanding your brand and objectives, followed by research, wireframing, prototyping, and iterative design. We emphasize user-centered design principles and involve clients in review cycles to ensure the final product aligns with your vision.",
  },
  {
    id: 14,
    question: "Can you help with content creation?",
    answer:
      "Yes, we offer content strategy and creation services including copywriting, photography direction, video production, and graphic design. Our content team works closely with designers and developers to ensure cohesive messaging across your digital presence.",
  },
];

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [finalX, setFinalX] = useState<number>(0);

  useEffect(() => {
    setFinalX(expandedIndex * 224);
  }, [expandedIndex]);

  return (
    <div className="py-8 lg:py-12 px-8 lg:px-32 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-4 w-full">
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-black">Frequently</h2>
          <h2 className="text-4xl font-bold text-black">
            Asked <span className="text-[#2091d0]">Questions</span>
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
          <p className="text-sm tracking-wide">
            Find answers to common questions lorem ipsum dolor sit amet. about
            our courses and how we can help you to achive your goals.
          </p>
          <div className="flex items-center gap-4">
            <button
              className={`rounded-full p-2 ${
                expandedIndex === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0b3558] cursor-pointer"
              }`}
              disabled={expandedIndex === 0}
            >
              <ChevronLeftIcon
                className={`w-4 h-4 text-white`}
                onClick={() => {
                  if (expandedIndex !== 0) {
                    setExpandedIndex(expandedIndex - 1);
                  }
                }}
              />
            </button>
            <button
              className={`rounded-full p-2 ${
                expandedIndex === faqs.length - 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0b3558] cursor-pointer"
              }`}
              disabled={expandedIndex === faqs.length -1}
            >
              <ChevronRightIcon
                className="w-4 h-4 text-white"
                onClick={() => {
                  if (expandedIndex !== faqs.length -1) {
                    setExpandedIndex(expandedIndex + 1);
                  }
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex gap-4 py-8 transition-all duration-800`}
        style={{
          transform:
            expandedIndex !== faqs.length
              ? `translateX(-${expandedIndex * 224}px)`
              : ``,
        }}
      >
        {faqs.map((faq, index) => (
          <div
            className={`px-5 py-5 h-80 rounded-4xl flex flex-col justify-end items-center gap-5 cursor-pointer transition-all duration-300 overflow-hidden
                ${
                  expandedIndex === index
                    ? "bg-[#0b3558] min-w-80 text-white"
                    : "bg-gray-100 min-w-52"
                }
                `}
            key={index}
            onClick={() => {
              setExpandedIndex(index);
            }}
          >
            <h1 className="text-xl font-medium">{faq.question}</h1>
            <p
              className={`text-sm font-extralight tracking-wide ${
                expandedIndex === index
                  ? "block text-white"
                  : "hidden text-gray-700"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
