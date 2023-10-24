"use client"

import React from 'react'
import LogoIcon from '@/icons/LogoIcon'
import HomeIcon from '@/icons/menu/HomeIcon'
import HeartIcon from '@/icons/menu/HeartIcon'
import SubscriptionIcon from '@/icons/menu/SubscriptionIcon'
import Link from 'next/link'
import Divider from '../element/Divider'
import TelegramIcon from '@/icons/socialmedia/TelegramIcon'
import Instagram from '@/icons/socialmedia/Instagram'
import TwitterIcon from '@/icons/socialmedia/TwitterIcon'
import GitHubIcon from '@/icons/socialmedia/GitHubIcon'
import ZarbIcon from '@/icons/ZarbIcon'
import { useLocale, useTranslations } from 'next-intl'
import ButtonIsSign from '../modules/ButtonIsSign'
import LangIcon from '@/icons/LangIcon'
import MoviesIcon from '@/icons/menu/MoviesIcon'
import {   usePathname } from 'next/navigation'
import { shortPahtnameHandler } from '@/helper/functions'
import useAuth from '@/hooks/useAuth'
import LoaderButton from '../element/LoaderButton'


const menuData = [
  {
    fa : "صفحه اصلی",
    en : "Home",
    link : {
      en : "/en",
      fa : "/fa"
    },
    icon : <HomeIcon /> 
  },
  {
    fa : "مورد علاقه",
    en : "Favorites",
  
    link : {
      en : "/en/favorites",
      fa : "/fa/favorites"
    },
    icon : <HeartIcon /> 
  },
  {
    fa : "فیلم ها",
    en : "Movies",
  
    link : {
      en : "/en/movies",
      fa : "/fa/movies"
    },
    icon : <MoviesIcon /> 
  },
  {
    fa : "خرید اشتراک",
    en : "Subscribe",
  
    link : {
      en : "/en/subscribe",
      fa : "/fa/subscribe"
    },
    icon : <SubscriptionIcon /> 
  },
]



const Sidebar = ({open , setOpen }) => {
  const t = useTranslations("Sidebar")
  const authB= useTranslations("AuthButtons")
  const locale = useLocale()
  const pathname = usePathname()

  const {auth } = useAuth()
  


  return (
    <>
        <div className={` z-[15] fixed top-0 left-0 w-full h-screen ${open ? "md:hidden" : "hidden"}`} onClick={() => setOpen(false)}>
          
        </div>
        
    <aside className={ `fixed ${open ? "right-0" : "-right-full"} top-0  
    z-20 w-full
    md:static    md:w-[280px] h-screen md:bg-sidebar  `}>
      <div className='z-20 bg-sidebar-m max-w-full  relative
    text-text  pt-10 pb-3 overflow-y-scroll transition-all duration-300 w-[400px] h-screen'>

      <div className='md:hidden   absolute top-1 left-0 px-2 flex justify-end items-center  w-full  ' onClick={() => setOpen(false)}>
        <div className='w-[50px] h-[50px] border rounded-full flex justify-center items-center'  >
          <ZarbIcon width={25} height={25} /> 
        </div>
      </div>

        <div className='h-[63px] flex justify-center items-center px-4'><LogoIcon /> </div>
        <div className='flex justify-center items-center md:hidden'>
          {auth === "authorazation" ? <ButtonIsSign />  : (
            
            <div className='flex justify-center items-center gap-1 flex-wrap'>
                {auth === "isLoading" ? <LoaderButton /> : <>
                <Link href={`/${locale}/signin`} ><button  type='button' className="btn btn-sm btn-outline-primary">{authB("signIn")}</button></Link>
              <Link href={`/${locale}/signup`} ><button  type='button' className="btn btn-sm btn-primary">{authB("signUp")} </button></Link>
                </>}
            </div>
          )}
        </div>


        <p className='px-4 text-md text-text mt-6 '>{t("title")}</p>
        
            <ul className='menu-sidebar'>
              {menuData.map((item , index ) => (
                <li key={index}  className='menu-sidebar__item'>
                  
                  <Link href={item.link[locale]} className='menu-sidebar__link'>
                    <span className=' w-[30px] h-[30px]  flex justify-center items-center'>{item.icon}</span>
                     <p className='w-[100px]'>{item[locale]}</p>
                    </Link>
                </li>
              ))}
              <li className='menu-sidebar__item'>

              <Link href={locale === "en" ?`/fa${shortPahtnameHandler(pathname)}`  : `/en${pathname}`} locale={locale}  className='menu-sidebar__link w-full'>
              <span className=' w-[30px] h-[30px]  flex justify-center items-center'><LangIcon /> </span>
                <p>{locale === "en" ? "persian language" : "تغییر زبان به انگلیسی"}</p>
              </Link>
              </li>
            </ul>
        

        <div className='my-6'>
                <Divider   /> 
        </div>
        <div className='px-4'>
          <p className='text-md ltr:text-left rtl:text-right relative after:block after:absolute after:w-2 after:h-2 after:rounded-full after:top-[calc(50%-4px)] rtl:after:right-[-10px] ltr:after:left-[-10px] after:bg-primary '>{t("titleSocial")}</p>
          <ul className='mt-4 grid grid-cols-2 gap-2'>
                <li>
                  <Link href={"#"} className='flex items-center rtl:justify-end  ltr:justify-end ltr:flex-row-reverse rtl:flex-row  gap-2 hover:text-primary transition-all duration-300'>
                    {t("telegram")}
                    <TelegramIcon /> 
                  </Link>
                  
                 
                  
                </li>
                <li>
                  <Link href={"#"} className='flex items-center rtl:justify-end  ltr:justify-end ltr:flex-row-reverse rtl:flex-row  gap-2 hover:text-primary transition-all duration-300'>
                    {t("instagram")}
                    
                    <Instagram /> 
                  </Link>
                  </li>
                <li>
                  <Link href={"#"} className='flex items-center rtl:justify-end  ltr:justify-end ltr:flex-row-reverse rtl:flex-row  gap-2 hover:text-primary transition-all duration-300'>
                    {t("twitter")}
                    
                    <TwitterIcon /> 
                  </Link>
                  </li>
                <li>
                  <Link href={"#"} className='flex items-center rtl:justify-end  ltr:justify-end ltr:flex-row-reverse rtl:flex-row  gap-2 hover:text-primary transition-all duration-300'>
                    {t("github")}
                    
                    <GitHubIcon /> 
                  </Link>
                  </li>
          </ul>
        </div>
        
                

        <div className='mt-12 px-4'>
                <p className='text-sm text-center'>{locale === "en" ? "All rights of this site belong to " : " تمامی حقوق این سایت مربوط به" }<Link href={"https://resume-zangiabadi.netlify.app"} target='_blank'  className='font-[600] text-primary'>{locale === "en" ? "Amirmohammad zangiabadi" : " امیرمحمد زنگی ابادی "}</Link>  {locale === "en" ? "" : "میباشذ"}</p>
        </div>
        </div>

    </aside>
    </>
  )
}

export default Sidebar