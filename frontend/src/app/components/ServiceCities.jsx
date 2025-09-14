"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BLOGS, FAQS } from "../../../public/lib/content"; // import data

export default function ServiceCityContent({ serviceName, cityName }) {
  const [selectedBlog, setSelectedBlog] = useState(0);
  const [openIndexLeft, setOpenIndexLeft] = useState(null);

  // filter blogs by service + city
  const filteredBlogs = BLOGS.filter(
    (blog) =>
      blog.service === serviceName.toLowerCase() &&
      blog.city === cityName.toLowerCase()
  );

  const blog = filteredBlogs[selectedBlog] || null;

  if (!blog)
    return (
 <p className="text-[#cc5f4d] h-[600px] lg:h-[600px] flex flex-col items-center justify-center merriHead text-3xl">
   {/* content for {serviceName} {cityName}  */}
  <span className="text-5xl font-bold mt-4">Coming Soon</span>
</p>

    );

  // <p >No content available for {cityName}</p>;

  const toggleDropdown = (index) => {
    setOpenIndexLeft(openIndexLeft === index ? null : index);
  };

  return (
    <div className="px-4 lg:px-12 xl:px-36 my-24 flex items-start flex-wrap-reverse xl:flex-nowrap justify-center gap-12">
      {/* Left Content */}
      <div className="w-full xl:w-[75%]">
        <div className="flex flex-col gap-6">
          <h1 className="servicePara text-3xl font-bold text-[#cc5f4d]">
            {blog.title}
          </h1>
          <p className="text-gray-500 text-lg">
            {blog.date} | {blog.tag}
          </p>
          <p className="text-md text-gray-700">{blog.description}</p>

          <div className="grid grid-cols-1 mt-4 h-80">
            {/* {blog.images.map((img, i) => ( */}
              <Image
                // key={i}
                src={'/Images/services.webp'}
                alt="blog"
                width={220}
                height={220}
                className="w-full h-[100%] object-cover"
              />
            {/* ))} */}
          </div>

          <div className="mt-8 space-y-8">
            {blog.sections.map((section, index) => (
              <div key={index}>
                <h2 className="servicePara text-lg font-semibold mb-4 text-[#3f3230]">
                  {section.heading}
                </h2>
                <div className="space-y-3 text-gray-700 text-md leading-relaxed">
                  {section.paragraphs?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {section.points && (
                  <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="xl:sticky xl:top-[100px] w-full xl:w-[25%]">
        {/* Tags */}
        <div>
          <h1 className="text-xl font-medium servicePara text-[#3f3230]">
            Services
          </h1>
          <div className="flex items-center flex-wrap gap-2 rounded-lg mt-4">
            <Link
              href={"/digital-marketing"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Digital Marketing
            </Link>
            <Link
              href={"/social-media-marketing"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Social Media Marketing
            </Link>
            <Link
              href={"/web-development"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Website Development
            </Link>
            <Link
              href={"/video-production"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Video Production
            </Link>
            <Link
              href={"/search-engine-optimization"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Search Engine Optimization
            </Link>
            <Link
              href={"/graphic-designing"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Graphic Designing
            </Link>
          </div>
        </div>

        <h1 className="mt-8 text-xl font-medium servicePara text-[#3f3230]">
          Frequently Asked Questions
        </h1>
        <div className=" w-full mt-8">
          {blog.faqs?.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full flex justify-between py-3 text-start "
              >
                {faq.question}
                {openIndexLeft === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndexLeft === index && (
                <div className="p-2 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Optional Recent Blogs section (kept commented like yours) */}
      </div>
    </div>
  );
}
