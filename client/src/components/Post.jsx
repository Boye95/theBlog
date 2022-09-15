import React from 'react'
import img2 from '../assets/postimages/2.png'

export default function Post () {
  return (
    <div>
      <div id='blog' className='flex flex-col justify-center items-center bg-red-200'>
        <img src={img2} alt='' className='w-80' />
        <p className='font-sfprod mt-4 text-center'>
          Here are some things you should know regarding how we work
        </p>
      </div>
    </div>
  )
}
