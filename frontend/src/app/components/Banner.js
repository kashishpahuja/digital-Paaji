import React, { useEffect, useState } from 'react';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(1);
  useEffect(()=>{
    setInterval(()=>{
      setCurrentSlide((prev)=>{
        if(prev<3){
          return currentSlide + 1
        }else{
          return 1
        }
      })
    },3000)
  },[
    // currentSlide
  ])
  const handleSlide=()=>{
    setCurrentSlide((prev)=>{
      if(prev<3){
        return currentSlide + 1
      }else{
        return 1
      }
    })
  }

  return (
    <div className='slide-container h-[800px] w-[full] '>
      <Slide1 handleSlide={handleSlide}  slideNumber={1} currentSlide={currentSlide}/>
      <Slide2 handleSlide={handleSlide}  slideNumber={2} currentSlide={currentSlide}/>
      <Slide3 handleSlide={handleSlide}  slideNumber={3} currentSlide={currentSlide}/>
    </div>
  );
}

export default Banner;
