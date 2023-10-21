import React from 'react'
import SideContent from '../modules/SideContent'

const LayoutContent = ({children}) => {
  return (
    <div className='flex justify-between items-start '>
      
        <div className=' w-full  lg:w-[calc(100%-180px)] lg:rtl:pl-6 lg:ltr:pr-6'>
                {children}
        </div>

        <SideContent /> 
    </div>
  )
}

export default LayoutContent