import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

function info() {
  return (
    <div className="flex flex-col xl:flex-row items-stretch  mx-8 md:mx-12 xl:mx-52">
         {/* Map Section */}
      <div className="zoom w-full xl:w-1/2 h-[460px] overflow-hidden">
        <img
          src="/Images/services/presence.webp"
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Contact Section */}
      <div className="z-[999] w-full xl:w-1/2 px-6 py-12 md:px-8  xl:px-12 bg-[#cc5f4d] flex flex-col justify-start">
        <h3 className="bungeeHead text-2xl text-white  ">
        Maximise Your Online Presence with Comprehensive Digital Marketing
        </h3>
        <p className="servicePara text-white my-12">
        With a focus on email campaigns, content creation, social media marketing, and search engine optimization, Digital Paaji offers businesses of all sizes customised digital marketing services. We create individualised plans that appeal to their target market since our experts recognize how different every company is.
       
        </p>
        <div className="">
          <button className="px-6 py-2 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
            Contact Us
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default info;
