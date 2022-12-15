import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Post from './Post'

const fetchOtherPosts = async () => {
  const res = await fetch('http://localhost:4000/api/blogposts')
  return res.json()
}

export default function OtherArticles({post, path}) {
  // console.log(post)
  const { data, isLoading, error } = useQuery(['otherPosts'], fetchOtherPosts)
  const otherPosts = data?.data?.posts
  // console.log(otherPosts)

  return (
    <div className='mt-8 grid grid-cols-3 gap-6 gap-y-8 mb-20 lg:grid-cols-2 sm:grid-cols-1'>
      {data && otherPosts.map((otherPost, index) => {
        if (otherPost._id !== path) {
          return <Post key={otherPost._id} post={otherPost} />
        }
        if (otherPost.length === 0) return <p>There are no other posts</p>
        if (otherPost.length > 6) {
          return
        }
      })}
    </div>
  )
}
