"use client"

import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ExpectedCard from './ExpectedCard';
import { useState } from 'react';

const BannerPrimary = () => {
  const [swiper , setSwiper] = useState(null)


  const nextSlide = () => {
    
    swiper.slideNext()
  }
  const prevSlide = () => {
    
    swiper.slidePrev()
  }


  return (
    
    <Swiper
    
    slidesPerView={1} 
    
    
    speed={600}
    loop="true"
    onSwiper={(s) => {  
        setSwiper(s)
    }}
  >
    <SwiperSlide  >
      <ExpectedCard next={nextSlide} prev={prevSlide} /> 
    </SwiperSlide>
    <SwiperSlide  >
      <ExpectedCard next={nextSlide} prev={prevSlide} />
    </SwiperSlide>
    <SwiperSlide  >
      <ExpectedCard next={nextSlide} prev={prevSlide} />
    </SwiperSlide>
    <SwiperSlide  >
      <ExpectedCard next={nextSlide} prev={prevSlide} />
    </SwiperSlide>
    
  </Swiper>
  )
}

export default BannerPrimary