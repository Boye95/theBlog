import React from 'react'
import Post from '../../components/Post'
import { useQuery } from '@tanstack/react-query'
import { AiFillTag } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'

const fetchPostsByTag = async tag => {
  const res = await axios.get(
    `https://theblogxapi.onrender.com/api/blogposts?tags=${tag}`
  )
  return res.data
}

export default function PostByTag () {
  const location = useLocation()
  const tag = location.pathname.split('/')[2]
  const { data, isLoading, error } = useQuery(['postsByTag', tag], () =>
    fetchPostsByTag(tag)
  )
  const posts = data?.data?.posts
  // check if tag has percentage sign
  const hasPercentage = tag.includes('%')
  // remove percentage sign from tag
  const tagWithoutPercentage = tag.replace('%20', ' ')

  return (
    <div className='font-sfproth w-3/6 border-b-2 border-black mx-auto ham:w-11/12 xl:w-4/6'>
      <Helmet>
        <title>{`${tagWithoutPercentage} | theBlogX`}</title>
        <meta
          name='description'
          content={`This page contains a list of blog posts with the ${tagWithoutPercentage} tag`}
        />
        <link rel='canonical' href={`/tags/${tag}`} />
      </Helmet>
      <header className='mt-5 flex items-center gap-2 border-b-2 border-black'>
        <AiFillTag className='text-2xl' />
        <h1 className='text-3xl font-bold text-gray-800'>
          {hasPercentage ? tagWithoutPercentage : tag}
        </h1>
        <div className='text-2xl flex'>
          <p className='relative top-0 left-1 text-emerald-500'>
            {posts?.length}
          </p>
          <p className='relative top-0 -left-2.5 text-red-700 transition-all hover:-translate-y-0.5'>
            {posts?.length}
          </p>
          <p className='relative top-0 -left-7 transition-all hover:-translate-y-0.5'>
            {posts?.length}
          </p>
        </div>
      </header>

      <div className='mt-5 grid grid-cols-3 gap-6 gap-y-8 mb-20 lg:grid-cols-2 sm:grid-cols-1'>
        {isLoading ? (
          <div className=''>Loading...</div>
        ) : (
          posts?.map(post => {
            return <Post key={post._id} post={post} />
          })
        )}
      </div>
    </div>
  )
}
