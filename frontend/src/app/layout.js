"use client";

import { useEffect, useState } from "react";
import { useTitle } from "react-use";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { IoChatbubbleEllipses } from "react-icons/io5";

import Icons from "./components/Icons";

export default function RootLayout({ children }) {
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const titles = [
    "DigitalPaaji - No.1 Digital Marketing Design Development Agency",
    "Please come back!",
    "I am feeling lonely :-(",
    "Don't you love me anymore?",
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useTitle(titles[titleIndex]); // Set initial title

  useEffect(() => {
    // Simulate loading time
    const loadingTimeout = setTimeout(() => setIsLoading(false), 0); // Set loading to false after 1 second

    return () => clearTimeout(loadingTimeout);
  }, []);


  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPageVisible(false);
        setTitleIndex(1);
        updateFavicon("/Images/smile.png");
      } else {
        setIsPageVisible(true);
        setTitleIndex(0);
        updateFavicon("/Images/favicon.png");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!isPageVisible) {
      const interval = setInterval(() => {
        setTitleIndex((prevIndex) =>
          prevIndex >= titles.length - 1 ? 1 : prevIndex + 1
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPageVisible]);

  const updateFavicon = (href) => {
    const existingLink = document.querySelector("link[rel='icon']");
    if (existingLink) {
      existingLink.href = href;
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = href;
      document.head.appendChild(newLink);
    }
  };

  useEffect(() => {
    updateFavicon("/Images/favicon.png");
  }, []);

  return (
    <html lang="en">
      <body>
        {isLoading ? (
          // Show loading GIF
          <div className="flex items-center justify-center h-screen ">
            <Image width={200} height={200} src="/Images/Preloader.gif" alt="Loading..." className="" />
          </div>
        ) : (
          // Show actual content after loading
          <>
            <div className="">
              <Navbar />
            </div>
            {children}
            <Footer />
          <Icons/>
          </>
        )}
      </body>
    </html>
  );
}
