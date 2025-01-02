"use client";
import Link from "next/link";
import { useState } from "react";
import { TbMenu4 } from "react-icons/tb";
import Popup from './Popup'

export default function ResponsiveLayout() {
  const [show, setShow] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track popup visibility

  const handleMouseEnter = (elem) => setShow(elem);
  const handleMouseLeave = () => setShow(null);

  // Toggle menu open/close
  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#ede7db] w-full overflow-hidden sticky top-0  z-[9999999]">
      <div className="flex items-center justify-between gap-4  mx-4 xl:mx-12 h-[100px] xl:h-[150px] ">
        <div
          className="relative flex items-center justify-start w-fit xl:w-[300px]"
          onMouseLeave={handleMouseLeave}
        >
          {/* Static Logo */}
          <Link href={'/'}>
          <div
            className="hidden xl:block w-20 h-auto overflow-hidden cursor-pointer"
            onMouseEnter={() => handleMouseEnter("logo2")}
          >
            <img src="/Images/logo.webp" alt="logo" />
          </div>
          </Link>

          {/* Transitioning Logo */}
          <div
            className={`absolute xl:top-2 h-auto object-cover  ${
              show === "logo2"
                ? "translate-x-20 xl:translate-x-20 w-80 xl:w-60"
                : "w-60 xl:w-80  h-auto object-cover block xl:hidden"
            }`}
          >
            {/* <div className={` xl:w-80  h-auto object-cover   ${show === "logo2" ? ' xl:logo2' : ' xl:logoHide'}`}> */}
              <img src="/Images/logo2.webp" alt="logo2" className="w-60 xl:w-80  h-auto object-cover  " />
            {/* </div> */}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden xl:block py-6 -ml-12  ">
          <ul className="flex items-center justify-center gap-12 h-20">
            {/* Link 1 */}
            <Link
              href={"/digital-marketing"}
              onMouseEnter={() => handleMouseEnter("1")}
              onMouseLeave={handleMouseLeave}
              className=" "
            >
              <li
                className={`heading text-[11px] w-24 p-2 font-bungee-inline text-center ${
                  show === "1" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div className={`w-24 h-24  ${show === "1" ? "block" : "hidden"}`}>
                <img
                  src="/Images/navGif/DM.gif"
                  alt="1"
                  className={` flip w-full h-auto ${show === "1" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 2 */}
            <Link
              href={"/social-media-marketing"}
              onMouseEnter={() => handleMouseEnter("2")}
              onMouseLeave={handleMouseLeave}
              className=" "
            >
              <li
                className={`heading text-[11px] w-24  font-bungee-inline text-center ${
                  show === "2" ? "hidden" : "block"
                }`}
              >
                Social Media <br /> Marketing
              </li>
              <div className={`w-24 h-24  ${show === "2" ? "block" : "hidden"}`}>
                <img
                                    src="/Images/navGif/SMM.gif"

                  alt="2"
                  className={`flip w-full h-auto ${show === "2" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 3 */}
            <Link
              href={"/search-engine-optimization"}
              onMouseEnter={() => handleMouseEnter("3")}
              onMouseLeave={handleMouseLeave}
              className=" "
            >
              <li
                className={`heading text-[11px] w-24  font-bungee-inline text-center ${
                  show === "3" ? "hidden" : "block"
                }`}
              >
                Search Engine <br /> Optimization
              </li>
              <div className={`w-24 h-24  ${show === "3" ? "block" : "hidden"}`}>
                <img
                 src="/Images/navGif/SEO.gif"

                  alt="3"
                  className={`flip w-full h-auto ${show === "3" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 4 */}
            <Link
              href={"/video-production"}
              onMouseEnter={() => handleMouseEnter("4")}
              onMouseLeave={handleMouseLeave}
              className=" "
            >
              <li
                className={`heading text-[11px] w-24  font-bungee-inline text-center ${
                  show === "4" ? "hidden" : "block"
                }`}
              >
                Video <br /> Production
              </li>
              <div className={`w-24 h-24  ${show === "4" ? "block" : "hidden"}`}>
                <img
                                    src="/Images/navGif/VP.gif"

                  alt="4"
                  className={`flip w-full h-auto ${show === "4" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 5 */}
            <Link
              href={"/web-development"}
              onMouseEnter={() => handleMouseEnter("5")}
              onMouseLeave={handleMouseLeave}
              className=" "
            >
              <li
                className={`heading text-[11px] w-24  font-bungee-inline text-center ${
                  show === "5" ? "hidden" : "block"
                }`}
              >
                Website <br /> Development
              </li>
              <div className={`w-24 h-24  ${show === "5" ? "block" : "hidden"}`}>
                <img
                                   src="/Images/navGif/WD.gif"

                  alt="5"
                  className={`flip w-full h-auto ${show === "5" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 6 */}
            <Link
              href={"/graphic-designing"}
              onMouseEnter={() => handleMouseEnter("6")}
              onMouseLeave={handleMouseLeave}
              className=" "
            >
              <li
                className={`heading text-[11px] w-24  font-bungee-inline text-center ${
                  show === "6" ? "hidden" : "block"
                }`}
              >
                Graphic <br /> Design
              </li>
              <div className={`w-24 h-24  ${show === "6" ? "block" : "hidden"}`}>
                <img
                  src="/Images/navGif/GD.gif"

                  alt="6"
                  className={`flip w-full h-auto ${show === "6" ? "block" : "hidden"}`}
                />
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
      {isMenuOpen && (
        <Popup handleMenu={handleMenu}/>
      )}
    </div>
  );
}
