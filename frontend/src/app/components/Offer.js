import React from "react";

function Offer() {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 xl:grid-cols-2  gap-8 ">
        <div
          className="py-28 xl:py-40 p-8 "
          style={{ backgroundImage: "url(/Images/Offerbg.webp)" ,backgroundRepeat:"no-repeat",textAlign:"center"}}
        >
            <div className=" md:mx-12 lg:ml-24 lg:mr-32">
          <h3 className="merriHead text-xl xl:text-2xl text-left md:text-center lg:text-left">What We Offer</h3>
          <h3 className="block xl:hidden bungeeHead text-[#cc5f4d] mt-2  text-[30px] xl:text-[40px]   text-left ">
            Empowering Solutions for You
          </h3>
          <h3 className="hidden xl:block bungeeHead text-left text-[#cc5f4d] mt-2  text-[30px] xl:text-[40px]">
            Empowering <br /> Solutions <br /> for You
          </h3>
          <p className="servicePara mt-[40px] text-gray-500 text-sm xl:text-[16px] ">
            To assist companies improve their online visibility, boost
            interaction, and turn leads into devoted clients, Digital Paaji
            provides a thorough digital marketing strategy.
          </p>
          <h3 className="merriHead text-xl xl:text-2xl mt-6 text-[#cc5f4d]  text-left md:text-center lg:text-left">
            Contact us
          </h3>
          </div>
        </div>
        <div className="p-2 md:p-6 ml-6 mr-4 md:mx-12 lg:mx-32 xl:ml-0 xl:mr-32">
        <div className="border-b-8 border-r-8 border-black bg-black ">
          <div className=" bg-[#006E7F] text-white flex flex-col md:flex-row  items-center justify-center gap-3 md:gap-7 p-4 md:p-8 -ml-4 mb ">
            
            <div
              className="Numbers 
                    lg:p-[40px] lg:px-[40px] lg:rounded-full 
                    md:w-[80px] md:h-[60px] md:rounded-full md:p-[6px] md:px-[18px] 
                    w-[60px] h-[60px] rounded-full p-[6px] px-[12px] 
                    flex items-center justify-center text-center lg:text-left"
            >
              1
            </div>
            <div>
              <h3 className="bungeeHead font-semibold text-xl md:text-2xl mb-2 text-center md:text-left">Integrity</h3>
              <p className="servicePara text-sm text-justify md:text-base  ">
                Digital Paaji places a high value on honesty in all dealings,
                following moral standards and accepting accountability for one’s
                deeds.
              </p>
            </div>
          </div>
          </div>

          <div className="border-b-8 border-r-8 border-black bg-black mt-8 ">
          <div className=" bg-[#cc5f4d] text-white flex flex-col md:flex-row  items-center justify-center gap-3 md:gap-7 p-4 md:p-8 -ml-4  ">
            
            <div
                className="Numbers 
                lg:p-[40px] lg:px-[40px] lg:rounded-full 
                md:w-[80px] md:h-[60px] md:rounded-full md:p-[6px] md:px-[18px] 
                w-[60px] h-[60px] rounded-full p-[6px] px-[12px] 
                flex items-center justify-center text-center lg:text-left"
            >
              2
            </div>
            <div>
              <h3 className="bungeeHead font-semibold text-xl md:text-2xl mb-2 text-center md:text-left">Integrity</h3>
              <p className="servicePara text-sm text-justify md:text-base  ">
                Digital Paaji places a high value on honesty in all dealings,
                following moral standards and accepting accountability for one’s
                deeds.
              </p>
            </div>
          </div>
          </div>

          <div className="border-b-8 border-r-8 border-black bg-black mt-8">
          <div className=" bg-yellow-400  text-black flex flex-col md:flex-row  items-center justify-center gap-3 md:gap-7 p-4 md:p-8 -ml-4  ">
            
            <div
  className="Numbers 
  lg:p-[40px] lg:px-[40px] lg:rounded-full 
  md:w-[80px] md:h-[60px] md:rounded-full md:p-[6px] md:px-[18px] 
  w-[60px] h-[60px] rounded-full p-[6px] px-[12px] 
  flex items-center justify-center text-center lg:text-left"
            >
              3
            </div>
            <div>
              <h3 className="bungeeHead font-semibold text-xl md:text-2xl mb-2 text-center md:text-left">Integrity</h3>
              <p className="servicePara text-sm text-justify md:text-base  ">
                Digital Paaji places a high value on honesty in all dealings,
                following moral standards and accepting accountability for one’s
                deeds.
              </p>
            </div>
          </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Offer;
