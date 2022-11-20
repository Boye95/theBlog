import React from 'react'
import { Link } from 'react-router-dom'
import img2 from '../assets/postimages/2.png'

export default function Post ({ post }) {
  return (
    <div>
      <div
        id='blog'
        className='flex flex-col justify-center items-center sm:w-4/5 md:w-4/5 md:mx-auto'
      >
        <Link to='/blogpost'>
          <img src={post.displayImage.url} alt='' className='w-80' />
        </Link>
        <Link to='/blogpost'>
          <p className='font-sfprod mt-4 text-center hover:underline'>
            {post.title}
          </p>
        </Link>
      </div>
    </div>
  )
}
