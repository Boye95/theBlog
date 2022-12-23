import { useState, useContext, useEffect } from 'react'
// import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom'
import { FaUserCog } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { GoBook } from 'react-icons/go'

import { AuthContext } from '../../context/Context'
import { useSignout } from '../../hooks/useSignout'

// import profile components
import ProfileInfo from './ProfileInfo'
import PersonalBlog from './PersonalBlog'
import EditProfile from './EditProfile'

const Profile = () => {
  const { user } = useContext(AuthContext)
  const avatar = user?.data?.registeredUser?.avatar
  const { signout } = useSignout()

  const [showAction, setShowAction] = useState(false)
  const [active, setActive] = useState('profile')

  // slice user first name out if they have one
  const firstName = user?.data?.registeredUser?.name.split(' ')[0]

  // set body overflow to to visible when page loads
  useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [])

  return (
    <div className='flex h-auto'>
      <div className='scroll-no flex flex-col mx-auto pt-9 w-[90%] max-w-[1300px] ham:w-full'>
        <div className='w-full flex justify-between py-4 px-11 fixed top-0 left-[50%] -translate-x-[50%] z-10 bg-white shadow-lg sm:px-4'>
          <div className='text-xl font-nylarge font-semibold sm:text-[17px]'>
            {`Hi 👋, ${firstName}.`}
          </div>
          <div className='relative flex gap-3 items-center'>
            <Link
              to='/'
              className='flex items-center gap-2 bg-gray-300 rounded p-1 transition hover:bg-gray-100'
            >
              <BiArrowBack className='sm:text-2xl' />
              <p className='sm:text-[13px] sm:hidden'>Blog Home</p>
            </Link>
            <div
              className='relative'
              onClick={() => {
                setShowAction(!showAction)
              }}
            >
              {/* <span className='flex h-3 w-3 absolute -right-2 -top-2'>
                <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-300 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
              </span> */}
              <div className='h-8 w-8 cursor-pointer shadow-xl rounded-sm overflow-hidden border ring-1 ring-gray-600 ring-offset-2 transition-shadow hover:ring-2'>
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
              {showAction && (
                <div className='z-50 absolute mt-1 -right-1 bg-black text-white rounded-sm shadow-lg font-sfprod transition-shadow'>
                  <Link
                    to='/profile'
                    className='py-2 px-4 transition-all hover:opacity-40'
                  >
                    Profile
                  </Link>
                  <button
                    onClick={signout}
                    className='py-1 px-3 transition-all hover:opacity-40'
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className='w-full h-[3rem] bg-green-200 flex justify-between items-center font-nymedium text-lg shadow-lg mt-[2rem] mb-8 
          [&>*]:h-full [&>*]:cursor-pointer [&>*]:w-2/6 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-2 
          [&>*]:p-1 [&>*]:sm:text-3xl ham:w-full fixed left-0'
        >
          <div
            className={
              active === 'profile'
                ? 'bg-green-50 border-b-2 border-black shadow-xl'
                : 'border-hidden transition hover:bg-green-100'
            }
            onClick={() => setActive('profile')}
          >
            <CgProfile />
            <p className='sm:hidden'>Profile</p>
          </div>
          <div
            className={
              active === 'posts'
                ? 'bg-green-50 border-b-2 border-black shadow-xl'
                : 'border-hidden transition hover:bg-green-100'
            }
            onClick={() => setActive('posts')}
          >
            <GoBook />
            <p className='sm:hidden'>Your Blog Posts</p>
          </div>
          <div
            className={
              active === 'edit'
                ? 'bg-green-50 border-b-2 border-black shadow-xl'
                : 'border-hidden transition hover:bg-green-100'
            }
            onClick={() => setActive('edit')}
          >
            <FaUserCog />
            <p className='sm:hidden'>Settings</p>
          </div>
        </div>

        <div className='mt-[6rem] pt-4 px-1 w-[100%] h-[83vh] overflow-scroll'>
          {active === 'profile' ? (
            <ProfileInfo user={user} />
          ) : active === 'posts' ? (
            <PersonalBlog />
          ) : active === 'edit' ? (
            <EditProfile user={user} />
          ) : undefined}
        </div>
      </div>
    </div>
  )
}

export default Profile
