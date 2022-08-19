import React from 'react'

export default function Header () {
  return (
    <header className='border-b-2'>
      <div className='w-5/6 mx-auto h-20 flex justify-between items-center'>
        <div className='uppercase w-3/5 font-zeit text-4xl'>ónyé ńkúzí</div>
        <nav className='w-2/5 flex justify-evenly font-nysmall'>
          <a href='#'>Blog</a>
          <a href='#'>About</a>
          <a href='#'>Links</a>
          <a href='#'>Projects</a>
        </nav>
      </div>
    </header>
  )
}
