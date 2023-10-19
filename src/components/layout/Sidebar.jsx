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
import ZarbIcon from '@/icons/ZarbIcon'


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



const Sidebar = ({open , setOpen}) => {
  




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
        <p className='px-4 text-md text-text mt-6 '>منو اصلی</p>
        
            <ul className='menu-sidebar'>
              {menuData.map((item , index ) => (
                <li key={index}  className='menu-sidebar__item'>
                  
                  <Link href={item.link} className='menu-sidebar__link'>
                    <span className=' w-[30px] h-[30px]  flex justify-center items-center'>{item.icon}</span>
                     <p className='w-[100px]'>{item.name}</p>
                    </Link>
                </li>
              ))}
            </ul>
        

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
        </div>

    </aside>
    </>
  )
}

export default Sidebar