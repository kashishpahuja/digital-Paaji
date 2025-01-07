"use client";
import Link from "next/link";
import React from "react";

function AddOn() {
  return (
    <div className=" ">
      <div className="text-center pt-24 mx-4 md:mx-12 lg:mx-32 xl:mx-72 border-t-2 border-black">
        <h3 className="bungeeHead text-[#cc5f4d] text-xl md:text-2xl xl:text-4xl " style={{letterSpacing:'0px'}}>
          Justifications for Thinking About Social Media Promotion
        </h3>
      </div>

      <div className=" text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72 my-12">
        <div className=" ">
            <div className="grid grid-cols-1 gap-6 ">
            <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            
          >
             <div className=" p-4">
              <img src="/Images/services/img.webp" alt="" className="w-full h-[100%]" />
            </div>
            <div className="">
              <div className="mx-auto w-16 h-auto">
                <img
                  src="/Images/addOn/LG.webp"
                  alt=""
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="my-2">
                <h3 className="bungeeHead p-4 text-md lg:text-xl text-[#2e2d2d]">
                  Tailored Strategies:
                </h3>
              </div>
              <div className="">
                <p className="merriHead text-sm text-gray-500 text-justify">
                  One effective tactic for retaining clients and nurturing leads
                  is email marketing. With an emphasis on enticing clients with
                  insightful content, we offer customised campaigns, drip
                  campaigns, and promotional newsletters. To convert prospective
                  clients into devoted followers, we increase open and
                  click-through rates, cultivate solid connections, and employ
                  A/B testing and segmentation techniques.
                </p>
              </div>
            </div>
           
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            
          >
            
            <div className="">
              <div className="mx-auto w-16 h-auto">
                <img
                  src="/Images/addOn/LG.webp"
                  alt=""
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="my-2">
                <h3 className="bungeeHead p-4 text-md lg:text-xl text-[#2e2d2d]">
                  Tailored Strategies:
                </h3>
              </div>
              <div className="">
                <p className="merriHead text-sm text-gray-500 text-justify">
                  One effective tactic for retaining clients and nurturing leads
                  is email marketing. With an emphasis on enticing clients with
                  insightful content, we offer customised campaigns, drip
                  campaigns, and promotional newsletters. To convert prospective
                  clients into devoted followers, we increase open and
                  click-through rates, cultivate solid connections, and employ
                  A/B testing and segmentation techniques.
                </p>
              </div>
            </div>
            <div className=" p-4">
              <img src="/Images/services/img.webp" alt="" className="w-full h-[100%]" />
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            
          >
             <div className=" p-4">
              <img src="/Images/services/img.webp" alt="" className="w-full h-[100%]" />
            </div>
            <div className="">
              <div className="mx-auto w-16 h-auto">
                <img
                  src="/Images/addOn/LG.webp"
                  alt=""
                  className="zoom w-full h-auto object-cover"
                />
              </div>
              <div className="my-2">
                <h3 className="bungeeHead p-4 text-md lg:text-xl text-[#2e2d2d]">
                  Tailored Strategies:
                </h3>
              </div>
              <div className="">
                <p className="merriHead text-sm text-gray-500 text-justify">
                  One effective tactic for retaining clients and nurturing leads
                  is email marketing. With an emphasis on enticing clients with
                  insightful content, we offer customised campaigns, drip
                  campaigns, and promotional newsletters. To convert prospective
                  clients into devoted followers, we increase open and
                  click-through rates, cultivate solid connections, and employ
                  A/B testing and segmentation techniques.
                </p>
              </div>
            </div>
           
          </div>
          </div>
          <div className="text-center mt-12">
          <Link href="tel:+918699640752" className="px-6 py-2 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
            Call Us
          </Link>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default AddOn;
