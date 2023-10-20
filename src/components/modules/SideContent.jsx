import ArrowDownOne from '@/icons/ArrowDownOne'
import React from 'react'
import CardSide from './CardSide'
import { useTranslations } from 'next-intl'

const SideContent = () => {
  const t = useTranslations("SideLeft")
  
  
  return (
    <div className='w-[180px] text-text  pb-8 hidden lg:block'>
            <div>
                <h3 className='flex justify-between items-center z-[-1] relative after:absolute after:top-full rtl:after:right-0 ltr:after:left-0 after:w-1/2 after:h-[2px] after:block after:bg-primary'>
                    {t("title")}
                    <ArrowDownOne /> 
                </h3>
              <div className='mt-4 flex justify-start items-center flex-col gap-4 '>
              <CardSide title={t("movieOne")}  range={9.3} sesson={8} /> 
                <CardSide  title={t("movieTwo")} range={9.3} sesson={5} /> 
              </div>
            </div>
            {/* <div  className='mt-8'>
                <h3 className='flex justify-between items-center relative after:absolute after:top-full rtl:after:right-0 ltr:after:left-0 after:w-1/2 after:h-[2px] after:block after:bg-primary'>
                    جدیدترین
                    <ArrowDownOne /> 
                </h3>
              <div className='mt-4 flex justify-start items-center flex-col gap-4 '>
              <CardSide /> 
                <CardSide /> 
              </div>
            </div> */}
    </div>
  )
}

export default SideContent