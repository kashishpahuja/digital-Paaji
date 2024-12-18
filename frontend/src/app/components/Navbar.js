"use client";
import Link from "next/link";
import { useState } from "react";
import { TbMenu4 } from "react-icons/tb";

export default function ResponsiveLayout() {
  const [show, setShow] = useState(null);
  const handleMouseEnter = (elem) => setShow(elem);
  const handleMouseLeave = () => setShow(null);
  return (
    <div
      // style={{
      //   background:
      //     "linear-gradient(135deg, rgb(254,205,165) 0%, rgb(254,45,45) 50%, rgb(107,0,62) 100%)",
      // }}
      className=" bg-[#ede7da]"
    >
      <div className="flex  items-center justify-between mx-4 xl:mx-20 h-[120px] xl:h-[180px]">
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
    className={`absolute top-2 left-0 xl:left-0 h-auto object-cover transition-transform duration-700 ease-in-out ${
      show === "logo2" ? "translate-x-20 xl:translate-x-20 w-80 xl:w-60" : "translate-x-[10%] xl:w-0"
    }`}
  >
    <img src="/Images/logo2.webp" alt="logo2" />
  </div>
</div>


        <div className="hidden xl:block p-4 -ml-20">
          <ul className="flex items-center justify-start gap-20  h-20 ">
            <Link
              href={"/"}
              onMouseEnter={() => {
                handleMouseEnter("1");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[16px] font-bungee-inline text-center ${
                  show === "1" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div
                className={`w-20 h-20  ${show === "1" ? "block" : "hidden"}`}
              >
                <img
                  src="/Images/1.webp"
                  alt="1"
                  className={`w-full h-auto  ${
                    show === "1" ? "block" : "hidden"
                  }`}
                />
              </div>
            </Link>
            <Link
              href={"/"}
              onMouseEnter={() => {
                handleMouseEnter("2");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[16px] font-bungee-inline text-center ${
                  show === "2" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div
                className={`w-20 h-20  ${show === "2" ? "block" : "hidden"}`}
              >
                <img
                  src="/Images/2.webp"
                  alt="2"
                  className={`w-full h-auto  ${
                    show === "2" ? "block" : "hidden"
                  }`}
                />
              </div>
            </Link>
            <Link
              href={"/"}
              onMouseEnter={() => {
                handleMouseEnter("3");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[16px] font-bungee-inline text-center ${
                  show === "3" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div
                className={`w-20 h-20  ${show === "3" ? "block" : "hidden"}`}
              >
                <img
                  src="/Images/3.webp"
                  alt="3"
                  className={`w-full h-auto  ${
                    show === "3" ? "block" : "hidden"
                  }`}
                />
              </div>
            </Link>
            <Link
              href={"/"}
              onMouseEnter={() => {
                handleMouseEnter("4");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[16px] font-bungee-inline text-center ${
                  show === "4" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div
                className={`w-20 h-20  ${show === "4" ? "block" : "hidden"}`}
              >
                <img
                  src="/Images/4.webp"
                  alt="4"
                  className={`w-full h-auto  ${
                    show === "4" ? "block" : "hidden"
                  }`}
                />
              </div>
            </Link>
            <Link
              href={"/"}
              onMouseEnter={() => {
                handleMouseEnter("5");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[16px] font-bungee-inline text-center ${
                  show === "5" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div
                className={`w-20 h-20  ${show === "5" ? "block" : "hidden"}`}
              >
                <img
                  src="/Images/5.webp"
                  alt="5"
                  className={`w-full h-auto  ${
                    show === "5" ? "block" : "hidden"
                  }`}
                />
              </div>
            </Link>
            <Link
              href={"/"}
              onMouseEnter={() => {
                handleMouseEnter("6");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading text-[16px] font-bungee-inline text-center ${
                  show === "6" ? "hidden" : "block"
                }`}
              >
                Digital <br /> Marketing
              </li>
              <div
                className={`w-20 h-20  ${show === "6" ? "block" : "hidden"}`}
              >
                <img
                  src="/Images/6.webp"
                  alt="6"
                  className={`w-full h-auto  ${
                    show === "6" ? "block" : "hidden"
                  }`}
                />
              </div>
            </Link>
          </ul>
        </div>
        <div className="xl:ml-20">
          <TbMenu4 className="w-16 h-8 text-[#cc5f4d]" />
        </div>
      </div>
    </div>
  );
}
