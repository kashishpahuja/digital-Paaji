"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const handleVideoPopup = () => setIsOpen(!isOpen);

  const servicesData = [
    { id: 1, image: "/Images/work/7.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
    { id: 2, image: "/Images/work/7.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
    { id: 3, image: "/Images/work/7.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
    { id: 4, image: "/Images/work/8.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
    { id: 5, image: "/Images/work/7.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
    { id: 2, image: "/Images/work/7.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
    { id: 3, image: "/Images/work/7.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
    { id: 4, image: "/Images/work/8.webp", video: "https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu" },
  ];

  return (
    <div className="mx-6 sm:mx-12 lg:mx-40 xl:mx-60">
      <div className="text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="flex flex-col items-center justify-center">
              <div className="border border-black" data-aos="zoom-in">
                <div className="border-b border-black">
                  <h3 className="services p-4 text-[#2e2d2d]">Tips for Stunning Shots</h3>
                </div>
                <div>
                  <img
                    src={service.image}
                    alt="Service"
                    className="zoom w-full h-auto object-cover p-6"
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={handleVideoPopup}
                  className="flex items-center justify-center gap-2 px-6 py-2 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg"
                >
                  <img
                    src="/Images/addOn/videoIcon.webp"
                    className="w-7 h-7"
                    alt="Video Icon"
                  />
                  <span>See Video</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[99999999]">
          <AiOutlineClose
            className="absolute top-6 right-6 text-4xl text-white cursor-pointer border-2 rounded-full border-white p-2"
            onClick={handleVideoPopup}
          />
          <div className="p-1 bg-[#f6f6f5] ">
            <iframe
            //   width="660"
            //   height="425"
              className="w-[300px] h-[400px] md:w-[540px] lg:w-[660px] md:h-[400px] lg:h-[425px]"
              src="https://www.youtube.com/embed/VhBl3dHT5SY?si=oqkHQm1U1USGBEZu"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
