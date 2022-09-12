import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className='border-b-2'>
      <div className='w-5/6 mx-auto h-20 flex justify-between items-center'>
        <Link to='/' className='uppercase w-3/5 font-zeit text-4xl'>ónyé ńkúzí</Link>
        <nav className='w-2/5 flex justify-evenly font-nysmall'>
          <Link to='/' className='hover:text-gray-400'>Blog</Link>
          <Link to='/about' className='hover:text-gray-400'>About</Link>
          <Link to='/login' className='hover:text-gray-400'>Login</Link>
          <Link to='/register' className='hover:text-gray-400'>Register</Link>
          {/* <Link to='/project' className='hover:text-gray-400'>Projects</Link> */}
          <Link to='/publish' className='hover:text-gray-400'>Publish</Link>
        </nav>
      </div>
    </header>
  )
}
