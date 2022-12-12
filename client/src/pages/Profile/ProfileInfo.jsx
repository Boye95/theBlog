import React from 'react'
import { FaUserCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProfileInfo = ({ user }) => {
  const about = user?.data?.registeredUser?.about
  const avatar = user?.data?.registeredUser?.avatar

  return (
    <div className='w-11/12 mx-auto flex flex-col items-center mt-8'>
      <div className='h-[10rem] w-[10rem] border-2 border-gray-400 shadow-xl rounded-lg ring-1 ring-black ring-offset-2 hover:ring-emerald-700 overflow-hidden'>
        {avatar ? (
          <img src={avatar.url} alt='' className='h-full w-full' />
        ) : (
          <img
            src='https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'
            alt=''
            className='h-full w-full '
          />
        )}
      </div>

      <div className='mt-5 font-sfproth text-lg text-gray-700 uppercase'>
        {user?.data?.registeredUser?.name}
      </div>

      <div className='flex flex-col items-start mt-4 w-3/6 sm:w-full sm:items-center'>
        <p className='font-sfprod italic '>About me</p>
        <p className='font-sfprotr sm:text-center'>
          {about !== ''
            ? about
            : 'No about me yet!. Edit your profile to add one.'}
        </p>
      </div>
      <Link
        to='/'
        className='flex items-center gap-2 bg-blue-400 p-2 mt-4 rounded font-sfprod transition hover:bg-blue-200'
      >
        <p className=''>Edit Your Profile </p>
        <FaUserCog />
      </Link>
    </div>
  )
}

export default ProfileInfo
