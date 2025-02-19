"use client";

import { useEffect, useState } from "react";
import { useTitle } from "react-use";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Image from "next/image";
import Icons from "./components/Icons";

export default function RootLayout({ children }) {
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Simulate loading time
    const loadingTimeout = setTimeout(() => setIsLoading(false), 0); // Set loading to false after 1 second

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPageVisible(false);
        updateFavicon("/Images/smile.png");
      } else {
        setIsPageVisible(true);
        updateFavicon("/Images/favicon.png");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
          <div className="flex items-center justify-center h-screen">
            <Image
              width={200}
              height={200}
              src="/Images/Preloader.gif"
              alt="Loading..."
              className=""
            />
          </div>
        ) : (
          // Show actual content after loading
          <>
            <div className="">
              <Navbar />
            </div>
            {children}
            <Footer />
            <Icons />
          </>
        )}
      </body>
    </html>
  );
}
