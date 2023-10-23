"use client"

import ArrowDownIcon from '@/icons/ArrowDownIcon'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Divider from '../element/Divider'
import Link from 'next/link'
import SettingsIcon from '@/icons/SettingsIcon'
import SubIcon from '@/icons/SubIcon'
import LogoutIcon from '@/icons/LogoutIcon'
import { usePathname } from 'next/navigation'
import ArrowUpIcon from '@/icons/ArrowUpIcon'
import { useTranslations } from 'next-intl'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchUser } from '@/store/features/userSlice'

const ButtonIsSign = () => {
  const t = useTranslations("DropSign")
    const [open  , setOpen] = useState(false)
  const pathname = usePathname()
  const dispatch = useDispatch()

  useEffect(() => {
      setOpen(false)
  } , [pathname])

  const openHandler = () => {
    
    setOpen(!open)
    
  }

  const logoutHandler = async() =>{
    try {
      const res = await axios("/api/auth/signout")
      const data = res.data
      dispatch(fetchUser())
    } catch (error) {
        console.log(error)      
    }
      
  }




  return (
    <div className='btn-is-sign'>
    <button type='button'  
      onClick={openHandler}
      className='btn-is-sign__button'
    >
        <div className='flex justify-between items-center px-2'>
        {open ? <ArrowUpIcon />  : <ArrowDownIcon />}
        <p className='text-text mx-2 text-md'>امیرمحمد</p> 
        </div>
        <Image src={"/prof.png"} width={47} height={47} alt='profile-image' /> 
    </button>
    {open && <div className='fixed top-0 left-0  w-full h-screen' onClick={() => setOpen(false)}></div>}
    <div className={`btn-is-sign__drop ${open && "active"} `}>
            <Link href={"/"} className='btn-is-sign__link'>
              <SettingsIcon /> 
              {t("settings")}
            </Link>
            <Divider />
            <Link href={"/"} className='btn-is-sign__link'>
              <SubIcon /> 
              {t("subscription")} : 60 {t("day")}
            </Link>
            <Divider /> 
            <button type='button'  className='btn-is-sign__link' onClick={logoutHandler}>
              <LogoutIcon /> 
              {t("logout")}
            </button>
    </div>
    </div>
  )
}

export default ButtonIsSign