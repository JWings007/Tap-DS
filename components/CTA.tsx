import React, { useState } from "react";
import {
  PhoneArrowUpRightIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const CTA = () => {
  const [expandedButton, setExpandedButton] = useState<string | null>(null);

  return (
    <div className="fixed bottom-5 lg:bottom-10 right-5 lg:right-10 z-[100] flex flex-col items-end gap-4">
      <button
        className={`group relative px-3 lg:px-5 py-2 lg:py-3 bg-[#2091d0] rounded-full text-white flex items-center gap-2 overflow-hidden transition-all duration-300 ease-in-out cursor-pointer ${
          expandedButton === "callback" ? "w-[200px]" : "w-[40px] lg:w-[60px]"
        }`}
        onMouseEnter={() => setExpandedButton("callback")}
        onMouseLeave={() => setExpandedButton(null)}
      >
        <span className="min-w-[20px]">
          <PhoneArrowUpRightIcon className="w-4 h-4 lg:w-5 lg:h-5" />
        </span>
        <span
          className={`whitespace-nowrap transition-all text-sm lg:text-base duration-300 ${
            expandedButton === "callback"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          }`}
        >
          Request a callback
        </span>
      </button>

      <button
        className={`group relative px-3 lg:px-5 py-2 lg:py-3 bg-[#59ce72] rounded-full text-white flex items-center gap-2 overflow-hidden transition-all duration-300 ease-in-out cursor-pointer ${
          expandedButton === "chat" ? "w-[160px]" : "w-[40px] lg:w-[60px]"
        }`}
        onMouseEnter={() => setExpandedButton("chat")}
        onMouseLeave={() => setExpandedButton(null)}
      >
        <span className="min-w-[20px]">
          <ChatBubbleBottomCenterTextIcon className="w-4 h-4 lg:w-5 lg:h-5" />
        </span>
        <span
          className={`whitespace-nowrap transition-all text-sm lg:text-base duration-300 ${
            expandedButton === "chat"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          }`}
        >
          Chat with us
        </span>
      </button>
    </div>
  );
};

export default CTA;
