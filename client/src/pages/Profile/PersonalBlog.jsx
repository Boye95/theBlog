import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AuthContext } from '../../AuthContext/Context'
import Post from '../../components/Post'

const PersonalBlog = () => {
  const { user } = useContext(AuthContext)
  const authorID = user?.data?.registeredUser?._id

  const fetchByAuthor = async () => {
    const post = await axios.get(
      `http://localhost:4000/api/blogposts/author/${authorID}`
    )
    return post.data
  }

  const { data, isLoading, isError, isSuccess } = useQuery(
    ['authorpost'],
    fetchByAuthor
  )
  const posts = data?.data?.posts

  return (
    <div className='w-11/12 mx-auto flex flex-col gap-2 items-center'>
      {data && (
        <div className='flex gap-2 text-2xl font-bold  '>
          <p className=''>Post Count:</p>
          <div className='flex'>
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
        </div>
      )}
      <div id='bloglists' className='mt-1 flex flex-wrap gap-6 md:flex-col'>
        {isLoading
          ? 'Loading...'
          : isError
          ? 'Error getting posts'
          : isSuccess
          ? posts.map((post, index) => {
              return (
                <div
                  id='blog'
                  key={index}
                  className='flex flex-col bg-gray-100 w-[15rem] rounded-lg  
                  gap-2 transition-shadow hover:shadow-md'
                >
                  <Link to={`/blogpost/${post?._id}`}>
                    <img src={post?.displayImage.url} alt='' className='w-80' />
                  </Link>
                  <Link to={`/blogpost/${post?._id}`}>
                    <p className='font-sfprod p-2 text-center hover:underline'>
                      {post?.title}
                    </p>
                  </Link>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default PersonalBlog
