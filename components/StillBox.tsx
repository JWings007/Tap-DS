import React from "react";

function StillBox() {
  return (
    <div className="py-16">
      <div className="bg-[#2092d06a] py-16 flex flex-col justify-between items-center gap-10 relative overflow-hidden">
        <img src="/svg/blob6.svg" alt="" className="absolute top-0 -left-16 w-56 h-56 rotate-45 scale-125" />
        <img src="/svg/blob8.svg" alt="" className="absolute top-0 -right-10 rotate-12 w-56 h-56 scale-200" />
        <img src="/svg/blob9.svg" alt="" className="absolute top-full right-1/2 rotate-12 w-56 h-56 scale-200" />
        <div className="text-center text-black">
          <h2 className="text-4xl font-bold">
            Still have doubts? or need more information?
          </h2>
          <p className="text-black">
            Ask us anything and we'll get back to you as soon as possible.
          </p>
        </div>
        <button className="bg-black text-white px-7 py-3 rounded-4xl cursor-pointer hover-animation">
          Request a call back
        </button>
      </div>
    </div>
  );
}

export default StillBox;
