import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

function info() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-16 mx-4 md:mx-12 xl:mx-52">
         {/* Map Section */}
      <div className="w-full lg:w-1/2 h-[300px] md:h-[500px] overflow-hidden">
        <img
          src="/Images/services/video.webp"
          alt=""
          className="w-full h-auto lg:h-[100%] lg:p-12 object-cover"
        />
      </div>
      {/* Contact Section */}
      <div className="w-full lg:w-1/2 px-6 py-12 md:px-8  lg:px-12 bg-[#cc5f4d] flex flex-col justify-start">
      <h3 className="block lg:hidden bungeeHead text-3xl text-white mb-8 ">
        Why Video  Editing Matters ?
        </h3>
        <h3 className="hidden lg:block bungeeHead text-5xl text-white mb-8 ">
        Why Video <br /> Editing <br />Matters ?
        </h3>
        <p className="servicePara text-white">
        Video editing is an essential step that turns unprocessed material into a polished, captivating end result. It helps tell the tale, improves the images, and holds the audience’s interest. To ensure clarity, compellingness, and brand alignment, content is refined using tools including colour correction, sound editing, and effects.
        </p>
        <div className=" mt-8">
          <button className="px-6 py-2 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
            Contact Us
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default info;