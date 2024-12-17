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
      <div className="flex  items-center justify-start mx-4 lg:mx-12 h-[140px]">
        <div
          className="flex items-center justify-start  w-[300px]  "
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="w-16 h-auto overflow-hidden"
            onMouseEnter={() => {
              handleMouseEnter("logo2");
            }}
          >
            <img src="/Images/logo.webp" alt="logo" />
          </div>

          <div
            className={`w-52 h-auto transition-all duration-300 ${
              show === "logo2" ? "block" : "hidden"
            }`}
          >
            <img src="/Images/logo2.webp" alt="logo2" />
          </div>
        </div>
        <div className="hidden lg:block p-4 w-[850px]  ml-16">
          <ul className="flex items-center justify-start gap-8  h-20 ">
            <Link
              href={"/"}
              onMouseEnter={() => {
                handleMouseEnter("1");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading font-bungee-inline text-center ${
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
                handleMouseEnter("1");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading font-bungee-inline text-center ${
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
                handleMouseEnter("1");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading font-bungee-inline text-center ${
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
                handleMouseEnter("1");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading font-bungee-inline text-center ${
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
                handleMouseEnter("1");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading font-bungee-inline text-center ${
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
                handleMouseEnter("1");
              }}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-auto"
            >
              <li
                className={`heading font-bungee-inline text-center ${
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
          </ul>
        </div>
        <div className="ml-52">
          <TbMenu4 className="w-16 h-8 text-[#cc5f4d]" />
        </div>
      </div>
    </div>
  );
}
