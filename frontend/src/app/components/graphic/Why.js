import React, { useEffect, useRef } from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

function Info() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;

      const rect = imgRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the image is in the viewport
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        const scrollProgress = 1 - (rect.bottom / windowHeight);
        imgRef.current.style.transform = `scale(${1 + scrollProgress * 0.2})`;
      } else {
        imgRef.current.style.transform = "scale(1)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 mx-4 md:mx-12 xl:mx-60">
      {/* Contact Section */}
      <div className="w-full lg:w-1/2 px-6 py-12 md:px-8  lg:px-12 bg-[#cc5f4d] flex flex-col justify-start">
        <h3 className="bungeeHead text-2xl text-white mb-8 ">
          Get In Touch
        </h3>
        <p className="servicePara text-white">
          To assist companies improve their online visibility, boost
          interaction, and turn leads into devoted clients, Digital Paaji
          provides a thorough digital marketing strategy.
          <br />
          The team is committed to developing methods that are tailored to your
          particular objectives and difficulties. The package covers graphic
          design, video production, SEO, social media marketing, and web
          construction. Since Digital Paaji ensures transparency and
          collaboration, you are free to make adjustments as necessary.
        </p>
        <div className="mt-8">
          <button className="px-6 py-2 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg">
            Contact Us
          </button>
        </div>
      </div>
      {/* Map Section */}
      <div className="Scroll-zoom w-full lg:w-1/2 h-auto">
        <img
          ref={imgRef}
          src="/Images/services/gdWhy.png"
          alt=""
          className=" w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Info;
