import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'

const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
        <OrbitProgress variant="split-disc" color="#494949" size="medium" text="" textColor="" />
        <h1 className='text-md font-bold'>Loading....</h1>
    </div>
  )
}

export default Loader