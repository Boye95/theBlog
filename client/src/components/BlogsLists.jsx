import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import img1 from '../assets/postimages/1.png'
import img2 from '../assets/postimages/2.png'
import Post from './Post'

const fetchPosts = async () => {
  const res = await fetch('http://localhost:4000/api/blogposts')
  return res.json()
}

export default function BlogsLists () {
  const { data, isLoading, error } = useQuery(['posts'], fetchPosts)
  const posts = data?.data?.posts
  console.log(posts)
  return (
    <div className='w-3/5 mx-auto mt-9 xl:w-4/5 lg:w-full'>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data && (
        <div>
          <div
            id='article1'
            className='flex flex-col items-center border-gray-400 border-b-2 pb-11'
          >
            <Link to='/blogpost' className='w-4/5 lg:w-full lg:mx-auto'>
              <img src={posts[0].displayImage.url} alt='mainpost' className='lg:mx-auto w-full' />
            </Link>
            <Link
              to='/blogpost'
              className='font-nylarge w-4/5 text-4xl text-center mt-7 md:text-xl hover:underline'
            >
              <h1>
                {posts[0].title}
              </h1>
            </Link>
            <h3 className='font-sfmono text-lg w-3/5 text-center mt-8 md:text-base md:w-4/5'>
              {posts[0].subtitle}
            </h3>
          </div>

          <div id='all__articles' className='w-3/5 mt-7 mx-auto md:w-full'>
            <h3 className='mt-8 text-center font-nylarge text-2xl'>
              All Articles
            </h3>

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
      )}
    </div>
  )
}
