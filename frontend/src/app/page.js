"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Home from "./components/Home";

export default function Page() {
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    document.title =
      "Digital Paaji - No.1 Digital Marketing Design Development Agency";

    // Dynamically update meta description
    const metaDescription = document.querySelector(
      "meta[name='description']"
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Elevate your brand with Digital Paaji, a top-tier full service digital marketing agency. Call 8699640752 for results-driven creative strategies+solutions!"
      );
    } else {
      const newMetaTag = document.createElement("meta");
      newMetaTag.name = "description";
      newMetaTag.content =
        "Elevate your brand with Digital Paaji, a top-tier full service digital marketing agency. Call 8699640752 for results-driven creative strategies+solutions!";
      document.head.appendChild(newMetaTag);
    }
  }, [isPageVisible]);

  return (
    <>
      <Head>
        <title>Digital Paaji - No.1 Digital Marketing Design Development Agency</title>
        <meta
          name="description"
          content="Elevate your brand with Digital Paaji, a top-tier full service digital marketing agency. Call 8699640752 for results-driven creative strategies+solutions!"
        />
        <meta name="keywords" content="Digital Marketing, Web Design, SEO, Branding" />
        <meta name="author" content="DigitalPaaji" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Digital Paaji - Full Service Global Digital Development Agency"
        />
        <meta
          property="og:description"
          content="Hire full-service global digital marketing agency. Since 2009, Digital Paaji is helping brands to thrive by crafting experience-driven digital solutions!"
        />
        <meta property="og:url" content="https://digitalpaaji.com/" />
        <meta property="og:site_name" content="Digital Paaji" />
        <meta property="article:publisher" content="https://www.facebook.com/digital.paajii" />
        <meta property="article:modified_time" content="2024-11-16T02:30:12+00:00" />
        <meta property="og:image" content="https://digitalpaaji.com/Images/logo2.webp" />
        <meta property="og:image:width" content="998" />
        <meta property="og:image:height" content="285" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Digital Paaji - Full Service Global Digital Development Agency"
        />
        <meta
          name="twitter:description"
          content="Hire full-service global digital marketing agency. Since 2009, Digital Paaji is helping brands to thrive by crafting experience-driven digital solutions!"
        />
        <meta name="twitter:site" content="@digitalpaajii" />
        <meta name="msvalidate.01" content="CB0F41FE302F3ADA231C6ADC185B07A8" />
        <meta
          name="google-site-verification"
          content="kCMB5CA4V0KcyBQYutOJcqafsgpJDV8dvYjZ5g89RtA"
        />
        <link rel="canonical" href="https://digitalpaaji.com/" />
        <link rel="icon" href="/Images/favicon.png" />
        <script
          type="application/ld+json"
          className="saswp-schema-markup-output"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org/",
                "@type": "Organization",
                "@id": "https://digitalpaaji.com#Organization",
                name: "Digital Paaji",
                url: "https://digitalpaaji.com",
                sameAs: [
                  "https://facebook.com/digital.paajii",
                  "https://www.instagram.com/digital.paajii/",
                  "https://x.com/digitalpaajii",
                  "https://www.youtube.com/@digital.paajii",
                  "https://www.pinterest.com/digitalpaaji",
                ],
                logo: {
                  "@type": "ImageObject",
                  url: "https://digitalpaaji.com/Images/logo2.webp",
                  width: "998",
                  height: "285",
                },
              },
            ]),
          }}
        />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}









// "use client";

// import { useEffect, useState } from "react";
// import Head from "next/head";
// import Home from "./components/Home";

// export default function Page() {
//   const [isPageVisible, setIsPageVisible] = useState(true);
//   const [titleIndex, setTitleIndex] = useState(0);

//   const titles = [
//     "DigitalPaaji is the No.1 Digital Marketing, Design, and Development Agency.",
//     "Please come back!",
//     "I am feeling lonely :-(",
//     "Don't you love me anymore?",
//   ];

//   const descriptions = [
//     "DigitalPaaji is the best Digital Marketing, Design, and Development Agency.",
//     "We miss you! Come back to see our latest updates.",
//     "Feeling lonely? Visit us again for amazing content!",
//     "We still love you! Don't leave us alone 😢",
//   ];

//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         setIsPageVisible(false);
//         setTitleIndex(1);
//       } else {
//         setIsPageVisible(true);
//         setTitleIndex(0);
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   useEffect(() => {
//     if (!isPageVisible) {
//       const interval = setInterval(() => {
//         setTitleIndex((prevIndex) =>
//           prevIndex >= titles.length - 1 ? 1 : prevIndex + 1
//         );
//       }, 2000);

//       return () => clearInterval(interval);
//     } else {
//       setTitleIndex(0);
//     }
//   }, [isPageVisible]);

//   useEffect(() => {
//     document.title = titles[titleIndex];

//     // **Dynamically update meta description**
//     const metaDescription = document.querySelector("meta[name='description']");
//     if (metaDescription) {
//       metaDescription.setAttribute("content", descriptions[titleIndex]);
//     } else {
//       // **If meta tag doesn't exist, create one**
//       const newMetaTag = document.createElement("meta");
//       newMetaTag.name = "description";
//       newMetaTag.content = descriptions[titleIndex];
//       document.head.appendChild(newMetaTag);
//     }
//   }, [titleIndex]);

//   return (
//     <>
//       <Head>
//         <title>{titles[titleIndex]}</title>
//         <meta name="description" content={descriptions[0]} />
//         <meta name="keywords" content="Digital Marketing, Web Design, SEO, Branding" />
//         <meta name="author" content="DigitalPaaji" />
//         <link rel="icon" href="/Images/favicon.png" />
//       </Head>
//       <main>
//         <Home />
//       </main>
//     </>
//   );
// }
