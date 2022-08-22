import React from 'react'

import img1 from '../assets/postimages/1.png'

export default function BlogsLists () {
  return (
    <div className='w-3/5 mx-auto bg-red-300 mt-9'>
      <div id='article1' className='flex flex-col items-center'>
        <img src={img1} alt='mainpost' className='w-full' />
        <h1 className='font-nylarge w-4/5 text-3xl text-center mt-7'>
          A few words about this blog platform, Ghost, and how this site was
          made
        </h1>
        <h3 className='font-sfmono text-lg w-3/5 text-center mt-8'>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </h3>
      </div>
    </div>
  )
}
