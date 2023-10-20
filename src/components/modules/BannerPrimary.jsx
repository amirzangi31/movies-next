"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ExpectedCard from './ExpectedCard';

const BannerPrimary = () => {
  return (
    
    <Swiper
    modules={[Navigation]}
    slidesPerView={1} 
    navigation
    onSlideChange={() => console.log('slide change')}
    speed={600}
    loop="true"
    
  >
    <SwiperSlide className='border border-error' >
      <ExpectedCard /> 
    </SwiperSlide>
    <SwiperSlide className='border border-error' >
      <ExpectedCard />
    </SwiperSlide>
    <SwiperSlide className='border border-error' >
      <ExpectedCard />
    </SwiperSlide>
    <SwiperSlide className='border border-error' >
      <ExpectedCard />
    </SwiperSlide>
    
  </Swiper>
  )
}

export default BannerPrimary