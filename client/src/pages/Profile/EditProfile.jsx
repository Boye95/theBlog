import React from 'react'
import avatar from '../../assets/avatar.png'
import { RiImageAddLine } from 'react-icons/ri'

const EditProfile = () => {
  return (
    <div className=''>
      <h2 className='text-xl font-sfproth bg-green-100 p-1 w-fit border-black border-b-2'>
        Update Your Profile.
      </h2>
      <label htmlFor='changeAvatar' className='flex w-[10rem] h-[10rem] cursor-pointer'>
        <input type='file' id='changeAvatar' className='hidden' />
        <div className='h-[10rem] w-[10rem] border-2 border-emerald-200 ring-2 ring-emerald-400 ring-offset-2 hover:ring-emerald-700 rounded-full overflow-hidden'>
          <RiImageAddLine className='text-3xl opacity-60 relative top-[40%] left-[50%] -translate-x-[50%]' />

          <img src={avatar} alt='' className='h-full w-full opacity-20' />
          {/* Edit Profilee page */}
          
        </div>
      </label>
    </div>
  )
}

export default EditProfile
