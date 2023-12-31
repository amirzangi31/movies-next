"use client"

import Sidebar from "@layout/Sidebar";
import Header from "@layout/Header";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/store/features/userSlice";




const Layout = ({ children }) => {
  const [openMenu , setOpenMenu] = useState(false)
  const pathname = usePathname()

  


  useEffect(() => {
      setOpenMenu(false)
  } , [pathname])



  // change style navbar for scroll element
  const [navStyle , setNavStyle ] = useState(false)
  const scrollHandler =(e) => {
      if(e.target.scrollTop >= 1){
        setNavStyle(true)
      }else {
        setNavStyle(false)
      }
  } 

  return (
    <div className=" relative after:absolute after:w-full after:h-screen after:top-0 after:left-0 after:bg-bg-overlay/90 after:z-0  h-screen  flex justify-between items-start bg-hero-pattern bg-cover bg-norepeat 
     ">
      <Sidebar open={openMenu} setOpen={setOpenMenu} />
    
      <main className="content" onScroll={scrollHandler}>
        
        <Header scroll={navStyle} setOpen={setOpenMenu} /> 
        
        
        <div className="pt-4 px-6">{children}</div>
      </main>
      <Toaster position="top-left"   />
    </div>
  );
};

export default Layout;
