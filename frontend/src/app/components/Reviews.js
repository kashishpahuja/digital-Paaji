"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { TbStarFilled } from "react-icons/tb";

function Testimonials() {
  // State for reviews and ratings
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(4.8);
  const [totalReviews, setTotalReviews] = useState(17);

  // Fetch reviews from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/reviews/");
        const data = await response.json();

        if (Array.isArray(data)) {
          setReviews(data);

          // Calculate total rating and average rating
          const totalRating = data.reduce((sum, review) => sum + review.rating, 0);
          const totalReviewsCount = data.length;

          // setAverageRating((totalRating / totalReviewsCount).toFixed(1)); // Average with 1 decimal
          // setTotalReviews(totalReviewsCount);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="flex justify-center gap-8 items-center flex-wrap-reverse xl:flex-nowrap mx-4 xl:mx-20">
      {/* Left Section */}
      <div className="py-10 px-2 w-full xl:w-1/2 bg-cover bg-center rounded-lg relative">
        <div className="mx-auto w-[300px] h-auto">
          <img
            src="/Images/logo2.webp"
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-2 py-8">
          <div className="servicePara text-sm text-gray-700">
            {averageRating}

          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <p
                className={`${
                  i < Math.round(averageRating) ? "text-yellow-500" : "text-gray-300"
                }`}
                key={i}
              >
                <TbStarFilled />
              </p>
            ))}
          </div>
          <div className="text-sm text-gray-700">{totalReviews} Google Reviews</div>
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
          className="custom-swiper"
        >
          {/* Render Reviews from API */}
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="flex flex-col items-start justify-center border border-white p-6 rounded-lg w-[90%] xl:w-[80%] mx-auto">
                  <p className="servicePara mt-4 text-black text-sm xl:text-base text-justify">
                    {review.text}
                  </p>

                  {/* Customer Image & Name */}
                  <div className="flex items-center gap-2 md:gap-0 justify-between flex-wrap border-t border-white mt-6 w-full p-2">
                    <div className="flex items-center gap-8 md:gap-4 justify-between md:justify-start mt-2">
                      <p
                        alt="Customer"
                        className="rounded-full bg-purple-700 text-white text-lg font-bold px-4 py-2 object-cover"
                      >
                        {review.author_name.charAt(0)}
                      </p>
                      <div>
                        <h3 className="merriHead text-sm md:text-md text-gray-500">
                          {review.author_name}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {review.relative_time_description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mx-auto md:mx-0">
                      {[...Array(review.rating)].map((_, i) => (
                        <p className="text-yellow-500" key={i}>
                          <TbStarFilled />
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center text-gray-500 py-6">
              No reviews available at the moment.
            </div>
          )}
        </Swiper>
      </div>

      {/* Right Section */}
      <div className="w-full xl:w-1/2 xl:ml-16">
        <img src="/Images/addOn/tetimonial.webp" alt="" className="mx-auto" />
      </div>
    </div>
  );
}

export default Testimonials;
