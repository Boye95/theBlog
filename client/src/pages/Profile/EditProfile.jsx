import React from 'react'
import avatar from '../../assets/avatar.png'
import { RiImageAddLine } from 'react-icons/ri'

const EditProfile = () => {
  return (
    <div className=''>
      <h2 className='text-xl font-nysmall bg-green-100 p-1 w-fit border-black border-b-2 sm:text-lg'>
        Update Your Profile.
      </h2>
      <form className='mt-[2rem] mb-8 flex flex-col items-center font-sfprod'>
        <div className=''>
          <label
            htmlFor='changeAvatar'
            className='flex justify-center w-[10rem] h-[10rem] cursor-pointer'
          >
            <input type='file' id='changeAvatar' className='hidden' />
            <div className='h-[8rem] w-[8rem] border-2 border-emerald-200 ring-2 ring-emerald-400 ring-offset-2 hover:ring-emerald-700 rounded-full overflow-hidden'>
              <RiImageAddLine className='text-3xl opacity-60 relative top-[40%] left-[50%] -translate-x-[50%]' />

              <img src={avatar} alt='' className='h-full w-full opacity-20' />
            </div>
          </label>
        </div>

        <div className='flex flex-col gap-4'>
          <label htmlFor='changeName' className='flex flex-col'>
            Name:
            <input
              type='text'
              id='changeName'
              placeholder='Update your name...'
              className='caret-red-700 rounded border-2 border-emerald-200 ring-2 ring-emerald-500 ring-inset ring-offset-2 ring-offset-emerald-400 w-[20rem] p-2 focus:ring-offset-1 focus:outline-none'
            />
          </label>
          <label htmlFor='changeMail' className='flex flex-col'>
            Email:
            <input
              type='email'
              id='changeMail'
              placeholder='Update your email...'
              className='caret-red-700 rounded border-2 border-emerald-200 ring-2 ring-emerald-500 ring-inset ring-offset-2 ring-offset-emerald-400 w-[20rem] p-2 focus:ring-offset-1 focus:outline-none'
            />
          </label>
          <label htmlFor='changePass' className='flex flex-col'>
            Password:
            <input
              type='password'
              id='changePass'
              placeholder='New Password...'
              className='caret-red-700 rounded border-2 border-emerald-200 ring-2 ring-emerald-500 ring-inset ring-offset-2 ring-offset-emerald-400 w-[20rem] p-2 focus:ring-offset-1 focus:outline-none'
            />
          </label>
          <label htmlFor='changePass2' className='flex flex-col'>
            Confirm Password:
            <input
              type='password'
              id='changePass2'
              placeholder='Confirm your new password...'
              className='caret-red-700 rounded border-2 border-emerald-200 ring-2 ring-emerald-500 ring-inset ring-offset-2 ring-offset-emerald-400 w-[20rem] p-2 focus:ring-offset-1 focus:outline-none'
            />
          </label>

          <button 
          type="submit"
          className='bg-emerald-600 text-white rounded border-2 border-emerald-200 ring-2 ring-emerald-500 ring-inset ring-offset-2 ring-offset-emerald-400 w-[20rem] p-2 focus:ring-offset-1 focus:outline-none'
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
