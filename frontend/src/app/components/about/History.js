"use client";
import React from "react";

function History() {
  const historyData = [
    {
      year: "2009",
      title: "START OUR CONTENT",
      description: "Paaji got organized and started the journey",
    },
    {
      year: "2014",
      title: "GROW AND IMPACT",
      description: "Paaji started catering to 114 Clients",
    },
    {
      year: "2019",
      title: "SMART SOLUTIONS",
      description: "Paaji Incorporated IT services to Clients",
    },
    {
      year: "2024",
      title: "ALWAYS ON",
      description: "Paaji still going on and delivering services",
    },
  ];

  return (
    <div className="relative w-full py-16 px-4 lg:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-lg lg:text-xl font-serif text-black">History</h3>
        <h2 className="text-3xl lg:text-5xl text-[#cc5f4d] font-bold">
          A History Retrospective
        </h2>
      </div>

      {/* Timeline */}
      <div className="flex items-center gap-40 flex-wrap mx-56 max-w-5xl">
        {historyData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-6 rounded-lg bg-white shadow-lg"
          >
            <h3 className="text-4xl font-bold text-black">{item.year}</h3>
            <h4 className="text-xl text-[#cc5f4d] font-bold mt-4">
              {item.title}
            </h4>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="hidden md:block">
        {/* Left decoration */}
        <div className="absolute bottom-1/4 left-0 transform rotate-45 bg-red-500 h-12 w-12"></div>
        {/* Right decoration */}
        <div className="absolute top-1/4 right-0 bg-yellow-500 h-12 w-12"></div>
      </div>
    </div>
  );
}

export default History;
