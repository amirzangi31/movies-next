import React from 'react'
import Link from 'next/link'
import MovieIcon from '@/icons/cardmovie/MovieIcon'
import SessonIcon from '@/icons/cardmovie/SessonIcon'
import ImdbIconOne from '@/icons/cardmovie/ImdbIconOne'
import { useLocale, useTranslations } from 'next-intl'

const CardSide = (props) => {
  
  const t = useTranslations("CardSide")
  const local = useLocale()

  return (
    <Link href={"/"} style={{backgroundImage : `url("${props.thumbnail}")`}}  className="group  relative h-[230px] w-[180px] flex justify-center items-end bg-cover rounded-2xl bg-center bg-no-repeat overflow-hidden">
        
        <div className=' p-2 backdrop-blur-sm bg-black/40 w-full flex justify-between items-start flex-col md:absolute -bottom-full  left-0 group-hover:bottom-0 transition-all duration-300'>
            <div className='flex justify-start items-center gap-1 text-sm'>
              <span ><MovieIcon /></span>
              <p>{t("name")} :</p>
              <p>{local === "en" ? props.name_english : props.name_persian }</p>
            </div>
            <div className='flex justify-start items-center gap-1 text-sm'>
              <span ><SessonIcon /></span>
              <p>{t("seasons")}  :</p>
              <p>{8}</p>
            </div>
            <div className='flex justify-start items-center gap-1 text-sm'>
              <span ><ImdbIconOne /></span>
              <p>{t("score")} :</p>
              <p>{props.imdb}</p>
            </div>
        </div>
    </Link>
  )
}

export default CardSide