"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { TbFlagStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      text: "Digital Paaji helped our business grow tremendously. Their digital marketing strategies are top-notch!",
      image: "/Images/testimonial1.jpg",
    },
    {
      name: "Jane Smith",
      text: "The team at Digital Paaji was exceptional. They understood our needs and delivered beyond expectations.",
      image: "/Images/testimonial2.jpg",
    },
    {
      name: "David Johnson",
      text: "Highly recommend Digital Paaji for anyone looking to boost their online presence and attract more customers.",
      image: "/Images/testimonial3.jpg",
    },
  ];

  return (
    <div className="flex  justify-center gap-8 items-center flex-wrap-reverse  xl:flex-nowrap  mx-4  xl:mx-20">
      <div className="py-10 px-2  w-full xl:w-1/2 bg-cover bg-center rounded-lg relative ">
        <div className="mx-auto w-[300px] h-auto">
          <img
            src="/Images/logo2.webp"
            alt=""
            className="w-full h-auto object-cover "
          />
        </div>
        <div className="flex items-center justify-center gap-2 py-8">
          <div className="servicePara text-sm text-gray-700 ">4.8</div>
          <div className="flex items-center">
            <p className="text-yellow-500">
              <TbStarFilled />
            </p>
            <p className="text-yellow-500">
              <TbStarFilled />
            </p>
            <p className="text-yellow-500">
              <TbStarFilled />
            </p>
            <p className="text-yellow-500">
              <TbStarFilled />
            </p>
            <p className="text-yellow-500">
              <TbStarHalfFilled />
            </p>
          </div>
          <div className="text-sm text-gray-700 ">17 Google Reviews</div>
        </div>
        {/* Swiper Component */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay]}
          className="custom-swiper "
        >
          {/* Testimonial Slides */}
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className=" w-full ">
              <div className="flex flex-col items-start justify-center border border-white p-6 rounded-lg w-[90%] xl:w-[80%] mx-auto ">
                <p className="servicePara mt-4 text-gray-500 text-lg xl:text-base text-justify">
                  {testimonial.text}
                </p>

                {/* Customer Image & Name */}
                <div className="flex items-center gap-2 md:gap-0 justify-between flex-wrap border-t border-white mt-6 w-full p-2">
                  <div className="flex items-center gap-8 md:gap-4 justify-between md:justify-start  mt-2 ">
                    <p
                      src={testimonial.image}
                      alt="Customer"
                      className="rounded-full bg-purple-700 text-white text-lg font-bold px-4 py-2 object-cover"
                    >
                      {testimonial.name.charAt(0)}
                    </p>
                    <div className="">
                      <h3 className="merriHead text-sm md:text-lg text-black">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-gray-400">2 Months Ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mx-auto md:mx-0">
                    <p className="text-yellow-500">
                      <TbStarFilled />
                    </p>
                    <p className="text-yellow-500">
                      <TbStarFilled />
                    </p>
                    <p className="text-yellow-500">
                      <TbStarFilled />
                    </p>
                    <p className="text-yellow-500">
                      <TbStarFilled />
                    </p>
                    <p className="text-yellow-500">
                      <TbStarFilled />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full :w-1/2  xl:ml-16 ">
        <img src="/Images/addOn/tetimonial.webp" alt="" className="mx-auto" />
      </div>
    </div>
  );
}

export default Testimonials;
