import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../assets/postimages/1.png'
import img2 from '../assets/postimages/2.png'
import Post from './Post'

export default function BlogsLists () {
  return (
    <div className='w-3/5 mx-auto mt-9 xl:w-4/5 lg:w-full'>
      <Link to='/blogpost'>
        <div
          id='article1'
          className='flex flex-col items-center border-b-2 pb-11'
        >
          <img src={img1} alt='mainpost' className='w-4/5 lg:w-full' />
          <h1 className='font-nylarge w-4/5 text-4xl text-center mt-7 md:text-xl'>
            A few words about this blog platform, Ghost, and how this site was
            made
          </h1>
          <h3 className='font-sfmono text-lg w-3/5 text-center mt-8 md:text-base md:w-4/5'>
            Why Ghost (& Figma) instead of Medium, WordPress or other options?
          </h3>
        </div>
      </Link>

      <div id='all__articles' className='w-3/5 mt-7 mx-auto md:w-full'>
        <h3 className='mt-8 text-center font-nylarge text-2xl'>All Articles</h3>

        <div
          id='bloglists'
          className='mt-7 grid grid-cols-2 justify-center gap-6 gap-y-8 mb-20 md:grid-cols-1 md:justify-center'
        >
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}
