import React from "react";

function StillBox() {
  return (
    <div className="px-32 py-16 rounded-4xl shadow-md">
      <div className="bg-[#2092d06a] rounded-4xl py-16 flex flex-col justify-between items-center gap-10">
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
