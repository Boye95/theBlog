import { useState } from 'react'
import avatar from '../assets/avatar.png'
import img4 from '../assets/postimages/4.png'
import { Link } from 'react-router-dom'
import { FaUserCog } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { GoBook } from 'react-icons/go'

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
const PersonalBlog = () => {
  return (
    <div className='w-11/12 flex flex-wrap gap-6 mb-9 ham:w-full sm:justify-center'>
      <Link
        to='/blogpost'
        className='flex flex-col gap-3 h-[25rem] w-[20rem] border-4 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2'
      >
        <img src={img4} alt='' className='w-full rounded-sm' />
        <div className='overflow-hidden w-full p-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci
          esse voluptatibus quos perspiciatis laborum minima laudantium eum ab
          libero, dolore, facere optio alias nostrum debitis exercitationem
          commodi nam? Quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio adipisci esse voluptatibus quos perspiciatis
        </div>
      </Link>
      <Link
        to='/blogpost'
        className='flex flex-col gap-3 h-[25rem] w-[20rem] border-4 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2'
      >
        <img src={img4} alt='' className='w-full rounded-sm' />
        <div className='overflow-hidden w-full p-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci
          esse voluptatibus quos perspiciatis laborum minima laudantium eum ab
          libero, dolore, facere optio alias nostrum debitis exercitationem
          commodi nam? Quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio adipisci esse voluptatibus quos perspiciatis
        </div>
      </Link>
      <Link
        to='/blogpost'
        className='flex flex-col gap-3 h-[25rem] w-[20rem] border-4 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2'
      >
        <img src={img4} alt='' className='w-full rounded-sm' />
        <div className='overflow-hidden w-full p-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci
          esse voluptatibus quos perspiciatis laborum minima laudantium eum ab
          libero, dolore, facere optio alias nostrum debitis exercitationem
          commodi nam? Quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio adipisci esse voluptatibus quos perspiciatis
        </div>
      </Link>
      <Link
        to='/blogpost'
        className='flex flex-col gap-3 h-[25rem] w-[20rem] border-4 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2'
      >
        <img src={img4} alt='' className='w-full rounded-sm' />
        <div className='overflow-hidden w-full p-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci
          esse voluptatibus quos perspiciatis laborum minima laudantium eum ab
          libero, dolore, facere optio alias nostrum debitis exercitationem
          commodi nam? Quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio adipisci esse voluptatibus quos perspiciatis
        </div>
      </Link>
      <Link
        to='/blogpost'
        className='flex flex-col gap-3 h-[25rem] w-[20rem] border-4 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2'
      >
        <img src={img4} alt='' className='w-full rounded-sm' />
        <div className='overflow-hidden w-full p-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci
          esse voluptatibus quos perspiciatis laborum minima laudantium eum ab
          libero, dolore, facere optio alias nostrum debitis exercitationem
          commodi nam? Quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio adipisci esse voluptatibus quos perspiciatis
        </div>
      </Link>
    </div>
  )
}

const EditProfile = () => {
  return <div className=''>hdhehfhdhr</div>
}

const Profile = () => {
  const [active, setActive] = useState('profile')

  // let handleActive = () => {
  //   setActive(!active)
  // }

  return (
    <div className='flex'>
      <div className='scroll-no flex flex-col mx-auto pt-9 w-[90%] max-w-[1300px] ham:w-full'>
        <div className='w-full flex justify-between py-4 px-11 fixed top-0 left-[50%] -translate-x-[50%] z-10 bg-white shadow-lg sm:px-4'>
          <div className='text-xl font-sfprotr font-semibold sm:text-[17px]'>
            Welcome Home, Boye.
          </div>
          <div className='relative flex gap-3 items-center'>
            <Link
              to='/'
              className='flex items-center gap-2 bg-gray-300 rounded p-1 transition hover:bg-gray-100'
            >
              <BiArrowBack className='sm:text-2xl' />
              <p className='sm:text-[13px] sm:hidden'>Blog Home</p>
            </Link>
            <Link to='/profile' className='relative'>
              <span className='flex h-3 w-3 absolute -right-2 top-0'>
                <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-300 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
              </span>
              <div
                // onClick={handleShowEdit}
                className='h-8 w-8 cursor-pointer rounded-full overflow-hidden ring ring-gray-600 ring-offset-2 hover:ring-blue-400'
              >
                <img src={avatar} alt='' className='h-full w-full' />
              </div>
            </Link>
          </div>
        </div>

        <div
          className='w-full flex justify-between items-center font-sfprod text-lg shadow-lg mt-[3rem] mb-8 
          [&>*]:cursor-pointer [&>*]:w-2/6 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-2 
          [&>*]:p-1 [&>*]:sm:text-3xl ham:w-full fixed left-0'
        >
          <div
            className={
              active === 'profile'
                ? 'bg-green-50 border-b-2 border-black'
                : 'border-hidden'
            }
            onClick={() => setActive('profile')}
          >
            <CgProfile />
            <p className='sm:hidden'>Profile</p>
          </div>
          <div
            className={
              active === 'posts'
                ? 'bg-green-50 border-b-2 border-black'
                : 'border-hidden'
            }
            onClick={() => setActive('posts')}
          >
            <GoBook />
            <p className='sm:hidden'>Your Blog Posts</p>
          </div>
          <div
            className={
              active === 'edit'
                ? 'bg-green-50 border-b-2 border-black'
                : 'border-hidden'
            }
            onClick={() => setActive('edit')}
          >
            <FaUserCog />
            <p className='sm:hidden'>Edit Your Profile</p>
          </div>
        </div>

        <div className='mt-[6rem] pt-4 px-1 h-[83vh] overflow-scroll'>
          {active === 'profile' ? (
            <ProfileInfo />
          ) : active === 'posts' ? (
            <PersonalBlog />
          ) : active === 'edit' ? (
            <EditProfile />
          ) : (
            undefined
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
