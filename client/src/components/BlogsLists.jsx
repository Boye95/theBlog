import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import Post from './Post'

const fetchPosts = async () => {
  const res = await fetch('https://theblogxapi.onrender.com/api/blogposts')
  return res.json()
}

export default function BlogsLists () {
  const { data, isLoading, error } = useQuery(['posts'], fetchPosts)
  const posts = data?.data?.posts
  // console.log(posts)
  return (
    <div className='w-3/5 mx-auto mt-9 xl:w-4/5 lg:w-full'>
      {isLoading && (
        <div className='flex justify-center items-center h-screen'>
          <div role='status'>
            <svg
              aria-hidden='true'
              class='w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
            <span class='sr-only'>Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className='flex justify-center items-center h-screen'>
          <h1 className='text-2xl font-nylarge'>Something went wrong</h1>
        </div>
      )}
      {data && (
        <div>
          <div
            id='article1'
            className='flex flex-col items-center border-gray-400 border-b-2 pb-11'
          >
            <Link
              to={`/blogpost/${posts[0]?._id}`}
              className='w-4/5 lg:w-full lg:mx-auto'
            >
              <img
                src={posts[0]?.displayImage?.url}
                alt='mainpost'
                className='lg:mx-auto w-full aspect-video object-cover'
              />
            </Link>
            <Link
              to={`/blogpost/${posts[0]?._id}`}
              className='font-nylarge w-4/5 text-4xl text-center mt-7 sm:w-[95%] md:text-xl hover:underline'
            >
              <h1>{posts[0]?.title}</h1>
            </Link>
            <h3 className='font-sfmono text-lg w-3/5 text-center mt-8 md:text-base md:w-4/5'>
              {posts[0]?.subtitle}
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
              {posts.map((post, index) => {
                if (index > 0) {
                  return <Post key={post?._id} post={post} />
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
