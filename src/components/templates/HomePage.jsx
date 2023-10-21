import React from 'react'
import LayoutContent from '../layout/LayoutContent'
import BannerPrimary from '../modules/BannerPrimary'
import NewIcon from '@/icons/NewIcon'
import { useLocale, useTranslations } from 'next-intl'
import MovieCard from '../modules/MovieCard'
import UserIcon from '@/icons/UserIcon'
import ActorElement from '../modules/ActorElement'
import ActorsSlider from '../modules/ActorsSlider'
import Link from 'next/link'
import ArrowLeftIcon from '@/icons/ArrowLeftIcon'
import MovieSliderEffect from '../modules/MovieSliderEffect'
import ArrowRightIcon from '@/icons/ArrowRightIcon'

const HomePage = () => {

  const titles = useTranslations("Titles")
  const local = useLocale()
  return (
    <LayoutContent>
        <BannerPrimary /> 
        <div className='mt-6'>
          <h2 className='flex justify-start items-center gap-2 font-[700]'>
            <NewIcon /> 
            {titles("newest")}
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-4  xl:grid-cols-2 5xl:grid-cols-4'>
            <MovieCard /> 
            <MovieCard /> 
            <MovieCard /> 
            <MovieCard /> 
          </div>
        </div>
        <div className='mt-6 w-full'>
        <h2 className='flex justify-between items-center gap-2 font-[700] '>
            {titles("actors")}
            <Link href={"/"} className='flex justify-between items-center gap-2 text-primary '>
              <span>{titles("seeAll")} </span>
              {local === "en" ?<ArrowRightIcon />  :<ArrowLeftIcon />  }
            </Link>
          </h2>
          <div className='mt-4 p-2 flex justify-start items-center gap-2  '>
                <ActorsSlider /> 
          </div>
        </div>
        <div className='mt-6 w-full'>
        <h2 className='flex justify-between items-center gap-2 font-[700] '>
            {titles("ourSuggestion")}
            <Link href={"/"} className='flex justify-between items-center gap-2 text-primary '>
              <span>{titles("seeAll")} </span>
              {local === "en" ?<ArrowRightIcon />  :<ArrowLeftIcon />  }
            </Link>
          </h2>
          <div className='mt-4 p-2 flex justify-start items-center gap-2  '>
                <MovieSliderEffect /> 
          </div>
        </div>
        <div className='mt-6 w-full'>
        <h2 className='flex justify-between items-center gap-2 font-[700] '>
            {titles("scary")}
            <Link href={"/"} className='flex justify-between items-center gap-2 text-primary '>
              <span>{titles("seeAll")} </span>
              {local === "en" ?<ArrowRightIcon />  :<ArrowLeftIcon />  }
            </Link>
          </h2>
          <div className='mt-4 p-2 flex justify-start items-center gap-2  '>
                <MovieSliderEffect /> 
          </div>
        </div>
        <div className='mt-6 w-full'>
        <h2 className='flex justify-between items-center gap-2 font-[700] '>
            {titles("animation")}
            <Link href={"/"} className='flex justify-between items-center gap-2 text-primary '>
              <span>{titles("seeAll")} </span>
              {local === "en" ?<ArrowRightIcon />  :<ArrowLeftIcon />  }
            </Link>
          </h2>
          <div className='mt-4 p-2 flex justify-start items-center gap-2  '>
                <MovieSliderEffect /> 
          </div>
        </div>
        
    </LayoutContent>
  )
}

export default HomePage