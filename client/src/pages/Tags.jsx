import React, { useState } from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const getTags = async () => {
  const { data } = await axios.get('http://127.0.0.1:4000/api/tags')
  return data
}

export default function Tags () {
  const [tags, setTags] = useState([])
  const { data, isLoading, error } = useQuery(['tags'], getTags)
  console.log(data)


  return (
    <div className=''>
      
    </div>
  )
}
