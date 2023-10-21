import ArrowLeftIcon from '@/icons/ArrowLeftIcon'
import ArrowRightIcon from '@/icons/ArrowRightIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DividerDash from '../element/DividerDash'
import { useTranslations } from 'next-intl'

const ExpectedCard = ({next , prev}) => {
  const t = useTranslations("time")
  const r = useTranslations("Reminder")
  return (
    <div 
      
    >
      <Link href={"/"} className='absolute top-0 left-0 w-full h-full'></Link>
          <Image src={"/banner.png"} width={800} height={800} className='w-full ' alt='banner' /> 
        
          <div className='hidden justify-between  bg-bg-secondary py-3 px-3 min-w-[80px] rounded-lg items-center gap-6 absolute bottom-5 rtl:left-5 ltr:flex-row-reverse ltr:right-5 after:absolute after:left-1/2 after:top-0.75 after:block after:w-[1px] after:h-[calc(100%-6px)] after:bg-text  sm:flex '>

            <button type='button' onClick={prev}  className='z-20' ><ArrowRightIcon /></button>
            <button type='button' onClick={next} className='z-20'  ><ArrowLeftIcon /></button>
          </div>
{/* 
          <div className='absolute top-5 rtl:right-[20px] h-[calc(100%-40px)]   ltr:left-[20px] rounded-3xl backdrop-blur-sm flex justify-between items-center flex-col' style={{boxShadow : "4px 4px 8px 0px rgba(141, 140, 140, 0.25)"}}>
                  <div className='flex justify-between items-center flex-col  gap-4  mt-4  '>

                    <div className='px-4 flex justify-between items-center gap-4  '>
                      <p className='font-[500]'> {r("title")}</p>
                    <button type='button' className='btn  btn-secondary py-1 px-2'>{r("button")}</button></div>
                <div className='mt-4 w-full'>
                  <DividerDash />
                </div>
                  </div>
                <div className='flex justify-between items-center px-4  w-full h-full gap-4'>
                  <div>
                    <div className='flex justify-between items-center gap-2 ltr:flex-row-reverse '>
                      <span className='bg-white text-black rounded-lg py-2 px-2'>5</span>
                      <span className='bg-white text-black rounded-lg py-2 px-2'>1</span>
                    </div>
                    <p className='mt-4 text-center'>{t("day")}</p>
                  </div>
                  <div>
                    <div className='flex justify-between items-center gap-2 ltr:flex-row-reverse'>
                          <span className='bg-white text-black rounded-lg py-2 px-2'>5</span>
                          <span className='bg-white text-black rounded-lg py-2 px-2'>1</span>
                    </div>
                    <p className='mt-4 text-center'>{t("hour")}</p>
                  </div>
                  <div>
                    <div className='flex justify-between items-center gap-2 ltr:flex-row-reverse'>
                          <span className='bg-white text-black rounded-lg py-2 px-2'>5</span>
                          <span className='bg-white text-black rounded-lg py-2 px-2'>1</span>
                    </div>
                    <p className='mt-4 text-center'>{t("minute")}</p>
                  </div>
            
                </div>
          </div> */}

    </div>
  )
}

export default ExpectedCard