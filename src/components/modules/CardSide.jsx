import React from 'react'
import Link from 'next/link'
import MovieIcon from '@/icons/cardmovie/MovieIcon'
import SessonIcon from '@/icons/cardmovie/SessonIcon'
import ImdbIconOne from '@/icons/cardmovie/ImdbIconOne'

const CardSide = () => {
  return (
    <Link href={"/"} className="bg-[url('/cover-one.png')] w-full h-[230px] flex justify-center items-end bg-cover rounded-2xl bg-center bg-no-repeat overflow-hidden">
        
        <div className='h-1/3 p-2 backdrop-blur-sm bg-black/40 w-full flex justify-between items-start flex-col'>
            <div className='flex justify-start items-center gap-1 text-sm'>
              <span ><MovieIcon /></span>
              <p>نام :</p>
              <p>بازی تاج وتخت</p>
            </div>
            <div className='flex justify-start items-center gap-1 text-sm'>
              <span ><SessonIcon /></span>
              <p>تعداد فصل :</p>
              <p>8</p>
            </div>
            <div className='flex justify-start items-center gap-1 text-sm'>
              <span ><ImdbIconOne /></span>
              <p>امتیاز :</p>
              <p>9.3</p>
            </div>
        </div>
    </Link>
  )
}

export default CardSide