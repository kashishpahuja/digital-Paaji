"use client";
import React, { useState } from "react";
import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

function FollowUs() {
  const [activeTab, setActiveTab] = useState(0);

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, link: "https://facebook.com" },
    { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com" },
    { name: "YouTube", icon: <FaYoutube />, link: "https://youtube.com" },
    { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com" },
    { name: "Pinterest", icon: <FaPinterest />, link: "https://pinterest.com" },
  ];

  const handleMouseEnter = (index) => {
    setActiveTab(index);
  };

  return (
    <div
      style={{ backgroundImage: "url(/Images/services/bg.webp)" }}
      className="w-full h-auto py-24"
    >
      <div className="mx-8 xl:mx-60" data-aos="zoom-in">
        {/* Header Section */}
        <div className="text-center">
          <h3 className="bungeeHead my-8 text-[#e6e8eb] text-3xl md:text-4xl">
            Follow Our Social Media For Regular Updates
          </h3>
        </div>

        {/* Social Media Links */}
        <ul className="flex items-center justify-center gap-16">
          {socialLinks.map((social, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              className={`merryWeather flex p-2 gap-2 items-end text-xl font-semibold text-white ${
                activeTab === index ? "border-b-2 border-yellow-400" : ""
              }`}
            >
              {social.icon}
              <span className="">
                {social.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Follow Us Link */}
        <div className="servicePara text-white underline mt-12 text-lg font-bold text-center">
          <Link href={socialLinks[activeTab].link} target="_blank" className="ml-[530px]">
            Follow Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;