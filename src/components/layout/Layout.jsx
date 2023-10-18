import React from "react";
import Sidebar from "@layout/Sidebar";
import Header from "@layout/Header";

const Layout = ({ children }) => {
  return (
    <div className=" relative after:absolute after:w-full after:h-screen after:top-0 after:left-0 after:bg-bg-overlay/90 after:z-0  h-screen  flex justify-between items-start bg-hero-pattern bg-cover bg-norepeat 
     ">
      <Sidebar />
      
      <div className="content">
        
        <Header /> 
        
        
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
