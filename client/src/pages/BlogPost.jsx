import React from 'react'

import img1 from '../assets/postimages/1.png'
import avatar from '../assets/avatar.png'
import { FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa'

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
        <img src={img1} alt='mainpost' className='mt-8' />
      </div>

      <div className='mt-8 w-3/6 border-t-2 border-black mx-auto'>
        <div id='postinfo' className='mt-8 flex'>
          <div className='flex gap-2 w-3/6'>
            <img src={avatar} alt='' className='w-12 rounded-3xl' />
            <div className=''>
              <h4 className='font-sfproth'>ADEBOYE FOLARANMI</h4>
              <div className='font-sfprotr'>
                <span>Apr 15, 2022 </span>
                <span>· 4 min read</span>
              </div>
            </div>
          </div>
          <div className='flex w-3/6 justify-end items-center gap-2'>
            <div className='border-2 px-2 py-1'>
              <FaFacebookSquare className='w-8 h-6' />
            </div>
            <div className='border-2 px-2 py-1'>
              <FaTwitterSquare className='w-8 h-6' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
