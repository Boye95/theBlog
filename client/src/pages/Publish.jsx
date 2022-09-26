import React, { useState } from 'react'
import avatar from '../assets/avatar.png'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

export default function Publish () {

  return (
    <div className='mt-5'>
      <div className='w-11/12 mx-auto flex justify-between px-2 py-4 mb-5 bg-white border-b-4 shadow-xl border-gray-600 fixed top-0 z-10 ham:w-full sm:px-4 '>
        <h1 className='text-xl font-sfprotr font-semibold sm:text-[17px]'>
          Tell a Story, Boye
        </h1>

        <div className='flex gap-3 items-center'>
          <Link
            to='/'
            className='text-white bg-black rounded p-1 font-sfprod px-8 ring-2 ring-gray-700 ring-offset-2 transition hover:bg-gray-600 hover:ring-gray-400 sm:px-4'
          >
            Publish
          </Link>
          <Link
            to='/'
            className='flex items-center gap-2 bg-gray-300 rounded p-1 transition hover:bg-gray-100'
          >
            <BiArrowBack className='sm:text-2xl' />
            <p className='sm:text-[13px] sm:hidden'>Blog Home</p>
          </Link>
          <Link to='/profile' className='relative '>
            <span className='flex h-3 w-3 absolute -right-2 top-0'>
              <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
            </span>
            <div className='h-8 w-8 cursor-pointer rounded-full overflow-hidden ring ring-gray-600 ring-offset-2 hover:ring-blue-400'>
              <img src={avatar} alt='' className='h-full w-full' />
            </div>
          </Link>
        </div>
      </div>

      <div className="h-screen mt-[4.5rem]"></div>
    </div>
  )
}
