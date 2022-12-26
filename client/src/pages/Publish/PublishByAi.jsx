import React from 'react'

export default function PublishByAi () {
  return (
    <div className='flex flex-col items-center w-full mx-auto'>
      {/* form to create blogposts using Open Ai */}
      <div className='w-full max-w-[1050px] mx-auto '>
        <input
          type='text'
          className='w-5/6 ring-gray-700 ring-offset-2 ring-2 border-2 text-3xl px-3 font-nylarge transition 
                focus:border-emerald-300 focus:ring-emerald-300 focus:shadow-emerald-300 focus:shadow-[0_0_15px] sm:text-2xl'
        />
        <button 
            type='submit' 
            className='w-1/6'>
          Generate
        </button>
      </div>
    </div>
  )
}
