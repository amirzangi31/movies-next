import React from 'react'
import LogoIcon from '@/icons/LogoIcon'
import HomeIcon from '@/icons/menu/HomeIcon'
import HeartIcon from '@/icons/menu/HeartIcon'
import ExpectationIIcon from '@/icons/menu/ExpectationIIcon'
import SubscriptionIcon from '@/icons/menu/SubscriptionIcon'
import Link from 'next/link'
import Divider from '../element/Divider'
import TelegramIcon from '@/icons/socialmedia/TelegramIcon'
import Instagram from '@/icons/socialmedia/Instagram'
import TwitterIcon from '@/icons/socialmedia/TwitterIcon'
import GitHubIcon from '@/icons/socialmedia/GitHubIcon'


const menuData = [
  {
    name : "صفحه اصلی",
    link : "/",
    icon : <HomeIcon /> 
  },
  {
    name : "مورد علاقه",
    link : "/favorites",
    icon : <HeartIcon /> 
  },
  {
    name : "مورد انتظار",
    link : "/expected",
    icon : <ExpectationIIcon /> 
  },
  {
    name : "خرید اشتراک",
    link : "/subscribe",
    icon : <SubscriptionIcon /> 
  },
]



const Sidebar = () => {
  return (
    <aside className='w-[280px] h-screen bg-sidebar text-text z-10 pt-10 overflow-y-scroll'>
        <div className='h-[63px] flex justify-center items-center px-4'><LogoIcon /> </div>
        <p className='px-4 text-md text-text mt-6 '>منو اصلی</p>
        <div>
            <ul className='menu-sidebar'>
              {menuData.map((item , index ) => (
                <li key={index}  className='menu-sidebar__item'>
                  
                  <Link href={item.link} className='menu-sidebar__link'>{item.icon} {item.name}</Link>
                </li>
              ))}
            </ul>
        </div>

        <div className='my-6'>
                <Divider   /> 
        </div>
        <div className='px-4'>
          <p className='text-md relative after:block after:absolute after:w-2 after:h-2 after:rounded-full after:top-[calc(50%-4px)] after:right-[-10px] after:bg-primary '>شبکه های اجتماعی</p>
          <ul className='mt-4 grid grid-cols-2 gap-2'>
                <li>
                  <Link href={"#"} className='flex items-center  gap-2 hover:text-primary transition-all duration-300'>
                    تلگرام
                    <TelegramIcon /> 
                  </Link>
                  
                 
                  
                </li>
                <li>
                  <Link href={"#"} className='flex items-center  gap-2 hover:text-primary transition-all duration-300'>
                    اینستاگرام
                    <Instagram /> 
                  </Link>
                  </li>
                <li>
                  <Link href={"#"} className='flex items-center  gap-2 hover:text-primary transition-all duration-300'>
                    توییتر
                    <TwitterIcon /> 
                  </Link>
                  </li>
                <li>
                  <Link href={"#"} className='flex items-center  gap-2 hover:text-primary transition-all duration-300'>
                    گیت هاب
                    <GitHubIcon /> 
                  </Link>
                  </li>
          </ul>
        </div>
        
                

        <div className='mt-12 px-4'>
                <p className='text-sm text-center'>تمامی حقوق این سایت مربوط به <Link href={"https://resume-zangiabadi.netlify.app"} target='_blank'  className='font-[600] text-primary'>امیرمحمد زنگی ابادی</Link>  می باشد </p>
        </div>

    </aside>
  )
}

export default Sidebar