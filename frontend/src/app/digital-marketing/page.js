"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Home from "../components/DM";

export default function Page() {
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "DigitalPaaji is the No.1 Digital Marketing, Design, and Development Agency.",
    "Please come back!",
    "I am feeling lonely :-(",
    "Don't you love me anymore?",
  ];

  const descriptions = [
    "DigitalPaaji is the best Digital Marketing, Design, and Development Agency.",
    "We miss you! Come back to see our latest updates.",
    "Feeling lonely? Visit us again for amazing content!",
    "We still love you! Don't leave us alone 😢",
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPageVisible(false);
        setTitleIndex(1);
      } else {
        setIsPageVisible(true);
        setTitleIndex(0);
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
    } else {
      setTitleIndex(0);
    }
  }, [isPageVisible]);

  useEffect(() => {
    document.title = titles[titleIndex];

    // **Dynamically update meta description**
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptions[titleIndex]);
    } else {
      // **If meta tag doesn't exist, create one**
      const newMetaTag = document.createElement("meta");
      newMetaTag.name = "description";
      newMetaTag.content = descriptions[titleIndex];
      document.head.appendChild(newMetaTag);
    }
  }, [titleIndex]);

  return (
    <>
      <Head>
        <title>{titles[titleIndex]}</title>
        <meta name="description" content={descriptions[0]} />
        <meta name="keywords" content="Digital Marketing, Web Design, SEO, Branding" />
        <meta name="author" content="DigitalPaaji" />
        <link rel="icon" href="/Images/favicon.png" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
