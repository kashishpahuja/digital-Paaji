import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa";

function Banner() {
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
    <div className="relative bg-black w-full min-h-screen">
        
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

      <div className=" absolute  bottom-4 lg:right-16 w-full lg:w-fit">
        <div className="relative">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <FaMailBulk className="w-8  h-8  text-white" />
            </li>
            <li>
              <FaFacebook className="w-8  h-8  text-white" />
            </li>
            <li>
              <FaInstagram className="w-8  h-8  text-white" />
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

{/* slider */}

<div className="relative flex justify-center">
<div className="relative  border-2 border-red-800">
  <div className="relative ">
    <img src="/Images/banner/laptop.webp" alt="" className=" w-full h-[100%] object-cover" />
  <div className="absolute top-0 left-12 "><img src="/Images/banner/laptopInner.webp" alt="" /></div>

  </div>
</div>
<div className="absolute bottom-24 right-0 w-[30%]  border-2 border-red-800 p-6 text-white bg-gray-800">
<div className="">
  <h3 className="text-md ">Lorem ipsum dolor sit.</h3>
  <p className="text-sm mt-4 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt. Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
  <p className="text-sm ">LET'S TALK BUSINESS</p>
  </div>
</div>

</div>
      
    </div>
  );
}

export default Banner;










// import React, { useState, useEffect } from "react";
// import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa";

// function Banner() {
//   const [showText, setShowText] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image: "/Images/slide1.webp",
//       title: "Being #1 is Just a Step Away",
//       description:
//         "Transform your digital presence. Welcome to Digital Paaji, a place where innovative strategies and cutting-edge technology meet to propel your business forward to success.",
//       buttonText: "Let's Talk Business",
//     },
//     {
//       image: "/Images/slide2.webp",
//       title: "Empowering Your Vision",
//       description:
//         "At Digital Paaji, we bring your ideas to life with creative solutions and powerful tools.",
//       buttonText: "Get Started Now",
//     },
//     {
//       image: "/Images/slide3.webp",
//       title: "Your Gateway to Success",
//       description:
//         "Discover innovative ways to grow your brand and make your mark in the digital world.",
//       buttonText: "Explore Services",
//     },
//   ];

//   const handleMouseEnter = () => setShowText(true);
//   const handleMouseLeave = () => setShowText(false);

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const goToPreviousSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Check screen size to determine visibility
//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint in Tailwind
//     };

//     handleResize(); // Check on component mount
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="relative bg-black w-full min-h-screen">
//       {/* Existing Code */}
//       <div className="absolute top-2 h-[100px] border border-red-700 w-full">
//         <div className="relative flex justify-center items-center flex-col gap-2">
//           <div
//             className="w-[220px] h-[70px] cursor-pointer"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <img
//               src="/Images/banner/logoWhite.webp"
//               alt="logoWhite"
//               className="w-full h-[100%] object-contain"
//             />
//           </div>

//           <div>
//             <p className="text-white text-xs">
//               Lorem ipsum dolor, sit amet.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Slider Section */}
//       <div className="relative w-full h-full overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 transform ${
//               index === currentSlide
//                 ? "translate-y-0"
//                 : index < currentSlide
//                 ? "-translate-y-full"
//                 : "translate-y-full"
//             }`}
//           >
//             {/* Slide Background Image */}
//             <img
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover absolute"
//             />

//             {/* Slide Content Card */}
//             <div className="absolute top-1/4 right-10 bg-gray-900 bg-opacity-75 text-white p-6 rounded-lg shadow-lg max-w-sm">
//               <h2 className="text-xl font-bold mb-4">{slide.title}</h2>
//               <p className="text-sm mb-4">{slide.description}</p>
//               <button className="bg-red-600 px-4 py-2 rounded text-sm font-medium hover:bg-red-700">
//                 {slide.buttonText}
//               </button>

//               {/* Navigation Arrows */}
//               <div className="flex justify-between items-center mt-4">
//                 <button
//                   onClick={goToPreviousSlide}
//                   className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600"
//                 >
//                   &larr;
//                 </button>
//                 <button
//                   onClick={goToNextSlide}
//                   className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600"
//                 >
//                   &rarr;
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Social Media Icons Section */}
//       <div className="absolute bottom-4 lg:right-16 w-full lg:w-fit">
//         <div className="relative">
//           <ul className="flex items-center justify-center gap-4">
//             <li>
//               <FaMailBulk className="w-8  h-8  text-white" />
//             </li>
//             <li>
//               <FaFacebook className="w-8  h-8  text-white" />
//             </li>
//             <li>
//               <FaInstagram className="w-8  h-8  text-white" />
//             </li>
//           </ul>
//         </div>
//         <div className="vibrate hidden lg:block absolute right-32 bottom-6">
//           <p
//             className="bungeeHead relative text-gray-600 text-xs w-[150px]"
//             style={{ fontWeight: 100 }}
//           >
//             Get In Touch
//           </p>
//           <div className="absolute bottom-6 left-16">
//             <img
//               src="/Images/banner/arrow3.webp"
//               alt=""
//               className="w-full h-[100%] object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;
