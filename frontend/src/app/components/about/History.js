"use client";
import React from "react";

function History() {


  return (
    <div className="relative w-full py-16 px-4 lg:px-16">
      {/* Header */}
      <div className="text-center mb-12">
      <h3 className="merriHead text-[#302f2f] text-xl xl:text-2xl my-6">
         History
        </h3>
        <h3 className="bungeeHead text-3xl lg:text-5xl text-[#cc5f4d] font-bold">
          A History Retrospective
        </h3>
      </div>

      {/* Timeline */}
      <div className="mt-16">
      <div className="flex items-center justify-start flex-col lg:flex-row gap-6 lg:gap-52 lg:mx-32">
            <div className="border border-black p-6 w-[300px]">
              <h3 className="bungeeHead text-4xl font-bold text-black">2009</h3>
              <h4 className="bungeeHead text-xl text-[#cc5f4d] font-bold mt-4">
              Start our content
            </h4>
            <p className="merryWeather text-gray-500 mt-2 text-lg">Paaji got organized and started the journey</p>
            </div>
            <div className="border border-black p-6 w-[300px]">
              <h3 className="bungeeHead text-4xl font-bold text-black">2009</h3>
              <h4 className="bungeeHead text-xl text-[#cc5f4d] font-bold mt-4">
              Start our content
            </h4>
            <p className="merryWeather text-gray-500 mt-2 text-lg">Paaji got organized and started the journey</p>
            </div>
          </div>
          <div className="flex items-center justify-end flex-col lg:flex-row gap-6  lg:gap-56 lg:mx-40 mt-6 lg:mt-16">
            <div className="border border-black p-6 w-[300px]">
              <h3 className="bungeeHead text-4xl font-bold text-black">2009</h3>
              <h4 className="bungeeHead text-xl text-[#cc5f4d] font-bold mt-4">
              Start our content
            </h4>
            <p className="merryWeather text-gray-500 mt-2 text-lg">Paaji got organized and started the journey</p>
            </div>
            <div className="border border-black p-6 w-[300px]">
              <h3 className="bungeeHead text-4xl font-bold text-black">2009</h3>
              <h4 className="bungeeHead text-xl text-[#cc5f4d] font-bold mt-4">
              Start our content
            </h4>
            <p className="merryWeather text-gray-500 mt-2 text-lg">Paaji got organized and started the journey</p>
            </div>
          </div>
      </div>
 

      {/* Decorative Elements */}
      <div className="hidden md:block">
        <div className="absolute transform bottom-0   ">
          <img src="/Images/addOn/history.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default History;
