import ArrowDownOne from '@/icons/ArrowDownOne'
import React from 'react'
import CardSide from './CardSide'
import { useTranslations } from 'next-intl'

const SideContent = () => {
  const t = useTranslations("SideLeft")
  
  
  return (
    <div className='w-3/12 sticky top-[120px] text-text  pb-8 hidden lg:block'>
            <div>
                <h3 className='flex justify-between items-center z-[-1] relative after:absolute after:top-full rtl:after:right-0 ltr:after:left-0 after:w-1/2 after:h-[2px] after:block after:bg-primary'>
                    {t("title")}
                    <ArrowDownOne /> 
                </h3>
              <div className='mt-4 flex justify-start items-center flex-col gap-4 '>
              <CardSide name_persian={t("movieOne")} name_english={t("movieOne")}  imdb={9.3} thumbnail={"/cover-one.png"} /> 
                <CardSide  name_persian={t("movieTwo")} name_english={t("movieTwo")} imdb={9.3} thumbnail={"/cover-two.png"} /> 
              </div>
            </div>
            
    </div>
  )
}

export default SideContent