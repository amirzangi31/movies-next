import React from 'react'
import SideContent from '../modules/SideContent'

const LayoutContent = ({children}) => {
  return (
    <div className='flex justify-between items-start '>
        <div className='w-[calc(100%-180px)] rtl:pl-6 ltr:pr-6'>
                {children}
        </div>

        <SideContent /> 
    </div>
  )
}

export default LayoutContent