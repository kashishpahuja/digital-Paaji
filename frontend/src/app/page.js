'use client';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import "./globals.css";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import KhetKiMuli from "./components/KhetKiMuli";
import AddOn from "./components/AddOn";
import Growth from "./components/Growth";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import Reviews from "./components/Reviews";
import Vypaar from './components/Vypaar';
import Work from "./components/Work";
import Footer from "./components/Footer";



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: false, 
    });
  }, []);

  return (
    <div>
    <div className="my-24" data-aos="fade-up">
      <Services />
    </div>
    <div className="my-24" data-aos="fade-up">
      <KhetKiMuli />
    </div>
    <div className="my-24" data-aos="fade-up">
      <AddOn />
    </div>
    <div className="my-24" >
      <Growth />
    </div>
    <div className="my-24" data-aos="fade-up">
      <Offer />
    </div>
    <div className="my-24" data-aos="flip-down">
      <Testimonials />
    </div>
    <div className="my-24" data-aos="zoom-in-out">
      <Reviews />
    </div>
    <div className="my-24" data-aos="fade-up">
      <Work />
    </div>
    <div className="my-24" data-aos="fade-down">
      <Vypaar />
    </div>
    
  </div>
  );
}
