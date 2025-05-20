import React from "react";

function StillBox() {
  return (
    <div className="py-16">
      <div className="bg-[#2092d06a] py-16 flex flex-col justify-between items-center gap-10 relative overflow-hidden">
        <img src="/svg/blob6.svg" alt="" className="absolute top-0 -left-16 w-42 h-42 rotate-45 lg:w-56 lg:h-56 lg:rotate-45 lg:scale-125" />
        <img src="/svg/blob8.svg" alt="" className="absolute top-0 -right-10 rotate-12 w-42 scale-150 h-42 lg:w-56 lg:h-56 lg:rotate-12 lg:scale-200" />
        <img src="/svg/blob9.svg" alt="" className="absolute top-full right-1/2 rotate-12 w-56 h-56 scale-200" />
        <div className="text-center text-black z-10">
          <h2 className="text-2xl lg:text-4xl font-bold">
            Still have doubts? or need more information?
          </h2>
          <p className="text-black text-sm lg:text-base">
            Ask us anything and we'll get back to you as soon as possible.
          </p>
        </div>
        <button className="bg-black text-white px-4 lg:px-7 py-2 lg:py-3 rounded-4xl cursor-pointer hover-animation text-base">
          Request a call back
        </button>
      </div>
    </div>
  );
}

export default StillBox;
