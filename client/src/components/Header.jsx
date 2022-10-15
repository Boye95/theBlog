import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import avatar from '../assets/avatar.png'

export default function Header () {
  // Navbar display script
  let [showMenu, setShowMenu] = useState(false)

  let handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    borderBottom: '2px solid black'
  }

  let activeClassName = '2px solid black'

  return (
    <header className='border-b-2 w-full'>
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
            to='/about'
            className='navlink'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
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
          {/* <NavLink to='/project' className='navlink'>Projects</NavLink> */}
          <NavLink
            to='/publish'
            className='navlink'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Publish
          </NavLink>

          <NavLink
            to='/profile'
            className='relative'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
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
          </NavLink>
        </nav>

        <FiMenu
          className='hidden cursor-pointer ham:flex'
          size={38}
          onClick={handleShowMenu}
        />
      </div>

      {/* Hamburger nav conditional display code */}
      <div
        className={
          showMenu
            ? 'flex flex-col absolute top-5 right-0 bg-gray-50 h-auto w-3/6 rounded shadow-2xl overflow-hidden'
            : 'hidden'
        }
      >
        <div className='mt-1 mr-3 flex justify-end pr-2 '>
          <GrClose
            className='cursor-pointer rounded ring-2'
            size={30}
            onClick={handleShowMenu}
          />
        </div>
        <div className='mt-8 pb-9 flex flex-col items-center gap-4 text-lg font-sfprod'>
          <NavLink
            to='/'
            className='navlinks'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleShowMenu}
          >
            Blog
          </NavLink>
          <NavLink
            to='/about'
            className='navlinks'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleShowMenu}
          >
            About
          </NavLink>
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
          {/* <NavLink to='/project' className='navlink'>Projects</NavLink> */}
          <NavLink
            to='/publish'
            className='navlinks'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleShowMenu}
          >
            Publish
          </NavLink>
        </div>
      </div>
    </header>
  )
}
