"use client"

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css/autoplay';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import ActorElement from './ActorElement';




const ActorsSlider = ({actors}) => {
  return (
    <Swiper
                    modules={[EffectCoverflow, Autoplay]}

                    effect='coverflow'
                    grabCursor="true"
                    centeredSlides="true"
                    speed={600}
                    className='swiper-home'
                    loop="true"
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 50,
                        modifier: 3,
                        // slideShadows : true
                    }}
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                        },
                        400: {
                            slidesPerView: 3,
                        },
                        550: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }}
                >
                        {
                            JSON.parse(actors).map(item => {
                              
                             
                                
                            return (
                                <SwiperSlide className="actor-slide" key={item._id.toString()} >
                                <ActorElement  {...item} /> 
                            </SwiperSlide>
                            )

                            })
                        }
                      

                </Swiper>
  )
}

export default ActorsSlider