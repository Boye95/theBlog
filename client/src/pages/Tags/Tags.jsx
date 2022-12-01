import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Post from '../../components/Post'
import PostByTag from './PostsByTag'
import { AiFillTag } from 'react-icons/ai'
import axios from 'axios'

const getTags = async () => {
  const { data } = await axios.get('http://127.0.0.1:4000/api/tags')
  return data
}
export default function Tags () {
  const [tags, setTags] = useState([])
  const { data, isLoading, error } = useQuery(['tags'], getTags)
  // console.log(data)
  const taglist = data?.data?.tags

  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-wrap justify-center'>
        {data &&
          taglist.map(tag => {
            console.log(tag)
            return (
              <Link
                to={`/tags/${tag.name}`}
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
                  <AiFillTag />
                </p>
              </Link>
            )
          })}
      </div>
    </div>
  )
}
