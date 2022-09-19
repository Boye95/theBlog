import React from 'react'

export default function Newsletter () {
  return (
    <div className='flex flex-col items-center gap-8 border-2 border-t-[15px] border-black p-12 ham:p-8'>
      <h1 className='font-nylarge text-3xl text-center ham:text-2xl'>Sign up for the newsletter</h1>
      <p className='font-sfprotr text-center ham:text-sm'>
        If you want relevant updates occasionally, sign up for the private
        newsletter. Your email is never shared.
      </p>
      <form action='/' method='post' className=''>
        <div className='flex font-sfprotr border-2 border-black h-11 w-[25rem] ham:w-[20rem] xs:w-[18rem]'>
          <input
            type='email'
            placeholder='Enter your email...'
            className='outline-none w-4/6 h-full p-1'
          />
          <div className='font-sfprotr text-white flex justify-center items-center bg-black w-3/6 h-full transition-all hover:bg-gray-600'>
            SIGN UP
          </div>
        </div>
      </form>
    </div>
  )
}
