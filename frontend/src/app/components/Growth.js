"use client";
import React from "react";

function Growth() {
  return (
    <div style={{backgroundImage:"url(/Images/services/bg.webp)"}} className="w-full h-auto py-24">
    <div className="mx-12 lg:mx-32 xl:mx-60 " >
      <div className="text-center">
        <h3 className="bungeeHead my-8 text-[#e6e8eb]  text-2xl xl:text-6xl">
          Digitizing your Business <br /> Growth
        </h3>

        <p className="servicePara mx-auto text-[#f8f7f7] w-[600px]  text-sm xl:text-[16px]">
          With a commitment to providing top-notch services, Digital Paaji is
          always refining its tactics to keep ahead of market trends. Our team
          comprises highly qualified professionals who are enthusiastic about
          their work and prioritize meticulous planning, outcomes, and attention
          to detail.
        </p>
      </div>
      <div className=" text-center">
        <div className="text-center mt-12">
          <button className="px-6 py-2 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
            Call Us
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Growth;