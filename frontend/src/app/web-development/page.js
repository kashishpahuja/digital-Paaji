'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/Header";
import GetInTouch from '../components/services/GetInTouch'
import Content from '../components/services/Content'
import Faq from '../components/Faq'



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false}); // Initialize AOS with desired settings
  }, []);

  return (
    <main>
        <Header title="VIDEO PRODUCTION AGENCY INDIA" 
        content="For you to produce captivating, audience-resonant videos, customised video editing is essential. Our customization-focused approach guarantees that every alteration captures the essence and personality of your brand. We are aware of your goals, target market, and chosen style so that we may produce a film that speaks to the people who are most important to you. Our talented editors improve your film and make sure your message is understood by using strategies like dynamic transitions and well-timed pacing."
         button="Call Us"/>
   
        <div className="my-24">
        <GetInTouch />
      </div>
      <div className="my-24">
        <Faq />
      </div>
    </main>
  );
}