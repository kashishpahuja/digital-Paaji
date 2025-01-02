import Link from "next/link";
import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Faq() {
  const [showIcon, setShowIcon] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleShowIcon = () => {
    setShowIcon(!showIcon);
  };

  const toggleDropdown = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "How does Digital Paaji ensure results for its clients?",
      answer:
        "To assess companies, the market, and the competition, create customized marketing plans, and track the success of campaigns, Digital Paaji employs a data-driven methodology. We work together closely, stay transparent, and get input to improve your campaign goals. Our objective is to provide long-term corporate growth and a high return on investment.",
    },
    {
      question: "What industries does Digital Paaji serve?",
      answer:
        "Digital Paaji serves a variety of industries, including technology, retail, healthcare, and more. Our strategies are tailored to meet the specific needs of each sector.",
    },
    {
      question: "What can I expect in terms of timeline and deliverables?",
      answer:
        "Our timelines and deliverables are customized to suit each project. Typically, we provide detailed plans and regular updates to ensure transparency and on-time delivery.",
    },
    {
      question: "Can Digital Paaji help with branding and messaging?",
      answer:
        "Yes, we specialize in branding and crafting compelling messages to ensure your brand stands out and resonates with your target audience.",
    },
    {
      question: "What is the cost of Digital Paaji's services?",
      answer:
        "Our pricing is competitive and tailored to the services required. Contact us for a detailed quote based on your needs.",
    },
  ];

  return (
    <div className="flex flex-col items-stretch gap-12 mx-8 md:mx-12 xl:mx-60">
      {/* Header Section */}
      <div className="text-center border-b-2 border-black py-6">
        <h3 className="bungeeHead text-[#cc5f4d] text-3xl lg:text-4xl">
          Get Started with Digital Paaji Today!
        </h3>
        <p className="servicePara text-sm text-gray-700 mt-4">
          With an emphasis on getting to know each client’s particular vision,
          objectives, and target market, Digital Paaji provides customised
          social media marketing services for companies of all sizes. In order
          to talk about present tactics, pinpoint areas that need work, and
          investigate how our services might support the accomplishment of
          marketing objectives, we even offer a free introductory consultation.
          Selecting Digital Paaji means joining forces with a growth-oriented
          partner to develop campaigns that have an influence on your target
          audience and produce outcomes.
        </p>
        <h3
          className="h-20 w-fit mx-auto flex items-center justify-center gap-2 merriHead text-black text-xl  mt-6"
          onMouseLeave={handleShowIcon}
        >
          We are Just a{" "}
          {showIcon ? (
            <Link
              href="https://wa.me/8699640752"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 text-green-600 transition-transform duration-500"
            >
              <img
                src="/Images/services/whIcon.gif"
                alt=""
                className="flip w-full h-auto object-cover"
              />
            </Link>
          ) : (
            <span
              className="text-[#cc5f4d] underline w-16"
              onMouseEnter={handleShowIcon}
            >
              Click
            </span>
          )}{" "}
          Away
        </h3>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* Question Section */}
            <button
              onClick={() => toggleDropdown(index)}
              className="flex justify-between items-center w-full py-4 text-left font-medium"
            >
              <span className="bungeeHead text-[#006E7F] text-md mr-2">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FaChevronUp className="text-lg text-gray-600" />
              ) : (
                <FaChevronDown className="text-lg text-gray-600" />
              )}
            </button>

            {/* Answer Section */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <div className="servicePara text-gray-700 text-sm mt-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
