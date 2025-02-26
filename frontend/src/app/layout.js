"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Image from "next/image";
import Icons from "./components/Icons";
import Head from "next/head";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
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

    updateFavicon("/Images/favicon.png");
  }, []);

  return (
    <html lang="en">
      <Head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1034790355108758');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1034790355108758&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R5S5E7J20L"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R5S5E7J20L');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KDZX87VQ');
            `,
          }}
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDZX87VQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <Image
              width={200}
              height={200}
              src="/Images/Preloader.gif"
              alt="Loading..."
            />
          </div>
        ) : (
          <>
            <div>
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








// "use client";

// import { useEffect, useState } from "react";
// import { useTitle } from "react-use";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "./globals.css";
// import Image from "next/image";
// import Icons from "./components/Icons";

// export default function RootLayout({ children }) {
//   const [isPageVisible, setIsPageVisible] = useState(true);
//   const [isLoading, setIsLoading] = useState(true); // State to track loading

//   useEffect(() => {
//     // Simulate loading time
//     const loadingTimeout = setTimeout(() => setIsLoading(false), 0); // Set loading to false after 1 second

//     return () => clearTimeout(loadingTimeout);
//   }, []);

//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         setIsPageVisible(false);
//         updateFavicon("/Images/smile.png");
//       } else {
//         setIsPageVisible(true);
//         updateFavicon("/Images/favicon.png");
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   const updateFavicon = (href) => {
//     const existingLink = document.querySelector("link[rel='icon']");
//     if (existingLink) {
//       existingLink.href = href;
//     } else {
//       const newLink = document.createElement("link");
//       newLink.rel = "icon";
//       newLink.href = href;
//       document.head.appendChild(newLink);
//     }
//   };

//   useEffect(() => {
//     updateFavicon("/Images/favicon.png");
//   }, []);

//   return (
//     <html lang="en">
//       <body>
//         {isLoading ? (
//           // Show loading GIF
//           <div className="flex items-center justify-center h-screen">
//             <Image
//               width={200}
//               height={200}
//               src="/Images/Preloader.gif"
//               alt="Loading..."
//               className=""
//             />
//           </div>
//         ) : (
//           // Show actual content after loading
//           <>
//             <div className="">
//               <Navbar />
//             </div>
//             {children}
//             <Footer />
//             <Icons />
//           </>
//         )}
//       </body>
//     </html>
//   );
// }
