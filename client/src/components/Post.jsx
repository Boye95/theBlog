import React from 'react'
import img2 from '../assets/postimages/2.png'

export default function Post () {
  return (
    <div>
      <div id='blog' className='text-center'>
        <img src={img2} alt='' />
        <p className='font-sfprod mt-4 mx-auto w-11/12'>
          Here are some things you should know regarding how we work
        </p>
      </div>
    </div>
  )
}
