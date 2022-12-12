import React from 'react'
import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { AuthContext } from '../authcontext/Context'
import { useSignout } from '../hooks/useSignout'

import { motion, AnimatePresence } from 'framer-motion'

export default function Header () {
  const { user, dispatch } = useContext(AuthContext)
  const { signout } = useSignout()

  // Navbar display script
  let [showMenu, setShowMenu] = useState(false)

  let handleShowMenu = () => {
    setShowMenu(!showMenu)

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden'
    }
    if (showMenu) {
      document.body.style.overflow = 'auto'
    }
  }
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    borderBottom: '2px solid black'
  }

  let activeClassName = '2px solid black'

  return (
    <header className={`border-b-2 w-full`}>
      <div className='w-5/6 mx-auto h-20 flex justify-between items-center ham:w-full ham:px-4'>
        <NavLink
          to='/'
          className='uppercase w-3/6 font-zeit text-4xl md:text-2xl md:w-4/6 lg:text-3xl'
        >
          ónyé ńkúzí
        </NavLink>
        <nav className='w-3/6 h-full flex justify-between items-center font-nysmall ham:hidden'>
          <NavLink
            to='/'
            className='navlink'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Blog
          </NavLink>
          <NavLink
            to='/tags'
            className='navlink'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Tags
          </NavLink>
          {user && (
            <NavLink
              to='/publish'
              className='navlink'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Publish
            </NavLink>
          )}
          {user ? (
            <button onClick={signout} className='navlink'>
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to='/login'
                className='navlink'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Login
              </NavLink>
              <NavLink
                to='/register'
                className='navlink'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Register
              </NavLink>
            </>
          )}
          {/* <NavLink to='/project' className='navlink'>Projects</NavLink> */}

          {user && (
            <NavLink
              to='/profile'
              className='relative'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className='flex h-3 w-3 absolute -right-2 -top-2'>
                <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-300 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
              </span>
              <div
                // onClick={handleShowEdit}
                className='h-8 w-8 cursor-pointer rounded-sm border shadow-xl overflow-hidden ring-1 ring-gray-600 ring-offset-2 transition-shadow hover:ring-2 hover:ring-emerald-400'
              >
                {!user.data.registeredUser.avatar ? (
                  <img
                    src='https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'
                    alt=''
                    className='w-full'
                  />
                ) : (
                  <img
                    src={user.data.registeredUser.avatar.url}
                    alt=''
                    className='w-full'
                  />
                )}
              </div>
            </NavLink>
          )}
        </nav>

        <div className='relative'>
          {user && (
            <span className='flex h-3 w-3 absolute -right-0.5 top-0.5'>
              <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-300 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
            </span>
          )}
          <FiMenu
            className='hidden cursor-pointer ham:flex'
            size={38}
            onClick={handleShowMenu}
          />
        </div>
      </div>

      {/* Hamburger nav conditional display code */}
      <motion.div
        animate={{ x: showMenu ? 0 : '100%' }}
        className={
          showMenu
            ? 'z-10 flex flex-col absolute top-0 right-0 pt-5 bg-gray-50 h-full w-full rounded shadow-2xl overflow-hidden'
            : 'hidden'
        }
      >
        <div
          className={`mt-1 mr-3 flex items-center pl-4 p-2 px-2 ${
            !user ? 'justify-end' : 'justify-between'
          }`}
        >
          {user && (
            <NavLink
              to='/profile'
              className='relative'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className='flex h-3 w-3 absolute -right-2 -top-2'>
                <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-300 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
              </span>
              <div
                // onClick={handleShowEdit}
                className='h-8 w-8 cursor-pointer rounded-sm border shadow-xl overflow-hidden ring-1 ring-gray-600 ring-offset-2 transition-shadow hover:ring-2 hover:ring-emerald-400'
              >
                {user.data.registeredUser.avatar ? (
                  <img
                    src={user.data.registeredUser.avatar.url}
                    alt=''
                    className='w-full'
                  />
                ) : (
                  <img
                    src='https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'
                    alt=''
                    className='w-full'
                  />
                )}
              </div>
            </NavLink>
          )}
          <GrClose
            className='cursor-pointer rounded ring-2'
            size={30}
            onClick={handleShowMenu}
          />
        </div>
        <div className='z-40 h-full flex flex-col justify-center items-center gap-4 text-lg font-sfproth'>
          <NavLink
            to='/'
            className='navlinks'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleShowMenu}
          >
            Blog
          </NavLink>
          <NavLink
            to='/tags'
            className='navlinks'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleShowMenu}
          >
            Tags
          </NavLink>
          {user && (
            <NavLink
              to='/publish'
              className='navlinks'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={handleShowMenu}
            >
              Publish
            </NavLink>
          )}
          {user ? (
            <button
              onClick={() => {
                signout()
                handleShowMenu()
              }}
              className='navlinks'
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to='/login'
                className='navlinks'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={handleShowMenu}
              >
                Login
              </NavLink>
              <NavLink
                to='/register'
                className='navlinks'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={handleShowMenu}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </motion.div>
    </header>
  )
}
