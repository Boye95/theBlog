import React, { useState } from 'react'
import { Link, useSearchParams, useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Post from '../../components/Post'
// import PostByTag from './PostsByTag'
import axios from 'axios'

const getTags = async () => {
  const { data } = await axios.get('http://127.0.0.1:4000/api/tags')
  return data
}
export default function Tags () {
  const [searchParams, setSearchParams] = useSearchParams()
  const [tags, setTags] = useState([])
  const { data, isLoading, error } = useQuery(['tags'], getTags)
  // console.log(data)
  const taglist = data?.data?.tags
  // console.log(taglist)

  const location = useLocation()
  const tagQuery = location.search.split('=')[1]
  const [squery, setSquery] = useState()
  // console.log(tagQuery)
  const fetchTagPosts = async () => {
    const res = await fetch(
      `http://localhost:4000/api/blogposts?tags=${squery}`
    )
    return res.json()
  }
  const {
    data: tagData,
    isLoading: tagLoading,
    error: tagError
  } = useQuery(['tagPosts'], fetchTagPosts)
  const tagPosts = tagData?.data?.posts
  console.log(tagPosts)
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-wrap justify-center'>
        {data &&
          taglist.map(tag => {
            return (
              <div
                onClick={() => {
                  setSearchParams({ tags: tag.name })
                  setSquery(tag.name)
                  console.log('clicke me')
                }}
                key={tag._id}
                className='flex gap-2 bg-white rounded-lg shadow-lg w-fit mx-4
               my-2 p-2 border hover:shadow-md hover:ring hover:ring-gray-300 
               hover:ring-opacity-50 hover:ring-offset-2 hover:ring-offset-gray-100 
               hover:bg-emerald-400 hover:text-white transition duration-300 ease-in-out
               transform hover:-translate-y-1 hover:scale-102 
               [&] cursor-pointer'
              >
                <p>{tag.name}</p>
                <p
                  className='border rounded-full w-6 h-6 flex justify-center items-center
              font-bold bg-emerald-400 text-white'
                >
                  5
                </p>
              </div>
            )
          })}
      </div>
      <div className='flex flex-col gap-3 items-center justify-center mt-6'>
        <h2 className='text-center text-2xl'>
          {tagQuery ? `Posts under ${tagQuery} tag` : ''}
        </h2>
        <div className='grid grid-cols-3 gap-6 gap-y-8 mb-20 lg:grid-cols-2 sm:grid-cols-1'>
          {tagLoading ? (
            <p>Loading Posts...</p>
          ) : (
            tagPosts.map(post => {
              return <Post key={post._id} post={post} />
            })
          )}
        </div>
      </div>
    </div>
  )
}
