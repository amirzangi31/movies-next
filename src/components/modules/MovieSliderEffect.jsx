"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css/autoplay';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import CardSide from './CardSide';



const MovieSliderEffect = ({data}) => {
  return (
    <Swiper
    modules={[EffectCoverflow, Autoplay, Pagination]}

    effect='coverflow'
    grabCursor="true"
    centeredSlides="true"

    speed={600}
    className='swiper-home'
    loop="true"
    autoplay={{
        delay: 4000,
        disableOnInteraction: false
    }}
   
    coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows : true
    }}
    breakpoints={{
        200: {
            slidesPerView: 1,
        },
        390: {
            slidesPerView: 2,
        },
        600 :{
            slidesPerView : 3
        },

        768: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 4,
        },
        1800: {
            slidesPerView: 5,
        },
        2300: {
            slidesPerView: 6,
        },
    }}
>
        {JSON.parse(data).map(item => (

        <SwiperSlide key={item._id}  className='actor-slide'>
            <CardSide {...item}/> 
        </SwiperSlide>
        ))}


</Swiper>
  )
}

export default MovieSliderEffect