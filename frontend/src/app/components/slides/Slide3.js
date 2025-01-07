import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";

function Banner({ handleSlide, slideNumber, currentSlide }) {
  const [showText, setShowText] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMouseEnter = () => setShowText(true);
  const handleMouseLeave = () => setShowText(false);

  // Check screen size to determine visibility
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint in Tailwind
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Helper function to split the text into letters
  const splitText = (text) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        className={`letter ${showText || isSmallScreen ? "" : "hide"}`}
        style={{
          animationDelay: `${index * 0.05}s`, // Delay the animation for each letter
        }}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className={`slide slide-${slideNumber} ${slideNumber === currentSlide ? 'active' : ''} w-full h-[800px] bg-green-800`}>
      {/* <div
        className="bg-flow relative w-full min-h-screen bg-no-repeat "
        style={{
          backgroundImage: `url('/Images/banner/slide1BG.webp')`,
          backgroundSize: isSmallScreen ? "cover" : "", // Apply cover for small screens
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="absolute top-2 h-[100px] w-full">
          <div className="relative flex justify-center items-center flex-col gap-2">
            <div
              className="w-[220px] h-[70px] cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="/Images/banner/logoWhite.webp"
                alt="logoWhite"
                className="w-full h-[100%] object-contain"
              />
            </div>
            <div className="block lg:hidden">
              <p className="text-white text-sm">
                {splitText("Lorem ipsum dolor, sit amet.")}
              </p>
            </div>
            {showText && (
              <div className="hidden lg:block">
                <p className="text-white text-sm">
                  {splitText("Lorem ipsum dolor, sit amet.")}
                </p>
              </div>
            )}

            <div className="hidden lg:block absolute right-[30%] xl:right-[34%] top-8">
              <div className="vibrate space-x-10">
                <div className="w-[43px] h-[12px]">
                  <img
                    src="/Images/banner/arrow1.webp"
                    alt=""
                    className="w-full h-[100%] object-cover"
                  />
                </div>
                <div>
                  <p
                    className="bungeeHead text-xs text-gray-600"
                    style={{ fontWeight: 100 }}
                  >
                    Hover Me
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block absolute bottom-2 w-full"
          onClick={() => {
            const scrollHeight = document.documentElement.clientHeight; // Height of the viewport
            window.scrollTo({ top: scrollHeight, behavior: "smooth" }); // Scroll down by one viewport height
          }}
        >
          <div className="vibrate flex flex-col justify-center items-center cursor-pointer">
            <div className="w-[43px] h-[80px]">
              <img
                src="/Images/banner/arrow2.webp"
                alt=""
                className="w-full h-[100%] object-cover"
              />
            </div>
            <div>
              <p
                className="bungeeHead text-xs text-gray-600"
                style={{ fontWeight: 100 }}
              >
                Scroll For More
              </p>
            </div>
          </div>
        </div>

        <div className=" absolute bottom-4 lg:right-16 w-full lg:w-fit">
          <div className="relative">
            <ul className="flex items-center justify-center gap-4">
              <li>
                <FaMailBulk className="w-8 h-8 text-white" />
              </li>
              <li>
                <FaFacebook className="w-8 h-8 text-white" />
              </li>
              <li>
                <FaInstagram className="w-8 h-8 text-white" />
              </li>
            </ul>
          </div>
          <div className="vibrate hidden lg:block absolute right-32 bottom-6">
            <p
              className="bungeeHead relative text-gray-600 text-xs w-[150px]"
              style={{ fontWeight: 100 }}
            >
              Get In Touch
            </p>
            <div className="absolute bottom-6 left-16 ">
              <img
                src="/Images/banner/arrow3.webp"
                alt=""
                className="w-full h-[100%] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="py-20 flex items-center flex-wrap-reverse xl:flex-nowrap justify-center gap-0 xl:mx-auto">
          <div className="relative w-full xl:w-[70%] mx-8 xl:mx-0">
            <img
              src="/Images/banner/laptop.webp"
              alt="Laptop"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-[14%] left-[10%] w-[80%] h-[70%]">
              <img
                src="/Images/banner/laptopInner.webp"
                alt="Content"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="w-[70%] md:w-[55%] xl:w-[20%] md:-mb-6 xl:mb-0 text-center xl:-ml-56 z-[999] flex flex-row xl:flex-col items-end justify-end">
            <div className="p-6 py-12 bg-[#373636]">
              <h3
                className="merriHead text-sm text-white"
                style={{ letterSpacing: "4px" }}
              >
                <span
                  className="text-[#cc5f4d] text-sm"
                  style={{ letterSpacing: "2px" }}
                >
                  TRANSFORM{" "}
                </span>
                YOUR DIGITAL PRESENCE
              </h3>
              <p
                className="servicePara text-xs text-gray-50 my-8"
                style={{ textAlign: "center" }}
              >
                customised digital marketing services. We create individualised
                plans that appeal to their target market since our experts
                recognize how different every company is.
              </p>
              <p
                className="servicePara text-sm text-[#cc5f4d]"
                style={{ textAlign: "center" }}
              >
                LET'S TALK BUSINESS
              </p>
            </div>
            <div className="flex items-start xl:items-center  justify-start xl:justify-end flex-col xl:flex-row xl:w-full">
              <button className="bg-white">
                <FaArrowLeft className="text-gray-500 w-9 h-9 xl:w-12 xl:h-12 p-3 xl:p-4" />
              </button>
              <button onClick={()=>{handleSlide}} className="bg-white">
                <FaArrowRight className="text-gray-500 w-9 h-9 xl:w-12 xl:h-12 p-3 xl:p-4" />
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Banner;
