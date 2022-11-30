import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function TagItem ({ tag, tagState, setTagState }) {
  const [tagSelected, setTagSelected] = useState(false)

  const handleTags = e => {
    if (e.target.checked) {
      if (tagState.length < 3) {
        setTagState([...tagState, e.target.value])
        setTagSelected(true)
      } else {
        e.target.checked = false
      }
    } else {
      setTagState(tagState.filter(tag => tag !== e.target.value))
      setTagSelected(false)
    }
  }
  return (
    <div className='flex items-center gap-2'>
      <label
        htmlFor={tag._id}
        className={`flex items-center gap-2 cursor-pointer
        border-2 border-gray-700 ring-gray-700 ring-offset-2 ring-2 
                  rounded-md px-2 py-1 my-2 mx-2 transition-all hover:text-white
                  hover:bg-gray-700 hover:border-gray-800 
                  hover:ring-gray-800
                  ${tagSelected ? 'text-white bg-gray-700 border-gray-800 ring-offset-1' : ''}`}
      >
        <input
          type='checkbox'
          name='tags'
          id={tag._id}
          value={tag.name}
          className='hidden'
          onChange={handleTags}
        />
        <p className=''>{tag.name}</p>
        {tagSelected ? (
          <AiOutlineMinus className='text-xl' />
        ) : (
          <AiOutlinePlus className='text-xl' />
        )}
      </label>
    </div>
  )
}
