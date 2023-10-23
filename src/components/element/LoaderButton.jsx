import React from 'react'
import { Rings } from 'react-loader-spinner'

const LoaderButton = () => {
  return (
    <Rings
        height="60"
        width="60"
        color="#fff"
        
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
    />
  )
}

export default LoaderButton