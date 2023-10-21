import React from 'react'
import Link from 'next/link'
import MovieIcon from '@/icons/cardmovie/MovieIcon'
import SessonIcon from '@/icons/cardmovie/SessonIcon'
import ImdbIconOne from '@/icons/cardmovie/ImdbIconOne'
import { useTranslations } from 'next-intl'

const CardSide = ({title , sesson  , range , bg}) => {
  
  const t = useTranslations("CardSide")


  return (
    <Link href={"/"} className="group bg-[url('/cover-one.png')] relative h-[230px] w-[180px] flex justify-center items-end bg-cover rounded-2xl bg-center bg-no-repeat overflow-hidden">
        
        <div className=' p-2 backdrop-blur-sm bg-black/40 w-full flex justify-between items-start flex-col md:absolute -bottom-full  left-0 group-hover:bottom-0 transition-all duration-300'>
            <div className='flex justify-start items-center gap-1 text-sm'>
              <span ><MovieIcon /></span>
              <p>{t("name")} :</p>
              <p>{title}</p>
            </div>
            <div className='flex justify-start items-center gap-1 text-sm'>
              <span ><SessonIcon /></span>
              <p>{t("seasons")}  :</p>
              <p>{sesson}</p>
            </div>
            <div className='flex justify-start items-center gap-1 text-sm'>
              <span ><ImdbIconOne /></span>
              <p>{t("score")} :</p>
              <p>{range}</p>
            </div>
        </div>
    </Link>
  )
}

export default CardSide