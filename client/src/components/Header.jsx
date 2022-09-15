import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

export default function Header () {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    borderBottom: '2px solid black'
  }

  let activeClassName = '2px solid black'

  return (
    <header className='border-b-2 w-ful'>
      <div className='w-5/6 mx-auto h-20 flex justify-between items-center'>
        <NavLink to='/' className='uppercase w-3/6 font-zeit text-4xl'>
          ónyé ńkúzí
        </NavLink>
        <nav className='w-3/6 h-full flex justify-between items-center font-nysmall'>
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
      </div>
    </header>
  )
}
