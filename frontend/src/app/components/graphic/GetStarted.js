import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

function info() {
  return (
    <div className=" ">
      {/* Contact Section */}
      <div className="zigzag-box"></div>

      <div className="w-full text-center px-6 py-24 md:px-16  lg:px-72 bg-[#cc5f4d]  flex flex-col justify-start">

        <h3 className="bungeeHead text-3xl lg:text-5xl text-white mb-8 ">
          GET STARTED TODAY
        </h3>
        <p className="servicePara text-white text-sm" style={{textAlign:'center'}}>
     
          
          The team is committed to developing methods that are tailored to your
          particular objectives and difficulties. The package covers graphic
          design, video production, SEO, social media marketing, and web
          construction. Since Digital Paaji ensures transparency and
          collaboration, you are free to make adjustments as necessary.
          <br/>  <br/>
          To assist companies improve their online visibility, boost
          interaction, and turn leads into devoted clients, Digital Paaji
          provides a thorough digital marketing strategy.
          
          The team is committed to developing methods that are tailored to your
          particular objectives and difficulties. The package covers graphic
          design, video production, SEO, social media marketing, and web
          construction. Since Digital Paaji ensures transparency and
          collaboration, you are free to make adjustments as necessary.
        </p>
        <div className=" mt-8">
          <button className="px-6 py-2 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
            Call Us
          </button>
        </div>
      </div>
   
    </div>
  );
}

export default info;
