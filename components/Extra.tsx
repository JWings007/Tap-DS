import {
  ChartBarIcon,
  TrophyIcon,
  UserGroupIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import React from "react";

function Extra() {
  return (
    <div className="py-16 px-32 grid grid-cols-2">
      <div className="flex flex-col gap-8">
        <div className="mb-4">
          <h1 className="text-4xl font-semibold pb-4">
            Career Services That{" "}
            <span className="text-[#2091d0]">Get You Hired</span>
          </h1>
          <p className="text-gray-500">
            From interview prep to resume reviews, we equip you with everything
            you need to land your ideal role. Get the skills, strategy, and
            support to confidently pursue and land the job you've been dreaming
            of.
          </p>
        </div>
        <div className="flex-col flex gap-8">
          <div className="flex gap-6 items-center">
            <img
              src="/svg/briefcase-svgrepo-com.svg"
              alt="interview"
              className="w-10 h-10"
            />
            <p>Communication and aptitude training</p>
          </div>
          <div className="flex gap-6 items-center">
            <img
              src="/svg/chart-pie-svgrepo-com.svg"
              alt="interview"
              className="w-10 h-10"
            />
            <p>Mock interviews</p>
          </div>
          <div className="flex gap-6 items-center">
            <img
              src="/svg/globe-2-svgrepo-com.svg"
              alt="interview"
              className="w-10 h-10"
            />
            <p>100+ jobs available on our placement portal</p>
          </div>
          <div className="flex gap-6 items-center">
            <img
              src="/svg/thumb-up-svgrepo-com.svg"
              alt="interview"
              className="w-10 h-10"
            />
            <p>Workshops on workplace behavior</p>
          </div>
        </div>
        <button className="bg-[#2091d0] text-white px-8 py-3 rounded-full w-fit flex gap-2 items-center">
          <PhoneIcon className="w-6 h-6" />
          <p>Call Us</p>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-8 relative after:content-[''] after:absolute after:w-64 after:h-64 after:bg-[#2091d0] after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:z-[-1] after:scale-200 after:origin-center after:opacity-50">
        <div className="grid grid-rows-1 items-center justify-center z-10">
          <div className="flex flex-col gap-4 items-center justify-center border border-gray-200 bg-white p-8 rounded-4xl shadow-md">
            <img
              src="/svg/trophy-svgrepo-com.svg"
              alt=""
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-2xl font-bold text-center pb-4">
                Sell your skills, and sell them well.
              </h3>
              <p className="text-gray-500 text-center">
                You are halfway there if you have a great resume and an
                optimized online presence. Work with our experts to build your
                professional profiles.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-8 z-10">
            <div className="flex flex-col gap-4 items-center justify-center border border-gray-200 bg-white p-8 rounded-4xl h-full shadow-md">
            <img
              src="/svg/chart-graphic-svgrepo-com.svg"
              alt=""
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-2xl font-bold text-center pb-4">
                Learn workplace skills!
              </h3>
              <p className="text-gray-500 text-center">
                Your working style and behavior decide if you are a good
                cultural fit. Learn the right skills so you never feel out of
                place at work.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center border border-gray-200 bg-white p-8 rounded-4xl h-full shadow-md">
            <img
              src="/svg/chat-speech-bubble-svgrepo-com.svg"
              alt=""
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-2xl font-bold text-center pb-4">
                Attend mock interviews!
              </h3>
              <p className="text-gray-500 text-center">
                Get a grip on those pre-interview nerves. Test and practice your
                skills with mock interview sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extra;
