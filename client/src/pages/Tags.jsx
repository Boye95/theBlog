import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchTags = async () => {
  const { data } = await axios.get('http://127.0.0.1:4000/api/blogposts')
  return data
}
console.log(fetchTags())

export default function Tags () {
  const { data, status } = useQuery(['tags'], fetchTags)
  const [tags, setTags] = useState([])

  const finalData = data?.data.posts
  return (
    <div className='text-center bg-red-200 h-[13rem]'>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>Error fetching data</div>
      ) : status === 'success' ? (
        <div>{
            finalData.map((tag) => {
                return (
                    <div key={tag._id}>
                    <p>{tag.title}</p>
                    </div>
                )
            })    
        }</div>
      ) : null}
    </div>
  )
}
