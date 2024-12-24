"use client";
import React, { useState } from "react";
import Link from "next/link";

function Services() {
  const [show, setShow] = useState(null);

  const handleMouseEnter = (elem) => setShow(elem);
  const handleMouseLeave = () => setShow(null);
  return (
    <div className="mx-12 lg:mx-32 xl:mx-60 ">
      <div className="text-center">
        <h3 className="merriHead text-[#302f2f] text-xl xl:text-2xl">
          Welcome to Digital Paaji - We mind your Business
        </h3>
        <p className="servicePara text-[#757474] mt-4 text-sm xl:text-[16px] ">
          One of the top agencies with more than 15 years of expertise in
          digital marketing is Digital Paaji. For expansion and success, we
          think all companies should have access to the best marketing
          techniques. Web development, graphic design, SEO, video production,
          social media management, and digital marketing are all included in our
          extensive service offering. Utilising state-of-the-art marketing
          automation tools and professional insights, we successfully acquire
          and convert qualified prospects. For the purpose of optimising return
          on investment, our experts follow a data-driven strategy.
        </p>
      </div>
      <div className=" text-center">
        <h3 className="bungeeHead my-12 text-[#cc5f4d]  text-[30px] xl:text-[40px]">OUR SERVICES</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          <div className="border border-black "  data-aos="zoom-in" >
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              
              <div className="mx-auto  w-[14rem] h-40">
              <Link
                href={"/"}
                onMouseEnter={() => handleMouseEnter("5")}
                onMouseLeave={handleMouseLeave}
                className=""
              >
                <li
                  className={`heading text-[11px] font-bungee-inline text-center ${
                    show === "5" ? "hidden" : "block"
                  }`}
                >
                  <img src="/Images/1.webp" alt="" className="w-full h-auto object-cover"/>
                </li>
                <div
                  className={` relative ${show === "5" ? "block" : "hidden"}`}
                >
                  <img
                    src="/Images/navGif/SMM.gif"
                    alt="5"
                    className={`w-full h-auto object-cover ${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />
                     <img
                    src="/Images/services/hand.gif"
                    alt="5"
                    className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />

                </div>
              </Link>
              </div>
              
            </div>
          </div>
          <div className="border border-black "  data-aos="zoom-in"  >
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              
              <div className="mx-auto  w-[14rem] h-40">
              <Link
                href={"/digital-marketing"}
                onMouseEnter={() => handleMouseEnter("5")}
                onMouseLeave={handleMouseLeave}
                className=""
              >
                <li
                  className={`heading text-[11px] font-bungee-inline text-center ${
                    show === "5" ? "hidden" : "block"
                  }`}
                >
                  <img src="/Images/1.webp" alt="" className="w-full h-auto object-cover"/>
                </li>
                <div
                  className={` relative ${show === "5" ? "block" : "hidden"}`}
                >
                  <img
                    src="/Images/navGif/SMM.gif"
                    alt="5"
                    className={`w-full h-auto object-cover ${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />
                     <img
                    src="/Images/services/hand.gif"
                    alt="5"
                    className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />

                </div>
              </Link>
              </div>
              
            </div>
          </div><div className="border border-black "  data-aos="zoom-in" >
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              
              <div className="mx-auto  w-[14rem] h-40">
              <Link
                href={"/digital-marketing"}
                onMouseEnter={() => handleMouseEnter("5")}
                onMouseLeave={handleMouseLeave}
                className=""
              >
                <li
                  className={`heading text-[11px] font-bungee-inline text-center ${
                    show === "5" ? "hidden" : "block"
                  }`}
                >
                  <img src="/Images/1.webp" alt="" className="w-full h-auto object-cover"/>
                </li>
                <div
                  className={` relative ${show === "5" ? "block" : "hidden"}`}
                >
                  <img
                    src="/Images/navGif/SMM.gif"
                    alt="5"
                    className={`w-full h-auto object-cover ${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />
                     <img
                    src="/Images/services/hand.gif"
                    alt="5"
                    className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />

                </div>
              </Link>
              </div>
              
            </div>
          </div>
          <div className="border border-black "  data-aos="zoom-in" >
            <div className="border-b border-black" >
              <h3 className="services p-4 text-[#2e2d2d] ">Digital Marketing</h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              
              <div className="mx-auto  w-[14rem] h-40">
              <Link
                href={"/digital-marketing"}
                onMouseEnter={() => handleMouseEnter("5")}
                onMouseLeave={handleMouseLeave}
                className=""
              >
                <li
                  className={`heading text-[11px] font-bungee-inline text-center ${
                    show === "5" ? "hidden" : "block"
                  }`}
                >
                  <img src="/Images/1.webp" alt="" className="w-full h-auto object-cover"/>
                </li>
                <div
                  className={` relative ${show === "5" ? "block" : "hidden"}`}
                >
                  <img
                    src="/Images/navGif/SMM.gif"
                    alt="5"
                    className={`w-full h-auto object-cover ${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />
                     <img
                    src="/Images/services/hand.gif"
                    alt="5"
                    className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />

                </div>
              </Link>
              </div>
              
            </div>
          </div>
          <div className="border border-black "  data-aos="zoom-in" >
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              
              <div className="mx-auto  w-[14rem] h-40">
              <Link
                href={"/digital-marketing"}
                onMouseEnter={() => handleMouseEnter("5")}
                onMouseLeave={handleMouseLeave}
                className=""
              >
                <li
                  className={`heading text-[11px] font-bungee-inline text-center ${
                    show === "5" ? "hidden" : "block"
                  }`}
                >
                  <img src="/Images/1.webp" alt="" className="w-full h-auto object-cover"/>
                </li>
                <div
                  className={` relative ${show === "5" ? "block" : "hidden"}`}
                >
                  <img
                    src="/Images/navGif/SMM.gif"
                    alt="5"
                    className={`w-full h-auto object-cover ${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />
                     <img
                    src="/Images/services/hand.gif"
                    alt="5"
                    className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />

                </div>
              </Link>
              </div>
              
            </div>
          </div>
          <div className="border border-black "  data-aos="zoom-in" >
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              
              <div className="mx-auto  w-[14rem] h-40">
              <Link
                href={"/digital-marketing"}
                onMouseEnter={() => handleMouseEnter("5")}
                onMouseLeave={handleMouseLeave}
                className=""
              >
                <li
                  className={`heading text-[11px] font-bungee-inline text-center ${
                    show === "5" ? "hidden" : "block"
                  }`}
                >
                  <img src="/Images/1.webp" alt="" className="w-full h-auto object-cover"/>
                </li>
                <div
                  className={` relative ${show === "5" ? "block" : "hidden"}`}
                >
                  <img
                    src="/Images/navGif/SMM.gif"
                    alt="5"
                    className={`w-full h-auto object-cover ${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />
                     <img
                    src="/Images/services/hand.gif"
                    alt="5"
                    className={`absolute bottom-2 -right-9 md:-right-16 w-16 h-16 object-cover ${
                      show === "5" ? "block" : "hidden"
                    }`}
                  />

                </div>
              </Link>
              </div>
              
            </div>
          </div>

        
          
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-2 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
            Call Us Now
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default Services;
