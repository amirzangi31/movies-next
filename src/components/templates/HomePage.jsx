import React from 'react'
import LayoutContent from '../layout/LayoutContent'
import BannerPrimary from '../modules/BannerPrimary'
import Link from 'next/link'

const HomePage = () => {
  return (
    <LayoutContent>
        <BannerPrimary /> 
        <div>
          <Link href={"/fa"} locale="fa"  className='btn btn-sm btn-primary' >فارسی</Link>
        <br />
          <Link href={"/en"} locale="en"  className='btn btn-sm btn-primary' >انگلیسی</Link>
        </div>
    </LayoutContent>
  )
}

export default HomePage