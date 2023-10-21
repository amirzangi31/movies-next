"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css/autoplay';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import CardSide from './CardSide';



const MovieSliderEffect = () => {
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

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>

        <SwiperSlide  className='actor-slide'>
            <CardSide title="game of thrones" range={9.3} sesson={8} /> 
        </SwiperSlide>


</Swiper>
  )
}

export default MovieSliderEffect