import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function Icons() {
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Add smooth scrolling
        });
      };
  return (
    <div>
        {/* Floating Contact Icon */}
        <div className=" flex flex-col items-center justify-center gap-2 fixed  bottom-4 right-4 ">
            <div
       
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            scrollToTop(); // Call scrollToTop function
          }}
          className="cursor-pointer text-white flex items-center justify-center "
        >
          {/* <Image
            // src={"/Images/services/arrowUp.webp"} 
            src={"/Images/services/arrows.webp"} 

            width={200}
            height={200}
            alt="Scroll to top"
            className="w-10 h-10"
          /> */}
          <FaArrowUp className="w-9 h-9 p-2 bg-[#cc5f4d] text-white rounded-full"/>
        </div>
            <Link
              href="https://wa.me/6280317308"
              className=" text-white  flex items-center justify-center  "
            >
              <Image
                src={"/Images/services/whIcon.gif"}
                // src={"/Images/services/whIcon.webp"}


                width={200}
                height={200}
                alt=""
                className="w-12 h-w-12"

              />
            </Link>
            </div>
    </div>
  )
}

export default Icons
