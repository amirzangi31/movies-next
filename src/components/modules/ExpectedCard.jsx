import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ExpectedCard = () => {
  return (
    <div className='relative'>
        <Image src={"/banner.png" } width={800} height={800} alt='banner'   className='w-full' /> 
        <Link href={"/"} className='absolute top-0 left-0 w-full h-full' ></Link>
    </div>
  )
}

export default ExpectedCard