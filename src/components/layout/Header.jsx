"use client"


import React, { useState } from 'react'
import Searchbox from '../modules/Searchbox'
import HamburgerMenu from '@/icons/HamburgerMenu'
import LogoIcon from '@/icons/LogoIcon'
import Link from 'next/link'

const Header = ({scroll , setOpen}) => {
  const [openSearch , setOpenSearch] = useState(false)

  return (
    <header className={`sticky top-0 left-0  pt-5 sm:pt-10 px-6 ${scroll ? "backdrop-blur-sm" : ""} `} >

    <div className='block xs:hidden py-4'>
      <Link href={"/"}>
      <LogoIcon/>
      </Link>
    </div>
    <div className=' flex justify-between items-center py-2 '>
        
        <button type='button' onClick={() => setOpen(true)}  className={` ${openSearch ? "hidden" : "md:hidden"} w-[47px] h-[47px]  flex justify-center items-center`}   >
            <HamburgerMenu /> 
        </button>
        <div className={`  hidden  md:hidden ${openSearch ? "xs:hidden" : "xs:block"} `}>
        <Link href={"/"}>
      <LogoIcon/>
      </Link>
        </div>
        <div className={`${openSearch ? "w-full" : "w-auto"}  md:w-6/12 tablet:w-7/12  lg:w-8/12 transition-all duration-300`}>
        <Searchbox open={openSearch} setOpen={setOpenSearch} />
        </div> 
        
        <div className='md:w-6/12 lg:w-4/12 md:flex justify-end items-center gap-2 hidden'>
            <button className='btn-notification'>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M11.837 3.78931C12.0113 3.35847 12.3103 2.98951 12.6957 2.72971C13.0811 2.46991 13.5352 2.33112 14 2.33112C14.4648 2.33112 14.9189 2.46991 15.3043 2.72971C15.6897 2.98951 15.9887 3.35847 16.163 3.78931C17.8882 4.26377 19.41 5.29146 20.4946 6.71453C21.5791 8.1376 22.1666 9.87737 22.1667 11.6666V17.1465L24.304 20.3525C24.4212 20.5282 24.4886 20.7324 24.4988 20.9434C24.509 21.1543 24.4618 21.3641 24.3622 21.5504C24.2625 21.7366 24.1142 21.8923 23.933 22.0008C23.7518 22.1094 23.5446 22.1667 23.3333 22.1666H18.0425C17.902 23.1386 17.4161 24.0274 16.6737 24.6702C15.9312 25.3131 14.9821 25.6669 14 25.6669C13.0179 25.6669 12.0688 25.3131 11.3263 24.6702C10.5839 24.0274 10.098 23.1386 9.9575 22.1666H4.66667C4.45545 22.1667 4.24819 22.1094 4.06699 22.0008C3.88579 21.8923 3.73746 21.7366 3.63781 21.5504C3.53817 21.3641 3.49095 21.1543 3.5012 20.9434C3.51145 20.7324 3.57877 20.5282 3.696 20.3525L5.83333 17.1465V11.6666C5.83333 7.90531 8.37667 4.73664 11.837 3.78931ZM12.3503 22.1666C12.4708 22.5081 12.6942 22.8037 12.9898 23.0128C13.2854 23.222 13.6385 23.3342 14.0006 23.3342C14.3626 23.3342 14.7158 23.222 15.0114 23.0128C15.3069 22.8037 15.5303 22.5081 15.6508 22.1666H12.3492H12.3503ZM14 5.83331C12.4529 5.83331 10.9692 6.44789 9.87521 7.54185C8.78125 8.63581 8.16667 10.1195 8.16667 11.6666V17.5C8.16672 17.7304 8.09852 17.9557 7.97067 18.1475L6.84717 19.8333H21.1517L20.0282 18.1475C19.9007 17.9556 19.8329 17.7303 19.8333 17.5V11.6666C19.8333 10.1195 19.2188 8.63581 18.1248 7.54185C17.0308 6.44789 15.5471 5.83331 14 5.83331Z" fill="#E3E3E3"/>
                </svg>
            </button>
            <button  type='button' className="btn btn-sm btn-outline-primary">ورود</button>
            <button  type='button' className="btn btn-sm btn-primary">ثبت نام </button>
        </div>
    </div>
    </header>
  )
}

export default Header