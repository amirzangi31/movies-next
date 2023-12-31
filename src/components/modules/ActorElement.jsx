import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ActorElement = (props) => {
  return (
    <Link href={'/'}  className='w-[100px] block  h-[100px] rounded-full  overflow-hidden shadow-sh-black '>
        <Image src={props.thumbnail} width={200} height={200} alt='actor' className='w-full h-full bg-cover' /> 
    </Link>
  )
}

export default ActorElement
