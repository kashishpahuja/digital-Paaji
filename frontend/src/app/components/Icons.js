import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowUp, FaTimes, FaWhatsapp } from "react-icons/fa";

function Icons() {
  const [showModal, setShowModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Floating Icons */}
      <div className="flex flex-col items-center justify-center gap-2 fixed bottom-4 right-4">
        {/* Scroll to Top Icon */}
        <div
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="cursor-pointer text-white flex items-center justify-center"
        >
          <FaArrowUp className="w-9 h-9 p-2 bg-[#cc5f4d] text-white rounded-full" />
        </div>

        {/* WhatsApp Icon with Modal Trigger */}
        <div
          onMouseEnter={() => setShowModal(true)}
          // onMouseLeave={() => setShowModal(false)}
          className="relative"
        >
          <Link
            href={"/"}
            //  href="https://wa.me/6280317308"
            // className="text-white flex items-center justify-center"
          >
            <Image
              src={"/Images/services/whIcon.gif"}
              width={200}
              height={200}
              alt="WhatsApp"
              className="w-12 h-12 cursor-pointer"
            />
          </Link>

          {/* Modal Popup */}
          {showModal && (
            <div
              className="absolute bottom-4 right-14 bg-white shadow-lg rounded-lg w-52 lg:w-[300px]  text-black z-[9999]"
              style={{ backgroundImage: "url(/Images/bg.webp)" }}
              onMouseLeave={() => setShowModal(false)}
            >
              <div className="flex items-end justify-start gap-2 p-4 rounded-t-lg bg-[#48ac48]">
                <div className="w-fit h-12">
                  <img
                    src="/Images/favicon.png"
                    alt=""
                    className="w-full h-[100%] object-contain rounded-full "
                  />
                </div>
                <div className="w-fit h-14 ">
                  <img
                    src="/Images/banner/logoWhite.webp"
                    alt=""
                    className="w-full h-[100%] object-contain "
                  />
                </div>
              </div>
              <div className="py-4">
              <h3 className=" text-md text-gray-800 m-2 p-2 bg-[#eeede5] w-fit rounded-b-2xl rounded-r-2xl ">
                  Hi There  <br />
                  How Can I Help You?
                </h3>
              <Link className="flex items-center justify-center mt-6" href="https://wa.me/6280317308" >
                <h3 className="merriHead flex items-center gap-2 text-md text-white  bg-[#48ac48] px-6 py-3 w-fit  rounded-3xl ">
                 <FaWhatsapp className="w-6 h-6"/> Chat With Us
                </h3>
              </Link>
              </div>
          
              {/* <div className="border-t border-gray-300 py-2">
                <h3 className="merriHead text-sm text-[#cc5f4d] text-center">
                  In a hurry? Call Us at <br />{" "}
                  <Link href={"tel:8699640752"} className="">
                    +91 8699 640 752
                  </Link>
                </h3>
              </div> */}

              {/* <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-lg font-semibold">Chat with us</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-black"
                >
                  <FaTimes />
                </button>
              </div>
              <p className="text-sm mt-2">
                Need help? Click below to start a chat.
              </p>
              <Link
                // href="https://wa.me/6280317308"
                href={"/"}
                className="mt-3 inline-block bg-green-500 text-white py-2 px-4 rounded-lg w-full text-center"
              >
                Start Chat
              </Link> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Icons;

// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react'
// import { FaArrowUp } from "react-icons/fa";

// function Icons() {
//       const scrollToTop = () => {
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth", // Add smooth scrolling
//         });
//       };
//   return (
//     <div>
//         {/* Floating Contact Icon */}
//         <div className=" flex flex-col items-center justify-center gap-2 fixed  bottom-4 right-4 ">
//             <div

//           onClick={(e) => {
//             e.preventDefault(); // Prevent default link behavior
//             scrollToTop(); // Call scrollToTop function
//           }}
//           className="cursor-pointer text-white flex items-center justify-center "
//         >
//           {/* <Image
//             // src={"/Images/services/arrowUp.webp"}
//             src={"/Images/services/arrows.webp"}

//             width={200}
//             height={200}
//             alt="Scroll to top"
//             className="w-10 h-10"
//           /> */}
//           <FaArrowUp className="w-9 h-9 p-2 bg-[#cc5f4d] text-white rounded-full"/>
//         </div>

//             <Link
//               href="https://wa.me/6280317308"
//               className=" text-white  flex items-center justify-center  "
//             >
//               <Image
//                 src={"/Images/services/whIcon.gif"}
//                 // src={"/Images/services/whIcon.webp"}

//                 width={200}
//                 height={200}
//                 alt=""
//                 className="w-12 h-w-12"

//               />
//             </Link>
//             </div>
//     </div>
//   )
// }

// export default Icons
