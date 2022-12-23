import React from 'react'
import { Link } from 'react-router-dom'

export default function Post ({ post }) {
  return (
    <div>
      <div
        id='blog'
        className='flex flex-col justify-center items-center sm:w-4/5 md:w-4/5 md:mx-auto'
      >
        <Link to={`/blogpost/${post?._id}`}>
          <img src={post?.displayImage.url} alt='' className='w-80 aspect-video object-cover' />
        </Link>
        <Link to={`/blogpost/${post?._id}`}>
          <p className='font-sfprod mt-4 text-center hover:underline'>
            {post?.title}
          </p>
        </Link>
      </div>
    </div>
  )
}
