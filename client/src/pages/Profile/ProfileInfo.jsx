import React from 'react'
import avatar from '../../assets/avatar.png'
import { FaUserCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProfileInfo = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col items-center mt-8'>
      <div className='h-[10rem] w-[10rem] border-2 border-emerald-200 ring-2 ring-emerald-400 ring-offset-2 hover:ring-emerald-700 rounded-full overflow-hidden'>
        <img src={avatar} alt='' className='h-full w-full ' />
      </div>

      <div className='mt-5 font-sfproth text-lg text-gray-700'>
        ADEBOYE FOLARANMI
      </div>

      <div className='flex flex-col items-start mt-4 w-3/6 sm:w-full sm:items-center'>
        <p className='font-sfprod italic '>About me</p>
        <p className='font-sfprotr sm:text-center'>
          ADEBOYE FOLARANMI is a Design Founder & Advisor, Berlin School of
          Creative Leadership Executive MBA participant, Zippie advisor, Wolt
          co-founder, and Nordic Rose stakeholder.
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
