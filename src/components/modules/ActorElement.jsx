import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ActorElement = () => {
  return (
    <div  className='w-[100px] block  h-[100px] rounded-full  overflow-hidden shadow-sh-black '>
        <Image src={"/actor-two.png"} width={200} height={200} alt='actor' className='w-full h-full bg-cover' /> 
    </div>
  )
}

export default ActorElement
