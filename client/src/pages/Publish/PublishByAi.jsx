import React from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export default function PublishByAi ({ setPrompt }) {
  //   const [prompt, setPrompt] = useState('')

  return (
    <div className='flex flex-col items-center w-full mx-auto'>
      {/* form to create blogposts using Open Ai */}
      <div className='w-full flex gap-2 max-w-[1050px] mx-auto '>
        <input
          type='text'
          name='prompt'
          id='prompt'
          placeholder='Prompt...'
          onChange={e => setPrompt(e.target.value)}
          className='w-5/6 ring-gray-700 ring-offset-2 ring-2 border-2 text-3xl px-3 font-nylarge transition 
                focus:border-emerald-300 focus:ring-emerald-300 focus:shadow-emerald-300 focus:shadow-[0_0_15px] sm:text-2xl'
        />
        <button
          onClick={() => console.log('generate')}
          className='w-1/6 py-2 h-full border-2 border-violet-700 shadow-[5px_5px_0px_0px_rgba(109,40,217)]'
        >
          Generate
        </button>
      </div>
    </div>
  )
}
