import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'

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
        <NavLink to='/' className='uppercase w-3/6 font-zeit text-4xl md:text-2xl md:w-4/6 lg:text-3xl'>
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
        </nav>

        <FiMenu className='hidden cursor-pointer ham:flex' size={38} onClick={handleShowMenu} />
      </div>

      {/* Hamburger nav conditional display code */}
      <div className={showMenu ? 'flex flex-col absolute top-0 bg-white h-full w-full transition-all ease-in z-10' : 'hidden'}>
        <div className='mt-6 flex justify-end pr-2'>
          <GrClose className='cursor-pointer' size={38} onClick={handleShowMenu} />
        </div>
        <div className='mt-8 flex flex-col items-center gap-4 text-lg font-nysmall'>
          <NavLink
            to='/'
            className='navlinks'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Blog
          </NavLink>
          <NavLink
            to='/about'
            className='navlinks'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to='/login'
            className='navlinks'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Login
          </NavLink>
          <NavLink
            to='/register'
            className='navlinks'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Register
          </NavLink>
          {/* <NavLink to='/project' className='navlink'>Projects</NavLink> */}
          <NavLink
            to='/publish'
            className='navlinks'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Publish
          </NavLink>
        </div>
      </div>
    </header>
  )
}
