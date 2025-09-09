"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ServiceCityContent({ serviceName, cityName }) {
  const [selectedBlog, setSelectedBlog] = useState(0);
  const [selectedService, setSelectedService] = useState('Car Wash');
    const [openIndexLeft, setOpenIndexLeft] = useState(null);
    const [openIndexRight, setOpenIndexRight] = useState(null);
  
    const toggleDropdown = (index, side) => {
      if (side === "left") {
        setOpenIndexLeft(openIndexLeft === index ? null : index);
      } else {
        setOpenIndexRight(openIndexRight === index ? null : index);
      }
    };


  const blogs = [

      {
        id: 1,
        title: "Digital Marketing Company in Chandigarh | Payment After Results",
        images: ["/Images/services/gdWhy.png", "/Images/services/gdWhy.png"],
        date: "April 29, 2025",
        tag: "Car Wash",
        description:
          "Digital Marketing Company in Chandigarh – Solutions 1313 is among the full-scale top Digital Marketing Companies in Chandigarh. Our popularity lies in our uniqueness in utilizing years of learning and execution to provide you with the most reliable solutions. The catch in our performance lies in the blend of creativity with informative and effective production of output. Solutions 1313 is not only India based Company with foundations in Chandigarh and Patiala but also with a massive global reach. Our clients have branches in Surrey, Canada, Melbourne and Australia. At Solutions 1313, we believe in a holistic marketing strategy. This means we just don’t focus on one area of internet marketing but all aspects of promotion. We have experts in SEO, PPC, content writing, email marketing, Web Designing and development to ensure that every aspect of your digital marketing strategy is running smoothly with professional management.  Being among the Top 10 Digital Marketing Companies in Chandigarh, we develop tailor-made strategies for every company that we work with based on its needs and business goals.",
        sections: [
          {
            heading: "Introduction",
            paragraphs: [
              "Keeping your car clean isn’t just about looks—it’s about protecting your investment. Whether you drive a brand-new SUV or a well-loved sedan, regular washing helps preserve your paint, remove contaminants, and keep your ride shining.",
              "But when it comes to car wash options, many drivers in Mission, BC often find themselves choosing between a self-service car wash and an automatic touchless car wash. So, which one should you choose? Let’s break it down and help you decide.",
            ]
          },   
          {
            heading: "The Self-Service Car Wash Experience",
            paragraphs: [
              "If you're someone who enjoys being hands-on with your car care, a self-service car wash might be your go-to. At Creekside Car Wash, located on Logan Avenue in Mission, BC, the self-service bays are designed for those who want control.",
              "You can spend a little extra time on the wheels, blast off stubborn mud, or carefully rinse the salt off during winter months."
            ],
            points: [
              "Full Control: You decide how long to spend on each section of your vehicle.",
              "Cost-Effective: Pay for only the time you use, which is perfect for budget-conscious drivers.",
              "Custom Cleaning: Focus more on areas that need extra attention."
            ]
          },
          {
            heading: "The Convenience of Touchless Automatic Car Washes",
            paragraphs: [
              "For drivers looking for a fast, hassle-free option, the automatic touchless car wash is a game-changer. No brushes. No risk of scratches. Just powerful jets and advanced detergents doing the job for you.",
              "Creekside Car Wash offers a top-tier touchless car wash system that safely and effectively cleans your vehicle in just a few minutes."
            ],
            points: [
              "Quick & Easy: Ideal for busy schedules—just drive in and drive out.",
              "Safe for Paint: No brushes mean no contact, reducing the risk of swirl marks or scratches.",
              "Consistent Results: Advanced sensors ensure even coverage and effective cleaning."
            ]
          },
          {
            heading: "Which One is Best for You?",
            paragraphs: [
              "The choice between a self-service and an automatic touchless car wash depends on your lifestyle and car care preferences.",
              "Many drivers in Mission, BC even combine both—using self-service bays for deep cleaning and the automatic wash for regular maintenance."
            ],
            points: [
              "Choose Self-Service if you enjoy detailing your own car, want to be thorough, or are trying to save money by doing it yourself.",
              "Choose Touchless Automatic if you value speed, convenience, and paint safety with minimal effort."
            ]
          },
          {
            heading: "Why Choose Creekside Car Wash?",
            paragraphs: [
              "No matter your preference, Creekside Car Wash has you covered. Conveniently located on Logan Avenue in Mission, BC, we offer both self-service and touchless automatic car wash options, along with premium car detailing services for those looking to go the extra mile."
            ],
            points: [
              "Multiple self-serve bays with powerful, easy-to-use equipment",
              "Advanced touchless technology for a safe, effective clean",
              "Competitive pricing and flexible payment options",
              "Locally owned and operated, with a strong commitment to customer service"
            ]
          },
          {
            heading: "Final Thoughts",
            paragraphs: [
              "Choosing between a self-service car wash and an automatic touchless car wash doesn’t have to be difficult. Think about your priorities—whether it’s time, control, or paint protection—and let that guide your decision.",
              "For residents of Mission, BC, the answer is simple: Creekside Car Wash offers both, right in your neighborhood. So the next time your car needs a refresh, visit us on Logan Avenue and experience the best in local car care."
            ]
          }
        ]
      }
      ,
        {
          id: 2,
          title: "Difference Between Car Washing and Car Detailing",
          images: ["/Images/services/gdWhy.png", "/Images/services/gdWhy.png"],
          date: "April 29, 2025",
          tag: "Car Wash & Detailing",
          description:
            "Understand the major differences between a quick car wash and full car detailing, and know which service your vehicle really needs. Creekside Car Wash in Mission, BC explains it all.",
          sections: [
            {
              heading: "Introduction",
              paragraphs: [
                "When it comes to maintaining your vehicle, two terms often come up: car washing and car detailing. While they may sound similar, there’s a world of difference between the two. Understanding these differences can help you make better decisions for your car's appearance and longevity.",
                "At Creekside Car Wash located on Logan Avenue in Mission, BC, we’re here to break down the differences and help you choose the right service for your needs. Whether you're looking for a quick clean or a deep refresh, this guide will help you understand exactly what your car needs—and when."
              ]
            },
            {
              heading: "Types of Car Washes at Creekside Car Wash",
              paragraphs: [],
              points: [
                "Touchless Car Wash: Uses high-pressure water jets and specialized detergents without making contact with the vehicle’s surface. Great for those who want a safe and scratch-free option.",
                "Automatic Car Wash: Involves rotating brushes and foam cleaners that scrub your car clean as it moves through the wash bay."
              ]
            },
            {
              heading: "Benefits of a Car Wash",
              paragraphs: [
                "Car washing is typically recommended once or twice a week, especially in areas like Mission, BC, where environmental factors such as tree sap, rain, and road grime can quickly build up."
              ],
              points: [
                "Quick and convenient",
                "Removes surface-level dirt",
                "Maintains your car’s appearance",
                "Affordable maintenance option"
              ]
            },
            {
              heading: "What is Car Detailing?",
              paragraphs: [
                "Car detailing goes beyond a standard wash; it’s an in-depth cleaning and restoration process for both the interior and exterior of your vehicle. This service can include everything from vacuuming and shampooing carpets to polishing paint and restoring headlights.",
                "At Creekside Car Wash, our car detailing service is perfect for those who want their car to look like new or better."
              ]
            },
            {
              heading: "Typical Car Detailing Services Include",
              paragraphs: [],
              points: [
                "Exterior waxing and polishing",
                "Interior vacuuming and shampooing",
                "Engine bay cleaning",
                "Leather conditioning",
                "Window cleaning and water spot removal"
              ]
            },
            {
              heading: "Benefits of Car Detailing",
              paragraphs: [],
              points: [
                "Restores your vehicle’s appearance",
                "Protects paint and interior surfaces",
                "Increases resale value",
                "Provides a deep, thorough clean"
              ]
            },
            {
              heading: "Which One Do You Need?",
              paragraphs: [
                "Choose a Car Wash if you need a quick clean to maintain your vehicle’s appearance.",
                "Choose Car Detailing if you’re preparing your car for a special event, sale, or just want that brand-new look and feel.",
                "At Creekside Car Wash, we offer both services to cater to your needs. Whether it’s a simple automatic car wash or a full car detailing service, our expert team in Mission, BC is ready to help."
              ]
            },
            {
              heading: "Why Choose Creekside Car Wash?",
              paragraphs: [
                "Located conveniently on Logan Avenue, Creekside Car Wash is a trusted name for both car wash and detailing services in Mission, BC. We use high-quality products, eco-friendly processes, and experienced professionals to give your vehicle the care it deserves.",
                "Whether you need a quick clean or a detailed refresh, Creekside Car Wash is your go-to destination."
              ]
            }
          ]
        },
        {
          id: 3,
          title: "Undercoating vs. Rustproofing: What’s the Difference and Why It Matters for Your Vehicle",
          images: ["/Images/services/gdWhy.png", "/Images/services/gdWhy.png"],
          date: "April 29, 2025",
          tag: "Vehicle Protection",
          description:
            "Understand the difference between undercoating and rustproofing and how both help protect your vehicle, especially in harsh climates like Mission, BC.",
          sections: [
            {
              heading: "Introduction",
              paragraphs: [
                "When it comes to protecting your vehicle from the harsh elements, especially during the wet and salty seasons in places like Mission, BC, two terms often come up: undercoating and rustproofing.",
                "While they may sound similar, they serve distinct purposes in preserving your vehicle’s lifespan and structural integrity. At Creekside Car Wash, we care about long-term vehicle maintenance too."
              ]
            },
            {
              heading: "What is Undercoating?",
              paragraphs: [
                "Undercoating is a protective layer applied to the underside of your vehicle—frame, wheel wells, and underbody components exposed to water, salt, gravel, and road debris."
              ],
              points: [
                "Prevents Corrosion: Blocks moisture and salt from corroding metal parts underneath.",
                "Reduces Road Noise: Creates a barrier that muffles road sound.",
                "Extends Vehicle Life: Protects undercarriage from rust and wear."
              ]
            },
            {
              heading: "What is Rustproofing?",
              paragraphs: [
                "Rustproofing is the application of protective sprays or coatings in areas prone to rust—door panels, trunk lids, crevices, etc., where moisture builds up."
              ],
              points: [
                "Protects Hidden Areas: Targets rust-prone spots not easily seen.",
                "Stops Rust from Spreading: Useful for older vehicles.",
                "Adds Resale Value: A rust-free vehicle attracts more buyers.",
                "Ease of Servicing: Rustproofed cars are easier to maintain."
              ]
            },
            {
              heading: "When Should You Get These Services?",
              paragraphs: [
                "Ideally, before winter or the rainy season—fall is perfect. Even older vehicles can benefit.",
                "Also, regular car washing at Creekside Car Wash helps remove salt and dirt that cause rust."
              ]
            },
            {
              heading: "The Role of Car Washing in Preventing Rust",
              paragraphs: [
                "Drivers often underestimate how crucial regular car washing is for rust prevention. Dirt and salt buildup accelerate corrosion.",
                "Creekside Car Wash offers touchless and automatic washes that remove debris thoroughly without scratching your paint."
              ]
            },
            {
              heading: "Why Creekside Car Wash is the Best Choice in Mission, BC",
              paragraphs: [
                "When looking for a reliable car wash in Mission, BC, Creekside Car Wash stands out—not just for cleaning but protecting your vehicle."
              ],
              points: [
                "High-quality car detailing service",
                "Eco-friendly, modern car wash technology",
                "Convenient Logan Avenue location"
              ]
            },
            {
              heading: "Final Thoughts",
              paragraphs: [
                "Both undercoating and rustproofing offer vital protection—especially in climates like Mission, BC.",
                "Combine them with regular touchless or automatic car washes at Creekside Car Wash to keep your car in peak condition.",
                "Don’t wait for rust to appear—take action now and visit Creekside Car Wash on Logan Avenue, Mission, BC. Your car deserves more than just a wash—it deserves Creekside care."
              ]
            }
          ]
        },

{
  id: 4,
  title: "From Dull to Dazzling: 5 Warning Signs Your Vehicle Needs Detailing Now",
  images: ["/Images/services/gdWhy.png", "/Images/services/gdWhy.png"],
  date: "April 29, 2025",
  tag: "Car Detailing",
  description:
    "Discover the top 5 signs your car needs professional detailing and how Creekside Car Wash in Mission, BC can restore your vehicle’s shine, inside and out.",
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        "When was the last time your vehicle had a deep clean? While a regular car wash helps maintain your car’s appearance, sometimes it just isn’t enough. That’s where a full car detailing service comes in.",
        "At Creekside Car Wash on Logan Avenue in Mission, BC, we specialize in bringing vehicles back to life with our premium detailing services. If you're wondering whether your car needs more than just a wash, here are five clear signs it's time to book a full detail."
      ]
    },
    {
      heading: "1. Your Interior Looks or Smells... Off",
      paragraphs: [
        "If your car's interior smells musty, or the seats and carpets are stained, it’s a clear sign that a surface-level clean won’t cut it.",
        "A full car detailing service at Creekside Car Wash includes deep vacuuming, shampooing, and deodorizing—all designed to make your car’s interior look and feel fresh again."
      ]
    },
    {
      heading: "2. The Paint Looks Dull or Swirled",
      paragraphs: [
        "Over time, exposure to the sun, pollution, and dirt can make your car’s paint lose its shine. If your car looks dull or you notice swirl marks and fine scratches under sunlight, basic washing won’t fix the issue.",
        "Our car detailing service includes polishing and waxing that restores shine, removes minor imperfections, and adds a protective layer to your car’s paint."
      ]
    },
    {
      heading: "3. You’re Planning to Sell or Trade In Your Car",
      paragraphs: [
        "First impressions matter—especially when it comes to selling your vehicle. A detailed car not only looks better but also gives the impression that it has been well-maintained.",
        "A professional detail at Creekside Car Wash includes everything from headlight restoration to tire dressing, giving your car that showroom-ready finish."
      ]
    },
    {
      heading: "4. Stubborn Stains and Buildup Won’t Go Away",
      paragraphs: [
        "Some messes just won’t budge with a quick clean or a basic car wash. Whether it’s tree sap, bird droppings, or embedded road grime, tough stains require specialized tools and products to remove without damaging the surface.",
        "At Creekside Car Wash, our detailing team knows how to safely eliminate stubborn stains from your car’s paint, windows, and upholstery."
      ]
    },
    {
      heading: "5. You Can’t Remember the Last Time You Got a Detail",
      paragraphs: [
        "If it’s been six months—or even years—since your last full car detailing service, it’s definitely time. Detailing isn’t just about looks; it also helps protect your car from long-term damage caused by neglect.",
        "Regular detailing is especially important in regions like Mission, BC, where seasonal weather can be harsh. That’s why Creekside Car Wash offers expert detailing that’s tailored to local driving conditions."
      ]
    },
    {
      heading: "Why Choose Creekside Car Wash for Car Detailing in Mission, BC?",
      paragraphs: [
        "When you search for the best car wash Mission BC has to offer, look no further than Creekside Car Wash. We’re not just about convenience—we’re about care, quality, and long-term results."
      ],
      points: [
        "Expert technicians trained in professional detailing",
        "State-of-the-art products and equipment",
        "Customizable services for any vehicle type",
        "Friendly, local service in a convenient location"
      ]
    },
    {
      heading: "Final Thoughts",
      paragraphs: [
        "A clean car is a happy car—and a detailed one feels like new. If you’ve noticed any of the signs above, don’t wait until the mess gets worse.",
        "Book your full car detailing service today with Creekside Car Wash and give your vehicle the deep clean it deserves.",
        "Visit Creekside Car Wash, because your car deserves more than just a rinse. It deserves real care."
      ]
    }
  ]
},

{
  id: 5,
  title: "Top 5 Engine Cleaning Mistakes That Can Damage Your Car",
  images: ["/Images/services/gdWhy.png", "/Images/services/gdWhy.png"],
  date: "April 29, 2025",
  tag: "Engine Maintenance",
  description:
    "Learn the top 5 engine cleaning mistakes that could damage your vehicle’s engine and how to avoid them. Creekside Car Wash provides safe engine cleaning services to keep your car running smoothly.",
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        "Your car’s engine is like the heart of your vehicle. While it’s often out of sight, it should never be out of mind—especially when it comes to cleaning. Many drivers attempt to clean their engine themselves, only to unknowingly cause damage.",
        "That’s why we’re sharing the top 5 engine cleaning mistakes you should avoid, along with expert advice on how to safely and effectively keep your engine bay spotless."
      ]
    },
    {
      heading: "Mistake #1: Spraying High-Pressure Water Directly into the Engine Bay",
      paragraphs: [
        "One of the most common and damaging mistakes people make is using high-pressure water—like that from a hose or automatic car wash—to clean the engine. This can force water into sensitive electrical components, connectors, and sensors, potentially causing short circuits or malfunctions."
      ],
      points: [
        "Creekside Car Wash offers safe and gentle engine cleaning as part of our car detailing service. Our trained professionals use controlled techniques to avoid moisture-related issues, giving your engine a thorough clean without risking damage."
      ]
    },
    {
      heading: "Mistake #2: Not Covering Electrical Components",
      paragraphs: [
        "Before cleaning your engine, it’s essential to cover sensitive components like the alternator, battery terminals, air intake, and exposed wiring. Failing to do so can result in electrical faults or performance issues."
      ],
      points: [
        "At Creekside Car Wash, we always take the time to protect your vehicle’s vulnerable parts. Whether you’re visiting for a car wash or a complete car detailing service, we treat your vehicle like our own—with precision and care."
      ]
    },
    {
      heading: "Mistake #3: Using Harsh or Household Cleaning Products",
      paragraphs: [
        "Using generic or household cleaners on your engine can do more harm than good. Many of these products are not designed for automotive use and can damage plastic, rubber, or painted surfaces in your engine bay."
      ],
      points: [
        "Our team at Creekside Car Wash uses only professional-grade degreasers and cleaners that are safe for your car’s engine. We also offer environmentally friendly options as part of our touchless car wash and detailing services."
      ]
    },
    {
      heading: "Mistake #4: Cleaning a Hot Engine",
      paragraphs: [
        "Another serious mistake is cleaning the engine right after driving, when it’s still hot. Spraying cold water or chemicals on a hot engine can cause thermal shock, which might crack components or warp metal parts."
      ],
      points: [
        "When you bring your vehicle to Creekside Car Wash, we ensure your engine is cool before starting the cleaning process. Our detailing experts are trained to avoid heat-related damage and ensure your vehicle leaves in top condition."
      ]
    },
    {
      heading: "Mistake #5: Skipping Routine Engine Cleaning Altogether",
      paragraphs: [
        "Some drivers avoid engine cleaning altogether out of fear or lack of time. While it’s good to be cautious, neglecting engine cleaning can lead to a buildup of dirt, oil, and grime, which may trap heat and reduce the engine’s efficiency."
      ],
      points: [
        "By scheduling routine detailing at Creekside Car Wash on Logan Avenue, you’ll not only keep your car looking great but also extend the life of its most important components."
      ]
    },
    {
      heading: "Why Trust Creekside Car Wash for Engine Cleaning in Mission, BC?",
      paragraphs: [
        "When it comes to car wash options in Mission, BC, Creekside Car Wash stands out for its commitment to quality and customer care. Our experienced technicians understand the complexity of modern engines and use proven techniques to clean them safely and thoroughly."
      ],
      points: [
        "Safe, water-controlled engine bay cleaning",
        "Protection of electrical and sensitive parts",
        "Use of high-quality, automotive-grade cleaners",
        "A clean, friendly, and convenient location in Mission, BC"
      ]
    },
    {
      heading: "Final Thoughts",
      paragraphs: [
        "Keeping your engine clean is not just about aesthetics—it’s about performance and longevity. Avoid these five common mistakes and trust the experts at Creekside Car Wash to handle the job right. With the right tools, techniques, and training, we ensure your vehicle’s engine looks and functions at its best."
      ]
    }
  ]
},
      ];








      // Services
// const services = [
//   "Digital Marketing",
//   "Social Media Marketing",
//   "Search Engine Optimization",
//   "Video Production",
//   "Website Development",
//   "Graphic Design",
// ];

// // Cities
// const cities = [
//   "Patiala",
//   "Chandigarh",
//   "Mohali",
//   "Ludhiana",
//   "Nabha",
//   "Rajpura",
//   "Samana",
//   "Bathinda",
//   "Panchkula",
// ];

// // FAQs
// const serviceFaqs = {
//   "Digital Marketing": {
//     Patiala: [
//       {
//         question: "How can Digital Marketing help Patiala businesses?",
//         answer: "We help local Patiala businesses attract more customers through SEO, social media, and targeted ads.",
//       },
//       {
//         question: "Do you offer affordable plans for startups?",
//         answer: "Yes, we provide flexible packages tailored for startups and small businesses in Patiala.",
//       },
//     ],
//     Chandigarh: [
//       {
//         question: "What is the benefit of Digital Marketing in Chandigarh?",
//         answer: "We create custom campaigns for Chandigarh’s competitive market to boost visibility and leads.",
//       },
//       {
//         question: "Do you provide paid ads management?",
//         answer: "Yes, we manage Google Ads, Facebook Ads, and Instagram Ads for businesses in Chandigarh.",
//       },
//     ],
//     Mohali: [
//       {
//         question: "Do you work with Mohali IT companies?",
//         answer: "Yes, we specialize in campaigns for IT firms, startups, and service providers in Mohali.",
//       },
//       {
//         question: "Can you help increase website traffic?",
//         answer: "Absolutely, our SEO and ad strategies are designed to bring more visitors to Mohali businesses.",
//       },
//     ],
//     Ludhiana: [
//       {
//         question: "Do you run campaigns for Ludhiana industries?",
//         answer: "Yes, we work with textile, manufacturing, and retail businesses in Ludhiana.",
//       },
//       {
//         question: "Can you improve online branding?",
//         answer: "Yes, we enhance brand image through social media and creative marketing campaigns.",
//       },
//     ],
//     Nabha: [
//       {
//         question: "How does Digital Marketing benefit Nabha businesses?",
//         answer: "We help small-town businesses in Nabha reach wider audiences through online platforms.",
//       },
//       {
//         question: "Do you offer lead generation services?",
//         answer: "Yes, we create targeted campaigns to generate quality leads for Nabha-based companies.",
//       },
//     ],
//     Rajpura: [
//       {
//         question: "Do you handle digital campaigns for Rajpura businesses?",
//         answer: "Yes, we manage marketing for local shops, institutes, and service providers in Rajpura.",
//       },
//       {
//         question: "Is reporting included in campaigns?",
//         answer: "Yes, we provide monthly performance reports to track ROI for Rajpura clients.",
//       },
//     ],
//     Samana: [
//       {
//         question: "Can you promote Samana-based shops?",
//         answer: "Yes, we create campaigns for retail stores and small businesses in Samana.",
//       },
//       {
//         question: "Do you help with Facebook promotions?",
//         answer: "Yes, we run engaging ad campaigns targeting Samana’s local audience.",
//       },
//     ],
//     Bathinda: [
//       {
//         question: "Do you offer campaigns for Bathinda industries?",
//         answer: "Yes, we serve Bathinda’s growing industries with SEO, ads, and brand awareness strategies.",
//       },
//       {
//         question: "Do you provide local SEO?",
//         answer: "Yes, we optimize Google Maps and local search for Bathinda businesses.",
//       },
//     ],
//     Panchkula: [
//       {
//         question: "Do you serve Panchkula startups?",
//         answer: "Yes, we help Panchkula startups gain online visibility with custom strategies.",
//       },
//       {
//         question: "Do you provide website audits?",
//         answer: "Yes, we analyze websites and suggest improvements for Panchkula clients.",
//       },
//     ],
//   },

//   "Social Media Marketing": {
//     Patiala: [
//       {
//         question: "Which platforms do you cover in Patiala?",
//         answer: "We manage Facebook, Instagram, LinkedIn, and YouTube for Patiala-based businesses.",
//       },
//       {
//         question: "Do you create local content?",
//         answer: "Yes, we design posts and reels specific to the Patiala audience.",
//       },
//     ],
//     Chandigarh: [
//       {
//         question: "Do you run Instagram Ads in Chandigarh?",
//         answer: "Yes, we manage ad campaigns to reach Chandigarh’s competitive market.",
//       },
//       {
//         question: "Can you increase brand awareness?",
//         answer: "Yes, our strategies focus on boosting reach and engagement in Chandigarh.",
//       },
//     ],
//     Mohali: [
//       {
//         question: "Do you handle influencer marketing?",
//         answer: "Yes, we collaborate with local influencers in Mohali for brand promotions.",
//       },
//       {
//         question: "Do you create video content?",
//         answer: "Yes, we produce engaging reels and shorts for Mohali clients.",
//       },
//     ],
//     Ludhiana: [
//       {
//         question: "Can you manage e-commerce social pages?",
//         answer: "Yes, we create campaigns for Ludhiana’s online clothing and retail stores.",
//       },
//       {
//         question: "Do you create festival campaigns?",
//         answer: "Yes, we design special festive posts for Ludhiana businesses.",
//       },
//     ],
//     Nabha: [
//       {
//         question: "Do you provide low-budget social media ads?",
//         answer: "Yes, we run budget-friendly campaigns for Nabha clients.",
//       },
//       {
//         question: "Do you manage daily posting?",
//         answer: "Yes, we schedule and manage consistent posts for Nabha businesses.",
//       },
//     ],
//     Rajpura: [
//       {
//         question: "Can you manage Rajpura business profiles?",
//         answer: "Yes, we create and manage social profiles for shops and services.",
//       },
//       {
//         question: "Do you help in running offers?",
//         answer: "Yes, we design creative offers and promote them online.",
//       },
//     ],
//     Samana: [
//       {
//         question: "Do you create promotional reels?",
//         answer: "Yes, we produce reels and videos for Samana businesses.",
//       },
//       {
//         question: "Can you boost local followers?",
//         answer: "Yes, we target Samana’s local audience for organic follower growth.",
//       },
//     ],
//     Bathinda: [
//       {
//         question: "Do you manage business accounts?",
//         answer: "Yes, we provide full-page management for Bathinda brands.",
//       },
//       {
//         question: "Do you handle ad campaigns?",
//         answer: "Yes, we optimize ad spending to reach Bathinda customers.",
//       },
//     ],
//     Panchkula: [
//       {
//         question: "Do you create LinkedIn campaigns?",
//         answer: "Yes, we design campaigns for B2B clients in Panchkula.",
//       },
//       {
//         question: "Do you help with page optimization?",
//         answer: "Yes, we optimize bio, highlights, and content for Panchkula businesses.",
//       },
//     ],
//   },

//   "Search Engine Optimization": {
//     Patiala: [
//       {
//         question: "Do you offer local SEO in Patiala?",
//         answer: "Yes, we optimize Google Maps and keywords for Patiala businesses.",
//       },
//       {
//         question: "How long before results appear?",
//         answer: "Generally, it takes 3–6 months depending on competition.",
//       },
//     ],
//     Chandigarh: [
//       {
//         question: "Do you track keyword rankings?",
//         answer: "Yes, we provide detailed keyword ranking reports for Chandigarh clients.",
//       },
//       {
//         question: "Do you work on e-commerce SEO?",
//         answer: "Yes, we help optimize Chandigarh-based e-commerce websites.",
//       },
//     ],
//     Mohali: [
//       {
//         question: "Do you provide technical SEO?",
//         answer: "Yes, we fix errors, speed, and indexing issues for Mohali businesses.",
//       },
//       {
//         question: "Do you provide backlinks?",
//         answer: "Yes, we build quality backlinks to improve rankings.",
//       },
//     ],
//     Ludhiana: [
//       {
//         question: "Do you offer SEO for industries?",
//         answer: "Yes, we handle SEO for Ludhiana’s manufacturing and textile businesses.",
//       },
//       {
//         question: "Do you provide competitor analysis?",
//         answer: "Yes, we research and beat competitors for better rankings.",
//       },
//     ],
//     Nabha: [
//       {
//         question: "Do you provide local keyword targeting?",
//         answer: "Yes, we optimize Nabha-based keywords for better visibility.",
//       },
//       {
//         question: "Do you provide content writing?",
//         answer: "Yes, we create SEO-optimized blogs and website content.",
//       },
//     ],
//     Rajpura: [
//       {
//         question: "Do you help with local search ranking?",
//         answer: "Yes, we improve Rajpura businesses’ visibility in Google searches.",
//       },
//       {
//         question: "Do you offer SEO audits?",
//         answer: "Yes, we provide website SEO audits with suggestions.",
//       },
//     ],
//     Samana: [
//       {
//         question: "Do you handle small businesses’ SEO?",
//         answer: "Yes, we create affordable SEO plans for Samana shops and services.",
//       },
//       {
//         question: "Do you optimize websites for mobile?",
//         answer: "Yes, we ensure Samana business sites rank on mobile searches.",
//       },
//     ],
//     Bathinda: [
//       {
//         question: "Do you provide SEO for schools and colleges?",
//         answer: "Yes, we optimize educational institutes’ websites in Bathinda.",
//       },
//       {
//         question: "Do you work on local maps SEO?",
//         answer: "Yes, we help Bathinda businesses rank in Google Maps.",
//       },
//     ],
//     Panchkula: [
//       {
//         question: "Do you work on B2B SEO?",
//         answer: "Yes, we create SEO plans for Panchkula’s corporate businesses.",
//       },
//       {
//         question: "Do you optimize for lead generation?",
//         answer: "Yes, we target high-intent keywords for Panchkula clients.",
//       },
//     ],
//   },

//   "Video Production": {
//     Patiala: [
//       {
//         question: "Do you make promotional videos?",
//         answer: "Yes, we create ad videos, explainers, and reels for Patiala businesses.",
//       },
//       {
//         question: "Do you offer corporate video shoots?",
//         answer: "Yes, we produce professional corporate videos.",
//       },
//     ],
//     Chandigarh: [
//       {
//         question: "Do you create YouTube content?",
//         answer: "Yes, we produce engaging YouTube videos for Chandigarh clients.",
//       },
//       {
//         question: "Do you provide animation videos?",
//         answer: "Yes, we design 2D/3D animated videos.",
//       },
//     ],
//     Mohali: [
//       {
//         question: "Do you make startup pitch videos?",
//         answer: "Yes, we create high-quality pitch videos for Mohali startups.",
//       },
//       {
//         question: "Do you edit existing footage?",
//         answer: "Yes, we provide professional video editing services.",
//       },
//     ],
//     Ludhiana: [
//       {
//         question: "Do you make product showcase videos?",
//         answer: "Yes, we produce promotional videos for Ludhiana industries.",
//       },
//       {
//         question: "Do you provide event coverage?",
//         answer: "Yes, we shoot and edit events in Ludhiana.",
//       },
//     ],
//     Nabha: [
//       {
//         question: "Do you create reels for shops?",
//         answer: "Yes, we make creative reels for Nabha retailers.",
//       },
//       {
//         question: "Do you provide video ads?",
//         answer: "Yes, we design local ad videos for Nabha clients.",
//       },
//     ],
//     Rajpura: [
//       {
//         question: "Do you create explainer videos?",
//         answer: "Yes, we produce animated explainers for Rajpura businesses.",
//       },
//       {
//         question: "Do you handle voiceovers?",
//         answer: "Yes, we provide professional voiceovers in English, Hindi, and Punjabi.",
//       },
//     ],
//     Samana: [
//       {
//         question: "Do you make business intro videos?",
//         answer: "Yes, we create intro videos for Samana shops and services.",
//       },
//       {
//         question: "Do you make reels?",
//         answer: "Yes, we create engaging reels for Samana businesses.",
//       },
//     ],
//     Bathinda: [
//       {
//         question: "Do you shoot TV ads?",
//         answer: "Yes, we provide ad production services for Bathinda companies.",
//       },
//       {
//         question: "Do you provide editing services?",
//         answer: "Yes, we edit and enhance client-provided videos.",
//       },
//     ],
//     Panchkula: [
//       {
//         question: "Do you provide corporate video production?",
//         answer: "Yes, we shoot and edit videos for Panchkula companies.",
//       },
//       {
//         question: "Do you create animated promos?",
//         answer: "Yes, we design animated promotional videos.",
//       },
//     ],
//   },

//   "Website Development": {
//     Patiala: [
//       {
//         question: "Do you build e-commerce websites?",
//         answer: "Yes, we design e-commerce platforms with payment gateways.",
//       },
//       {
//         question: "Do you make responsive designs?",
//         answer: "Yes, all our websites are mobile-friendly.",
//       },
//     ],
//     Chandigarh: [
//       {
//         question: "Do you create custom websites?",
//         answer: "Yes, we develop custom solutions for Chandigarh clients.",
//       },
//       {
//         question: "Do you provide hosting support?",
//         answer: "Yes, we assist with hosting and domain setup.",
//       },
//     ],
//     Mohali: [
//       {
//         question: "Do you create portals for startups?",
//         answer: "Yes, we build startup-friendly platforms.",
//       },
//       {
//         question: "Do you provide maintenance?",
//         answer: "Yes, we offer website maintenance services.",
//       },
//     ],
//     Ludhiana: [
//       {
//         question: "Do you create websites for industries?",
//         answer: "Yes, we build sites for Ludhiana’s industrial sector.",
//       },
//       {
//         question: "Do you integrate CRMs?",
//         answer: "Yes, we integrate CRM and ERP solutions.",
//       },
//     ],
//     Nabha: [
//       {
//         question: "Do you make websites for small shops?",
//         answer: "Yes, we build simple sites for Nabha businesses.",
//       },
//       {
//         question: "Do you create landing pages?",
//         answer: "Yes, we design landing pages for ads and offers.",
//       },
//     ],
//     Rajpura: [
//       {
//         question: "Do you build educational websites?",
//         answer: "Yes, we create portals for schools and colleges.",
//       },
//       {
//         question: "Do you provide analytics setup?",
//         answer: "Yes, we integrate Google Analytics for tracking.",
//       },
//     ],
//     Samana: [
//       {
//         question: "Do you create websites for services?",
//         answer: "Yes, we build service-based websites for Samana.",
//       },
//       {
//         question: "Do you provide SSL certificates?",
//         answer: "Yes, we ensure all sites are secure with SSL.",
//       },
//     ],
//     Bathinda: [
//       {
//         question: "Do you make real estate websites?",
//         answer: "Yes, we build portals for Bathinda’s property market.",
//       },
//       {
//         question: "Do you optimize websites for speed?",
//         answer: "Yes, we ensure fast-loading websites.",
//       },
//     ],
//     Panchkula: [
//       {
//         question: "Do you create business websites?",
//         answer: "Yes, we build corporate websites for Panchkula clients.",
//       },
//       {
//         question: "Do you provide redesign services?",
//         answer: "Yes, we redesign outdated websites.",
//       },
//     ],
//   },

//   "Graphic Design": {
//     Patiala: [
//       {
//         question: "Do you create logos?",
//         answer: "Yes, we design unique logos for Patiala clients.",
//       },
//       {
//         question: "Do you make brochures?",
//         answer: "Yes, we design brochures and catalogs.",
//       },
//     ],
//     Chandigarh: [
//       {
//         question: "Do you create branding kits?",
//         answer: "Yes, we provide logo, color palette, and brand guidelines.",
//       },
//       {
//         question: "Do you design social media posts?",
//         answer: "Yes, we design creatives for Facebook and Instagram.",
//       },
//     ],
//     Mohali: [
//       {
//         question: "Do you provide packaging design?",
//         answer: "Yes, we design product packaging for Mohali clients.",
//       },
//       {
//         question: "Do you design infographics?",
//         answer: "Yes, we create marketing infographics.",
//       },
//     ],
//     Ludhiana: [
//       {
//         question: "Do you design posters?",
//         answer: "Yes, we create posters for Ludhiana businesses.",
//       },
//       {
//         question: "Do you design banners?",
//         answer: "Yes, we provide offline and online banner designs.",
//       },
//     ],
//     Nabha: [
//       {
//         question: "Do you create menu designs?",
//         answer: "Yes, we design menus for restaurants and cafes.",
//       },
//       {
//         question: "Do you make flyers?",
//         answer: "Yes, we design flyers for local businesses.",
//       },
//     ],
//     Rajpura: [
//       {
//         question: "Do you create business cards?",
//         answer: "Yes, we design professional visiting cards.",
//       },
//       {
//         question: "Do you design branding material?",
//         answer: "Yes, we create stationery and identity kits.",
//       },
//     ],
//     Samana: [
//       {
//         question: "Do you make digital ads?",
//         answer: "Yes, we design creatives for Samana’s businesses.",
//       },
//       {
//         question: "Do you design posters for shops?",
//         answer: "Yes, we provide shop promotional designs.",
//       },
//     ],
//     Bathinda: [
//       {
//         question: "Do you design event materials?",
//         answer: "Yes, we design invitations and posters for Bathinda events.",
//       },
//       {
//         question: "Do you create magazine designs?",
//         answer: "Yes, we design print layouts for magazines.",
//       },
//     ],
//     Panchkula: [
//       {
//         question: "Do you create presentation designs?",
//         answer: "Yes, we design pitch decks and PPTs.",
//       },
//       {
//         question: "Do you make digital branding creatives?",
//         answer: "Yes, we design social and ad creatives.",
//       },
//     ],
//   },
// };














  const serviceFaqs = {
    "Car Wash": [
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
    ],
    "Oil Undercoating": [
      {
        question: "What is oil undercoating?",
        answer: "Oil undercoating is a protective layer applied to the underside of your vehicle to prevent rust and corrosion.",
      },
      {
        question: "How long does oil undercoating last?",
        answer: "Typically, it lasts about a year and should be reapplied annually for best protection.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
    ],
    "Detailing": [
      {
        question: "What is included in a full detailing service?",
        answer: "Our full detailing includes interior shampoo, exterior polishing, engine cleaning, and waxing.",
      },
      {
        question: "How long does a full detail take?",
        answer: "It usually takes around 4-6 hours depending on the vehicle's size and condition.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
    ],
    "Fleet Accounts": [
      {
        question: "Do you offer discounts for fleet accounts?",
        answer: "Yes, we offer special pricing and maintenance packages for business fleets.",
      },
      {
        question: "Can you schedule regular service for fleets?",
        answer: "Absolutely, we can arrange weekly or monthly service schedules for your fleet vehicles.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
      {
        question: "How often should I get my car washed?",
        answer: "We recommend washing your car every two weeks to protect the paint and maintain a clean appearance.",
      },
      {
        question: "Do you offer hand wash services?",
        answer: "Yes, we provide both automatic and premium hand wash options for your vehicle.",
      },
    ],
  };

  const services = ["Car Wash", "Oil Undercoating", "Detailing", "Fleet Accounts"];

  const faqs = serviceFaqs[selectedService] || [];

  return (
    <div className="px-4 lg:px-12 xl:px-36 my-24 flex items-start flex-wrap-reverse xl:flex-nowrap justify-center gap-12">
      {/* Left Content */}
      <div className="w-full xl:w-[75%]">
        <div className="flex flex-col gap-6">
          <h1 className="servicePara text-3xl font-bold text-[#cc5f4d]">
            {blogs[selectedBlog].title}
          </h1>
          <p className="text-gray-500 text-lg">
            {blogs[selectedBlog].date} | {blogs[selectedBlog].tag}
          </p>
          <p className="text-md text-gray-700">
            {blogs[selectedBlog].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 h-80">
            {blogs[selectedBlog].images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="blog"
                width={220}
                height={220}
                className="w-full h-[100%] object-cover"
              />
            ))}
          </div>

          <div className="mt-8 space-y-8">
            {blogs[selectedBlog].sections.map((section, index) => (
              <div key={index}>
                <h2 className="servicePara text-lg font-semibold mb-4 text-[#3f3230]">
                  {section.heading}
                </h2>
                <div className="space-y-3 text-gray-700 text-md leading-relaxed">
                  {section.paragraphs?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {section.points && (
                  <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="xl:sticky xl:top-[100px] w-full xl:w-[25%]">
             {/* Tags */}        
        <div className="">
          <h1 className="text-xl font-medium servicePara text-[#3f3230]">
            Services
          </h1>
          <div className="flex items-center flex-wrap gap-2 rounded-lg mt-4">
            <Link
              href={"/digital-marketing"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Digital Marketing
            </Link>
            <Link
              href={"/social-media-marketing"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Social Media Marketing
            </Link>
            <Link
              href={"/web-development"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Website Development
            </Link>
            <Link
              href={"/video-production"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Video Production
            </Link>
            <Link
              href={"/search-engine-optimization"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Search Engine Optimization
            </Link>
            <Link
              href={"/graphic-designing"}
              className="text-sm text-white merriHead bg-[#cc5f4d] p-2 border shadow-lg rounded-lg"
            >
              Graphic Designing
            </Link>
          </div>
        </div>
        
        <h1 className="mt-8 text-xl font-medium servicePara text-[#3f3230]">
          Frequently Asked Questions
        </h1>
        <div className=" w-full mt-8">
              {faqs.map((faq, index) => (
                <div key={index} className="w-full">
                  <button
                    onClick={() => toggleDropdown(index, "left")}
                    className={`w-full flex justify-between items-center py-4 px-4 text-left font-medium transition-colors duration-500 ${
                      openIndexLeft === index
                        ? " text-black"
                        : " text-gray-800"
                    }`}
                  >
                    <span className="exo text-lg">{faq.question}</span>
                    {openIndexLeft === index ? (
                      <FaChevronUp className="text-gray-600" />
                    ) : (
                      <FaChevronDown className="text-gray-600" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-[700ms] ease-in-out ${
                      openIndexLeft === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-4 text-gray-700  shadow-md">
                      <span className="exo text-md 2xl:text-lg">{faq.answer}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      
        {/* <h1 className="text-xl font-medium servicePara text-[#3f3230]">
          Recent Blogs
        </h1>
        {blogs.map((blog, index) => (
          <div key={blog.id} className="flex flex-col gap-8 mt-4">
            <div
              className="flex items-start justify-start gap-4 cursor-pointer"
              onClick={() => setSelectedBlog(index)}
            >
              <div>
                <Image
                  alt={blog.title}
                  width={220}
                  height={220}
                  src={blog.images[0]}
                  className="w-24 h-20 rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col w-[75%] lg:[80%]">
                <div
                  className={`text-sm font-semibold ${
                    selectedBlog === index
                      ? "text-[#cc5f4d]"
                      : "text-gray-800"
                  } hover:text-[#cc5f4d]`}
                >
                  {blog.title}
                </div>
                <div className="text-gray-600">{blog.date}</div>
              </div>
            </div>
          </div>
        ))} */}

   
      </div>
    </div>
  );
}
