import { useState } from 'react'
import avatar from '../assets/avatar.png'
import img4 from '../assets/postimages/4.png'
import { Link } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'

const ProfileInfo = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col items-center mt-8'>
      <div className='h-[10rem] w-[10rem] border-2 border-emerald-200 ring-2 ring-emerald-400 ring-offset-2 hover:ring-emerald-700 rounded-full overflow-hidden'>
        <img src={avatar} alt='' className='h-full w-full ' />
      </div>

      <div className='mt-5 font-sfproth text-lg text-gray-700'>
        ADEBOYE FOLARANMI
      </div>

      <div className='flex flex-col items-start mt-4 w-3/6 '>
        <p className='font-sfprod italic '>About me</p>
        <p className='font-sfprotr'>
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
        <FaUserEdit />
      </Link>
    </div>
  )
}
const PersonalBlog = () => {
  return (
    <div className='w-11/12 grid gap-6 mb-9 ham:w-full'>
      <div className='flex gap-3 h-52 w-full border-2 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2 sm:flex-col sm:h-auto'>
        <img src={img4} alt='' className='w-2/5 sm:w-full sm:' />
        <div className='overflow-hidden w-3/5 sm:w-full sm:p-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci
          esse voluptatibus quos perspiciatis laborum minima laudantium eum ab
          libero, dolore, facere optio alias nostrum debitis exercitationem
          commodi nam? Quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio adipisci esse voluptatibus quos perspiciatis
        </div>
      </div>
      <div className='flex gap-3 h-52 w-full border-2 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2 sm:flex-col sm:h-auto'>
        <img src={img4} alt='' className='w-2/5 sm:w-full sm:' />
        <div className='overflow-hidden w-3/5 sm:w-full sm:p-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci
          esse voluptatibus quos perspiciatis laborum minima laudantium eum ab
          libero, dolore, facere optio alias nostrum debitis exercitationem
          commodi nam? Quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio adipisci esse voluptatibus quos perspiciatis
        </div>
      </div>
      <div className='flex gap-3 h-52 w-full border-2 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2 sm:flex-col sm:h-auto'>
        <img src={img4} alt='' className='w-2/5 sm:w-full sm:' />
        <div className='overflow-hidden w-3/5 sm:w-full sm:p-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci
          esse voluptatibus quos perspiciatis laborum minima laudantium eum ab
          libero, dolore, facere optio alias nostrum debitis exercitationem
          commodi nam? Quibusdam? Lorem ipsum dolor sit amet consectetur
        </div>
      </div>
      <div className='flex gap-3 h-52 w-full border-2 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2 sm:flex-col sm:h-auto'>
        <img src={img4} alt='' className='w-2/5 sm:w-full sm:' />
        <div className='overflow-hidden w-3/5 sm:w-full sm:p-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci
          esse voluptatibus quos perspiciatis laborum minima laudantium eum ab
          libero, dolore, facere optio alias nostrum debitis exercitationem
          commodi nam? Quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio adipisci esse voluptatibus quos perspiciatis
        </div>
      </div>
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
    <div className='flex '>
      <div className='scroll-no flex flex-col mx-auto pt-9 w-[90%] max-w-[1300px] ham:w-full'>
        <div className='w-full flex justify-between py-4 px-11 fixed top-0 left-[50%] -translate-x-[50%] z-10 bg-white shadow-lg'>
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

        <div className='w-11/12 flex justify-start gap-3 items-end mt-[3rem] mb-8 ham:w-full fixed'>
          <div 
          className='text-xl w-fit p-1 bg-green-50 font-sfprod border-b-4 border-black cursor-pointer ham:text-lg sm:border-b-4'
          onClick={() => setActive('profile')}
          >
            Profile
          </div>
          <div className='text-xl w-fit p-1 bg-green-50 font-sfprod border-b-4 border-black cursor-pointer ham:text-lg sm:border-b-4'
          onClick={() => setActive('posts')}
          >
            Your Blog Posts
          </div>
          <div className='flex items-center text-xl p-1 gap-1 w-fit bg-green-50 font-sfprod border-b-4 border-black cursor-pointer ham:text-lg sm:border-b-4'
          onClick={() => setActive('edit')}
          >
            <FaUserEdit />
            <p className=''> Edit Your Profile</p>
          </div>
        </div>

        <div className='mt-[8rem]'>
          {active === 'profile' ? <ProfileInfo /> : active === 'posts' ? <PersonalBlog /> : active === 'edit' ? <EditProfile /> : undefined}
        </div>
      </div>
    </div>
  )
}

export default Profile
