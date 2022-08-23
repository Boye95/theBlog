import React from 'react'

import img1 from '../assets/postimages/1.png'

export default function BlogPost () {
  return (
    <div className=''>
      <div id='article1' className='flex flex-col items-center'>
        <h1 className='font-nylarge w-3/6 text-4xl text-center mt-7'>
          A few words about this blog platform, Ghost, and how this site was
          made
        </h1>
        <h3 className='font-sfmono text-lg w-2/5 text-center mt-8'>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </h3>
        <img src={img1} alt='mainpost' className='w-full h-auto mt-8' />
      </div>
    </div>
  )
}
