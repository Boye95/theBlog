import { useState } from 'react'
import avatar from '../assets/avatar.png'
import img4 from '../assets/postimages/4.png'
import { Link } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'

const Profile = () => {
  const [showEdit, setShowEdit] = useState(false)

  let handleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  return (
    <div className='flex '>
      <div className='scroll-no flex flex-col mx-8 pt-9 w-4/6 h-screen overflow-scroll border-blue-200 border-r-2 ham:w-full ham:border-none ham:overflow-visible'>
        <div className='w-11/12 flex justify-between px-2 mb-5 ham:w-full'>
          <div className='text-xl font-sfprotr font-semibold sm:text-[15px]'>
            Welcome Home, Boye.
          </div>
          <div className='relative flex gap-3 items-center'>
            <Link to='/' className='flex items-center gap-2 bg-gray-300 rounded p-1 transition hover:bg-gray-100'>
              <BiArrowBack />
              <p className='sm:text-[13px]'>Blog Home</p>
            </Link>
            <div
              onClick={handleShowEdit}
              className='h-8 w-8 cursor-pointer rounded-full overflow-hidden ring ring-gray-600 ring-offset-2 hover:ring-blue-400'
            >
              <img src={avatar} alt='' className='h-full w-full' />
            </div>
            <Link
              to='/'
              className={
                showEdit
                  ? 'absolute top-11 right-0 w-[6rem] text-center rounded p-1 bg-gray-200 text-blue-800 hover:bg-gray-400'
                  : 'hidden'
              }
            >
              Edit Profile
            </Link>
          </div>
        </div>
        <div className='text-2xl w-fit p-2 mb-8 font-sfprod border-b-8 border-black sm:text-lg sm:border-b-4'>
          Your Blog Posts
        </div>
        <div className='w-11/12 flex flex-col gap-6 mb-9 ham:w-full'>
          <div className='flex gap-3 h-52 w-full border-2 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2 sm:flex-col sm:h-auto'>
            <img src={img4} alt='' className='w-2/5 sm:w-full sm:' />
            <div className='overflow-hidden w-3/5 sm:w-full sm:p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Odio adipisci esse
              voluptatibus quos perspiciatis laborum minima laudantium eum ab
              libero, dolore, facere optio alias nostrum debitis exercitationem
              commodi nam? Quibusdam?
            </div>
          </div>
          <div className='flex gap-3 h-52 w-full border-2 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2 sm:flex-col sm:h-auto'>
            <img src={img4} alt='' className='w-2/5 sm:w-full sm:' />
            <div className='overflow-hidden w-3/5 sm:w-full sm:p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Odio adipisci esse
              voluptatibus quos perspiciatis laborum minima laudantium eum ab
              libero, dolore, facere optio alias nostrum debitis exercitationem
              commodi nam? Quibusdam?
            </div>
          </div>
          <div className='flex gap-3 h-52 w-full border-2 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2 sm:flex-col sm:h-auto'>
            <img src={img4} alt='' className='w-2/5 sm:w-full sm:' />
            <div className='overflow-hidden w-3/5 sm:w-full sm:p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Odio adipisci esse
              voluptatibus quos perspiciatis laborum minima laudantium eum ab
              libero, dolore, facere optio alias nostrum debitis exercitationem
              commodi nam? Quibusdam?
            </div>
          </div>
          <div className='flex gap-3 h-52 w-full border-2 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2 sm:flex-col sm:h-auto'>
            <img src={img4} alt='' className='w-2/5 sm:w-full sm:' />
            <div className='overflow-hidden w-3/5 sm:w-full sm:p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Odio adipisci esse
              voluptatibus quos perspiciatis laborum minima laudantium eum ab
              libero, dolore, facere optio alias nostrum debitis exercitationem
              commodi nam? Quibusdam?
            </div>
          </div>
          <div className='flex gap-3 h-52 w-full border-2 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2 sm:flex-col sm:h-auto'>
            <img src={img4} alt='' className='w-2/5 sm:w-full sm:' />
            <div className='overflow-hidden w-3/5 sm:w-full sm:p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Odio adipisci esse
              voluptatibus quos perspiciatis laborum minima laudantium eum ab
              libero, dolore, facere optio alias nostrum debitis exercitationem
              commodi nam? Quibusdam?
            </div>
          </div>
        </div>
      </div>
      <div className='w-2/6 flex flex-col items-center mt-8 ham:hidden'>
        <div className='h-[10rem] w-[10rem] border-2 border-gray-200 ring-4 ring-gray-400 hover:ring-2 rounded-full overflow-hidden'>
          <img src={avatar} alt='' className='h-full w-full ' />
        </div>

        <div className='mt-5 font-sfproth text-lg text-gray-700'>
          ADEBOYE FOLARANMI
        </div>

        <Link
          to='/'
          className='flex items-center gap-2 bg-blue-400 p-2 mt-4 rounded font-sfprod transition hover:bg-blue-200'
        >
          <p className=''>Edit Your Profile </p>
          <FaUserEdit />
        </Link>
      </div>
    </div>
  )
}

export default Profile
