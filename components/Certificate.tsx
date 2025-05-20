import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import React from "react";

function Certificate() {
  return (
    <div className="py-8 lg:py-16 px-8 lg:px-32">
      <h1 className="text-3xl lg:text-4xl font-medium pb-4 text-center">
        Tap Academy's{" "}
        <span className="text-[#2091d0]">Data Science Cerificate</span>
      </h1>
      <p className="text-gray-500 tracking-wide text-sm lg:text-base pb-14 w-full lg:w-1/2 text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor mollitia
        illum possimus consectetur deleniti totam aperiam saepe itaque
        voluptatibus quisquam.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 content-center justify-items-center">
        <div className="flex items-center justify-center w-fit border-2 border-gray-200 rounded-xl overflow-hidden relative">
          <img src="/images/certificate.png" alt="" className="" />
          <a
            href="/images/certificate.png"
            download
            className="bg-blue-300/50 backdrop-blur-sm text-black w-20 h-20 rounded-full mt-8 absolute bottom-4 right-4 flex items-center justify-center text-xs hover:bg-blue-300/70 transition-all duration-300 hover:scale-125"
          >
            Download
          </a>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex flex-col gap-8">
            <li className="flex items-center gap-2">
              <CheckBadgeIcon className="w-16 h-16 text-green-400" />
              <div>
                <p className="font-semibold">Official and Verified Certificate</p>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptas, optio.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <CheckBadgeIcon className="w-16 h-16 text-green-400" />
              <div>
                <p className="font-semibold">Easily Shareable</p>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptas, optio.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <CheckBadgeIcon className="w-16 h-16 text-green-400" />
              <div>
                <p className="font-semibold">Enhances Credibility</p>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptas, optio.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
