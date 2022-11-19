import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const fetchTags = async data => {
  const res = await axios.post('http://127.0.0.1:4000/api/tags', data)
  return res
}

export default function Tags () {
  const { mutate, isLoading } = useMutation(fetchTags)
  const [tags, setTags] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    const tgs = {
      name: tags
    }
    console.log(tgs)
    mutate(tgs)
  }

  return (
    <div className='text-center bg-red-200 h-[13rem]'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='tags'
          onChange={e => setTags(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}
