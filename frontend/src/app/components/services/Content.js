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
        <h3 className="merriHead text-black text-xl xl:text-2xl">Services</h3>
      </div>
      <div className=" text-center">
        <h3 className="bungeeHead my-12 text-[#cc5f4d]  text-[30px] xl:text-[40px]">
          Crafting Compelling Content
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          <div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="my-4">
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
                      <img
                        src="/Images/1.webp"
                        alt=""
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "5" ? "block" : "hidden"
                      }`}
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
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  To increase website traffic and your brand’s online
                  visibility, Digital Paaji provides digital marketing services.
                  We employ content marketing, PPC advertising, and email
                  marketing techniques, utilising data analytics to create
                  campaigns that appeal to your target market. In order to
                  create individualised experiences and streamline procedures,
                  our experts employed sophisticated marketing automation
                  systems. For the best outcomes, we make data-driven
                  adjustments based on ongoing campaign performance monitoring.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link href={'/'} className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg ">
                  Get Service
                </Link>
                <Link href={'/'} className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="my-4">
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
                      <img
                        src="/Images/1.webp"
                        alt=""
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "5" ? "block" : "hidden"
                      }`}
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
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  To increase website traffic and your brand’s online
                  visibility, Digital Paaji provides digital marketing services.
                  We employ content marketing, PPC advertising, and email
                  marketing techniques, utilising data analytics to create
                  campaigns that appeal to your target market. In order to
                  create individualised experiences and streamline procedures,
                  our experts employed sophisticated marketing automation
                  systems. For the best outcomes, we make data-driven
                  adjustments based on ongoing campaign performance monitoring.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link href={'/'} className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg ">
                  Get Service
                </Link>
                <Link href={'/'} className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg ">
                  Learn More
                </Link>
              </div>
            </div>
          </div><div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="my-4">
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
                      <img
                        src="/Images/1.webp"
                        alt=""
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "5" ? "block" : "hidden"
                      }`}
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
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  To increase website traffic and your brand’s online
                  visibility, Digital Paaji provides digital marketing services.
                  We employ content marketing, PPC advertising, and email
                  marketing techniques, utilising data analytics to create
                  campaigns that appeal to your target market. In order to
                  create individualised experiences and streamline procedures,
                  our experts employed sophisticated marketing automation
                  systems. For the best outcomes, we make data-driven
                  adjustments based on ongoing campaign performance monitoring.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link href={'/'} className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg ">
                  Get Service
                </Link>
                <Link href={'/'} className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg ">
                  Learn More
                </Link>
              </div>
            </div>
          </div><div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="my-4">
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
                      <img
                        src="/Images/1.webp"
                        alt=""
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "5" ? "block" : "hidden"
                      }`}
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
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  To increase website traffic and your brand’s online
                  visibility, Digital Paaji provides digital marketing services.
                  We employ content marketing, PPC advertising, and email
                  marketing techniques, utilising data analytics to create
                  campaigns that appeal to your target market. In order to
                  create individualised experiences and streamline procedures,
                  our experts employed sophisticated marketing automation
                  systems. For the best outcomes, we make data-driven
                  adjustments based on ongoing campaign performance monitoring.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link href={'/'} className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg ">
                  Get Service
                </Link>
                <Link href={'/'} className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg ">
                  Learn More
                </Link>
              </div>
            </div>
          </div><div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="my-4">
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
                      <img
                        src="/Images/1.webp"
                        alt=""
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "5" ? "block" : "hidden"
                      }`}
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
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  To increase website traffic and your brand’s online
                  visibility, Digital Paaji provides digital marketing services.
                  We employ content marketing, PPC advertising, and email
                  marketing techniques, utilising data analytics to create
                  campaigns that appeal to your target market. In order to
                  create individualised experiences and streamline procedures,
                  our experts employed sophisticated marketing automation
                  systems. For the best outcomes, we make data-driven
                  adjustments based on ongoing campaign performance monitoring.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link href={'/'} className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg ">
                  Get Service
                </Link>
                <Link href={'/'} className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg ">
                  Learn More
                </Link>
              </div>
            </div>
          </div><div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">Digital Marketing</h3>
            </div>
            <div className="my-4">
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
                      <img
                        src="/Images/1.webp"
                        alt=""
                        className="w-full h-auto object-cover"
                      />
                    </li>
                    <div
                      className={` relative ${
                        show === "5" ? "block" : "hidden"
                      }`}
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
              <div className="mt-4">
                <p className="merriHead text-gray-500 text-justify px-4">
                  To increase website traffic and your brand’s online
                  visibility, Digital Paaji provides digital marketing services.
                  We employ content marketing, PPC advertising, and email
                  marketing techniques, utilising data analytics to create
                  campaigns that appeal to your target market. In order to
                  create individualised experiences and streamline procedures,
                  our experts employed sophisticated marketing automation
                  systems. For the best outcomes, we make data-driven
                  adjustments based on ongoing campaign performance monitoring.
                </p>
              </div>
              <div className=" flex items-center justify-center mt-8">
                <Link href={'/'} className="px-6 py-2 border-l-2 rounded-l-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#006E7F]  text-lg ">
                  Get Service
                </Link>
                <Link href={'/'} className="px-6 py-2 border-r-2 rounded-r-full text-white font-semibold hover:bg-[#f8cb2e] hover:text-black bg-[#cc5f4d]  text-lg ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
         
        
          
          
        </div>
        
      </div>
    </div>
  );
}

export default Services;
