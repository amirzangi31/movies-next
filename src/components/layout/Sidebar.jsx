import React from 'react'
import LogoIcon from '@/icons/LogoIcon'


const menuData = [
  {
    name : "صفحه اصلی",
    link : "",
    icon : ""
  },
  {
    name : "مورد علاقه",
    link : "",
    icon : ""
  },
  {
    name : "مورد انتظار",
    link : "",
    icon : ""
  },
  {
    name : "خرید اشتراک",
    link : "",
    icon : ""
  },
]



const Sidebar = () => {
  return (
    <aside className='w-[280px] h-screen bg-sidebar text-text z-10 pt-10 '>
        <div className='h-[63px] flex justify-center items-center px-3'><LogoIcon /> </div>
        <p className='px-3 text-md text-text'>منو اصلی</p>
        <div>

        </div>
    </aside>
  )
}

export default Sidebar