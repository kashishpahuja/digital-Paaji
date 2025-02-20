"use client";
import Link from "next/link";
import { useState } from "react";
import { TbMenu4 } from "react-icons/tb";
import Popup from "./Popup";

export default function ResponsiveLayout() {
  const [show, setShow] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track popup visibility

  const handleMouseEnter = (elem) => setShow(elem);
  const handleMouseLeave = () => setShow(null);

  // Toggle menu open/close
  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseHover = () => {
    setIsHovering(true);
  };

  const handleMouseHoverLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className="bg-[#ede7db] w-full overflow-hidden sticky top-0  z-[9999999]">
      <div className="flex items-center justify-between gap-4  mx-4 xl:mx-12 h-[100px] xl:h-[130px] ">
        {/* <div
          className=" relative flex items-center justify-start w-fit xl:w-[300px]"
          onMouseLeave={handleMouseLeave}
        >
          <Link href={'/'} className="">
          <div
            className="hidden xl:block w-20 h-auto overflow-hidden cursor-pointer"
            onMouseEnter={() => handleMouseEnter("logo2")}
          >
            <img src="/Images/logo.webp" alt="logo" />
          </div>
          </Link>

  

      
        </div> */}
        <div
          className="relative flex items-center justify-start w-fit xl:w-[300px]"
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseHoverLeave}
        >
          <Link href={"/"}>
            <div
              className="block xl:hidden w-60 h-auto overflow-hidden cursor-pointer"
              onMouseEnter={() => handleMouseEnter("logo2")}
            >
              <img src="/Images/logo2.webp" alt="logo" />
            </div>
          </Link>
          {/* xl screen Logo */}
          <Link href={"/"} className="">
            <div
              className="hidden xl:block w-16 h-auto overflow-hidden cursor-pointer transition-all duration-400"
              onMouseEnter={() => handleMouseHover("logo2")}
            >
              <img src="/Images/logo.webp" alt="logo" />
            </div>
          </Link>

          {/* Animated 2D Logo */}
          {/* <div
            className={` hidden xl:flex items-center justify-center overflow-hidden transition-all duration-1000 ease-in-out -ml-1 ${
              isHovering
                ? " transition-all duration-1000 ease-in-out w-[12rem]"
                : "w-[6rem] opacity-0"
            }`}
          > */}
          <div
            className={`hidden xl:flex items-center justify-center overflow-hidden transition-[width] duration-1000 ease-in-out h-[4rem] ${
              isHovering ? "w-[12rem]" : "w-[0rem]"
            }`}
          >
            <img
              src="/Images/logo2.webp"
              alt="logo2"
              className=" w-full h-[100%]"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden xl:block py-6 -ml-12  ">
          <ul className="flex items-center justify-center gap-8 h-20">
            {/* Link 1 */}
            <Link
  href={"/digital-marketing"}
  onMouseEnter={() => handleMouseEnter("1")}
  onMouseLeave={handleMouseLeave}
  className="relative block w-28 h-24 perspective-1000 "
>
  {/* Text - Moves Up and Hides */}
  <li
    className={`heading  text-[12px] w-28 p-2 font-bungee-inline text-center absolute left-0 flex items-center justify-center transition-all duration-500`}
    style={{
      top: "50%",
      transform:
        show === "1"
          ? "translate(-50%, -50%) rotateX(90deg)"
          : "translate(-50%, -50%) rotateX(0deg)",
      left: "50%",
      opacity: show === "1" ? 0 : 1,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    Digital <br /> Marketing
  </li>

  {/* GIF - Moves Up and Appears */}
  <div
    className={`absolute top-0 left-0 w-24 h-20 transition-all duration-500 `}
    style={{
      top: "50%",
      left: "50%",
      transform:
        show === "1"
          ? "translate(-50%, -50%) rotateX(0deg)"
          : "translate(-50%, 0%) rotateX(-90deg)",
      opacity: show === "1" ? 1 : 0,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    <img src="/Images/navGif/DM.gif" alt="1" className="w-full h-auto" />
  </div>
</Link>


            {/* <Link
              href={"/digital-marketing"}
              onMouseEnter={() => handleMouseEnter("1")}
              onMouseLeave={handleMouseLeave}
              className=" "
            >
              <li
                className={`heading text-[12px] w-28 p-2 font-bungee-inline text-center ${
                  show === "1" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div
                className={`w-28 h-24  ${show === "1" ? "block" : "hidden"}`}
              >
                <img
                  src="/Images/navGif/DM.gif"
                  alt="1"
                  className={` flip w-full h-auto ${
                    show === "1" ? "block" : "hidden"
                  }`}
                />
              </div>
            </Link> */}
            {/* Link 2 */}
            <Link
  href={"/social-media-marketing"}
  onMouseEnter={() => handleMouseEnter("2")}
  onMouseLeave={handleMouseLeave}
  className="relative block w-28 h-24 perspective-1000 "
>
  {/* Text - Moves Up and Hides */}
  <li
    className={`heading  text-[12px] w-28 p-2 font-bungee-inline text-center absolute left-0 flex items-center justify-center transition-all duration-500`}
    style={{
      top: "50%",
      transform:
        show === "2"
          ? "translate(-50%, -50%) rotateX(90deg)"
          : "translate(-50%, -50%) rotateX(0deg)",
      left: "50%",
      opacity: show === "2" ? 0 : 1,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    Social Media <br /> Marketing
  </li>

  {/* GIF - Moves Up and Appears */}
  <div
    className={`absolute top-0 left-0 w-24 h-20 transition-all duration-500 `}
    style={{
      top: "50%",
      left: "50%",
      transform:
        show === "2"
          ? "translate(-50%, -50%) rotateX(0deg)"
          : "translate(-50%, 0%) rotateX(-90deg)",
      opacity: show === "2" ? 1 : 0,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    <img src="/Images/navGif/SMM.gif" alt="2" className="w-full h-auto" />
  </div>
</Link>

            {/* Link 3 */}
            <Link
  href={"/search-engine-optimization"}
  onMouseEnter={() => handleMouseEnter("3")}
  onMouseLeave={handleMouseLeave}
  className="relative block w-28 h-24 perspective-1000 "
>
  {/* Text - Moves Up and Hides */}
  <li
    className={`heading  text-[12px] w-32  p-2 font-bungee-inline text-center absolute left-0 flex items-center justify-center transition-all duration-500`}
    style={{
      top: "50%",
      transform:
        show === "3"
          ? "translate(-50%, -50%) rotateX(90deg)"
          : "translate(-50%, -50%) rotateX(0deg)",
      left: "50%",
      opacity: show === "3" ? 0 : 1,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    Search Engine <br /> Optimization
  </li>

  {/* GIF - Moves Up and Appears */}
  <div
    className={`absolute top-0 left-0 w-24 h-20 transition-all duration-500 `}
    style={{
      top: "50%",
      left: "50%",
      transform:
        show === "3"
          ? "translate(-50%, -50%) rotateX(0deg)"
          : "translate(-50%, 0%) rotateX(-90deg)",
      opacity: show === "3" ? 1 : 0,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    <img src="/Images/navGif/SEO.gif" alt="3" className="w-full h-auto" />
  </div>
</Link>

            {/* Link 4 */}
            <Link
  href={"/video-production"}
  onMouseEnter={() => handleMouseEnter("4")}
  onMouseLeave={handleMouseLeave}
  className="relative block w-28 h-24 perspective-1000 "
>
  {/* Text - Moves Up and Hides */}
  <li
    className={`heading  text-[12px] w-28 p-2 font-bungee-inline text-center absolute left-0 flex items-center justify-center transition-all duration-500`}
    style={{
      top: "50%",
      transform:
        show === "4"
          ? "translate(-50%, -50%) rotateX(90deg)"
          : "translate(-50%, -50%) rotateX(0deg)",
      left: "50%",
      opacity: show === "4" ? 0 : 1,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    Video <br /> Production
  </li>

  {/* GIF - Moves Up and Appears */}
  <div
    className={`absolute top-0 left-0 w-24 h-20 transition-all duration-500 `}
    style={{
      top: "50%",
      left: "50%",
      transform:
        show === "4"
          ? "translate(-50%, -50%) rotateX(0deg)"
          : "translate(-50%, 0%) rotateX(-90deg)",
      opacity: show === "4" ? 1 : 0,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    <img src="/Images/navGif/VP.gif" alt="4" className="w-full h-auto" />
  </div>
</Link>

            {/* Link 5 */}
            <Link
  href={"/web-development"}
  onMouseEnter={() => handleMouseEnter("5")}
  onMouseLeave={handleMouseLeave}
  className="relative block w-28 h-24 perspective-1000 "
>
  {/* Text - Moves Up and Hides */}
  <li
    className={`heading  text-[12px] w-28 p-2 font-bungee-inline text-center absolute left-0 flex items-center justify-center transition-all duration-500`}
    style={{
      top: "50%",
      transform:
        show === "5"
          ? "translate(-50%, -50%) rotateX(90deg)"
          : "translate(-50%, -50%) rotateX(0deg)",
      left: "50%",
      opacity: show === "5" ? 0 : 1,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    Website <br /> Development
  </li>

  {/* GIF - Moves Up and Appears */}
  <div
    className={`absolute top-0 left-0 w-24 h-20 transition-all duration-500 `}
    style={{
      top: "50%",
      left: "50%",
      transform:
        show === "5"
          ? "translate(-50%, -50%) rotateX(0deg)"
          : "translate(-50%, 0%) rotateX(-90deg)",
      opacity: show === "5" ? 1 : 0,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    <img src="/Images/navGif/WD.gif" alt="5" className="w-full h-auto" />
  </div>
</Link>

            {/* Link 6 */}
            <Link
  href={"/graphic-designing"}
  onMouseEnter={() => handleMouseEnter("6")}
  onMouseLeave={handleMouseLeave}
  className="relative block w-28 h-24 perspective-1000 "
>
  {/* Text - Moves Up and Hides */}
  <li
    className={`heading  text-[12px] w-28 p-2 font-bungee-inline text-center absolute left-0 flex items-center justify-center transition-all duration-500`}
    style={{
      top: "50%",
      transform:
        show === "6"
          ? "translate(-50%, -50%) rotateX(90deg)"
          : "translate(-50%, -50%) rotateX(0deg)",
      left: "50%",
      opacity: show === "6" ? 0 : 1,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    Graphic <br /> Design
  </li>

  {/* GIF - Moves Up and Appears */}
  <div
    className={`absolute top-0 left-0 w-24 h-20 transition-all duration-500 `}
    style={{
      top: "50%",
      left: "50%",
      transform:
        show === "6"
          ? "translate(-50%, -50%) rotateX(0deg)"
          : "translate(-50%, 0%) rotateX(-90deg)",
      opacity: show === "6" ? 1 : 0,
      backfaceVisibility: "hidden",
      transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    }}
  >
    <img src="/Images/navGif/GD.gif" alt="6" className="w-full h-auto" />
  </div>
</Link>

          </ul>
        </div>

        {/* Menu Icon */}
        <div className="xl:ml-20">
          <TbMenu4
            className="w-16 h-8 text-[#cc5f4d] cursor-pointer"
            onClick={handleMenu} // Toggle menu on click
          />
        </div>
      </div>

      {/* Popup Menu - visible when isMenuOpen is true */}
      {isMenuOpen && <Popup handleMenu={handleMenu} />}
    </div>
  );
}
