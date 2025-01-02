"use client";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

function FollowUs() {
  const [activeTab, setActiveTab] = useState(0);

  const socialContent = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      text: "Stay updated with our latest news and events by following us on Facebook. We share daily insights and updates for our community.",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      text: "Explore our visual journey on Instagram. Get behind-the-scenes shots and exclusive sneak peeks.",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      text: "Watch our videos on YouTube for tutorials, updates, and entertainment content.Watch our videos on YouTube for tutorials, updates, and entertainment content.Watch our videos on YouTube for tutorials, updates, and entertainment content.Watch our videos on YouTube for tutorials, updates, and entertainment content.Watch our videos on YouTube for tutorials, updates, and entertainment content.",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      text: "Follow us on Twitter for real-time updates, announcements, and quick news bitesWatch our videos on YouTube for tutorials, updates, and entertainment content.Watch our videos on YouTube for tutorials, updates, and entertainment content.Watch our videos on YouTube for tutorials, updates, and entertainment content..",
    },
    {
      name: "Pinterest",
      icon: <FaPinterest />,
      text: "Discover creative ideas, inspirations, and visual content on our Pinterest boarWatch our videos on YouTube for tutorials, updates, and entertainment content.Watch our videos on YouTube for tutorials, updates, and entertainment content.ds.",
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveTab(index);
  };

  return (
    <div
      style={{ backgroundImage: "url(/Images/services/bg.webp)" }}
      className="w-full h-auto py-24 overflow-hidden"
    >
      <div className="mx-8 xl:mx-60" data-aos="zoom-in">
        {/* Header Section */}
        <div className="text-center">
          <h3 className="bungeeHead my-8 text-[#e6e8eb] text-3xl md:text-4xl">
            Follow Our Social Media For Regular Updates
          </h3>
        </div>

        {/* Social Media Tabs */}
        <ul className="flex items-center justify-center flex-wrap gap-6 lg:gap-16">
          {socialContent.map((social, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              className={`merryWeather flex p-2 gap-2 items-center text-xl font-semibold text-white cursor-pointer ${
                activeTab === index ? "border-b-2 border-yellow-400" : ""
              }`}
            >
              {social.icon}
              <span>{social.name}</span>
            </li>
          ))}
        </ul>

        {/* Content Display */}
        <div className="servicePara text-white mt-12 text-center px-4 break-words max-w-3xl mx-auto">
          {socialContent[activeTab].text}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <button className="px-4 py-2 border-2 rounded-xl border-black bg-yellow-400 hover:bg-[#cc5f4d] text-black hover:text-white font-medium text-base">
            Call Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
