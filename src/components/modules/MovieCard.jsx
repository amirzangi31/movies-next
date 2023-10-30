"use client"

import ImdbIcon from '@/icons/cardmovie/ImdbIcon'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'


const MovieCard = (props) => {
const {name_persian , name_english , year,thumbnail , genre , director} = props
const t = useTranslations("MovieCard")
const local = useLocale()
  return (
    <Link href={`/${local}/favorites`}  className='movie-card shadow-sh-black' >
            <div  className='movie-card__body ' >
            
                <p className='pb-4 flex justify-center xs:justify-end py-2 xs:py-0 px-2 items-center'>{local === "en" ? name_english : name_persian}</p>
                <div className='pb-4'>
                    <ImdbIcon /> 
                </div>
                <div className='flex justify-between items-start flex-col gap-2 text-sm font-[300]'> 
                    <p className='text-text-main'>
                        {t("genre")}  : <span className='text-text'>{genre.map((item , index) => `${item}${index === genre.length-1 ? "" : " | "}`)}</span>
                    </p>
                    <p className='text-text-main'>
                        {t("director")}  : <span className='text-text'>{director}</span>
                    </p>
                    <p className='text-text-main'>
                        {t("language")}  : <span className='text-text'>English</span>
                    </p>
                    <p className='text-text-main'>
                         {t("periodOfTime")}  : <span className='text-text'>{year}</span>
                    </p>
                    <p className='text-text-main'>
                         {t("quality")}  : <span className='text-text'>720p</span>
                    </p>
                </div>
            </div>
            <Image src={thumbnail} className='movie-card__image'  width={1000} height={1000} alt='cover-card'  />
    </Link>
  )
}

export default MovieCard