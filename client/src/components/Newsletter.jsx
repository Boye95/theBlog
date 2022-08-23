import React from 'react'

export default function Newsletter () {
  return (
    <div className='flex flex-col items-center gap-8 border-2 border-t-[15px] border-black p-12'>
      <h1 className='font-nylarge text-3xl'>Sign up for the newsletter</h1>
      <p className='font-sfprotr text-center'>
        If you want relevant updates occasionally, sign up for the private
        newsletter. Your email is never shared.
      </p>
      <form action='/' method='post' className=''>
        <div className='font-sfprotr border-2 border-black h-11 w-auto'>
          <input type='email' placeholder='Enter your email...' className='outline-none w-64 h-full p-1' />
          <button type='submit' className='font-sfprotr text-white bg-black w-40 h-full transition-all hover:bg-gray-600'>SIGN UP</button>
        </div>
      </form>
    </div>
  )
}
