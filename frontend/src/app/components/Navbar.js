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
    <div className="bg-[#ede7db]">
      <div className="flex items-center justify-between mx-4 xl:mx-20 h-[120px] xl:h-[180px]">
        <div
          className="relative flex items-center justify-start md:w-[500px] xl:w-[300px]"
          onMouseLeave={handleMouseLeave}
        >
          {/* Static Logo */}
          <div
            className="hidden xl:block w-20 h-auto overflow-hidden cursor-pointer"
            onMouseEnter={() => handleMouseEnter("logo2")}
          >
            <img src="/Images/logo.webp" alt="logo" />
          </div>

          {/* Transitioning Logo */}
          <div
            className={`absolute xl:top-2 left-0 xl:left-0 h-auto object-cover transition-transform duration-700 ease-in-out ${
              show === "logo2"
                ? "translate-x-20 xl:translate-x-20 w-80 xl:w-60"
                : "translate-x-[10%] w-72 h-auto object-cover xl:w-0"
            }`}
          >
            <img src="/Images/logo2.webp" alt="logo2" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden xl:block p-4 -ml-20">
          <ul className="flex items-center justify-start gap-8 h-20">
            {/* Link 1 */}
            <Link
              href={"/"}
              onMouseEnter={() => handleMouseEnter("1")}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center ${
                  show === "1" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div className={`w-20 h-20  ${show === "1" ? "block" : "hidden"}`}>
                <img
                  src="/Images/1.webp"
                  alt="1"
                  className={`w-full h-auto ${show === "1" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 2 */}
            <Link
              href={"/"}
              onMouseEnter={() => handleMouseEnter("2")}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center ${
                  show === "2" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div className={`w-20 h-20  ${show === "2" ? "block" : "hidden"}`}>
                <img
                  src="/Images/2.webp"
                  alt="2"
                  className={`w-full h-auto ${show === "2" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 3 */}
            <Link
              href={"/"}
              onMouseEnter={() => handleMouseEnter("3")}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center ${
                  show === "3" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div className={`w-20 h-20  ${show === "3" ? "block" : "hidden"}`}>
                <img
                  src="/Images/3.webp"
                  alt="3"
                  className={`w-full h-auto ${show === "3" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 4 */}
            <Link
              href={"/"}
              onMouseEnter={() => handleMouseEnter("4")}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center ${
                  show === "4" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div className={`w-20 h-20  ${show === "4" ? "block" : "hidden"}`}>
                <img
                  src="/Images/4.webp"
                  alt="4"
                  className={`w-full h-auto ${show === "4" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 5 */}
            <Link
              href={"/"}
              onMouseEnter={() => handleMouseEnter("5")}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center ${
                  show === "5" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div className={`w-20 h-20  ${show === "5" ? "block" : "hidden"}`}>
                <img
                  src="/Images/5.webp"
                  alt="5"
                  className={`w-full h-auto ${show === "5" ? "block" : "hidden"}`}
                />
              </div>
            </Link>
            {/* Link 6 */}
            <Link
              href={"/"}
              onMouseEnter={() => handleMouseEnter("6")}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[12px] font-bungee-inline text-center ${
                  show === "6" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div className={`w-20 h-20  ${show === "6" ? "block" : "hidden"}`}>
                <img
                  src="/Images/6.webp"
                  alt="6"
                  className={`w-full h-auto ${show === "6" ? "block" : "hidden"}`}
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
