"use client";

import { useEffect, useState } from "react";
import { useTitle } from "react-use";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isPageVisible, setIsPageVisible] = useState(true);

  // Dynamic titles
  const titles = [
    "DigitalPaaji - No.1 Digital Marketing",
    "Please come back!",
    "I am feeling lonely :-(",
    "Don't you love me anymore?",
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useTitle(titles[titleIndex]); // Set initial title

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User has left the page
        setIsPageVisible(false);
        setTitleIndex(1); // Change to "Please come back!"
        updateFavicon("/favicon-inactive.ico"); // Set alternate favicon
      } else {
        // User has returned
        setIsPageVisible(true);
        setTitleIndex(0); // Change to default title
        updateFavicon("/favicon.ico"); // Set default favicon
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!isPageVisible) {
      let interval = setInterval(() => {
        setTitleIndex((prevIndex) =>
          prevIndex >= titles.length - 1 ? 1 : prevIndex + 1
        );
      }, 2000); // Rotate titles every 2 seconds when the page is hidden
      return () => clearInterval(interval);
    }
  }, [isPageVisible]);

  const updateFavicon = (href) => {
    const existingLink = document.querySelector("link[rel='icon']");
    if (existingLink) {
      existingLink.href = href; // Update existing favicon
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = href;
      document.head.appendChild(newLink); // Add new favicon
    }
  };

  // Initial favicon setup
  useEffect(() => {
    updateFavicon("/favicon.ico");
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
