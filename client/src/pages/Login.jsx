import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import type from '../../src/assets/typewriter.png'

export default function Login () {
  // show/hide password logic
  const [showPass, setShowPass] = useState(false)

  let handleShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <div className='flex'>
      <div className='rounded-lg w-3/6 bg-gradient-to-b from-gray-300 to-black h-screen flex justify-center items-center ham:hidden'>
        <img src={type} alt='' className='h-3/5 w-auto' />
      </div>
      <div className='w-3/6 ham:w-full'>
        <div id='signin' className='bg-white flex flex-col items-center '>
          <h2 className='font-nylarge font-bold text-gray-800 text-3xl mt-12 text-center mx-auto sm:text-2xl sm:mt-9'>
            It's nice to have you back!
          </h2>
          <div id='form-bodylogin' className='mt-24 sm:mt-12'>
            <div className='font-sfprotr flex items-center justify-center mx-auto gap-2 py-1 w-60 border-2 border-black rounded-2xl hover:border-gray-400'>
              <FcGoogle className='' />
              <p className=''>Sign in with Google</p>
            </div>
            <p className='mx-4 my-4 font-sfprotr text-lg sm:text-center'>or</p>
            <h1 className='font-bold font-sfprod text-2xl text-gray-700 mx-4 sm:text-center'>
              Sign in with Email.
            </h1>

            <form className='mt-4  mx-4'>
              <div className='flex flex-col gap-6 font-sfprotr'>
                <div className='flex flex-col'>
                  <label htmlFor='mail'>Email</label>
                  <input
                    className='mt-2 h-8 border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-black ring-offset-2'
                    type='email'
                    id='maill'
                    name='mail'
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='passs'>Password</label>
                  <div className='flex items-center mt-2 h-8  border border-gray-700 rounded outline-none focus-within:ring-4 ring-black ring-offset-2'>
                    <input
                      className='h-7 w-5/6 outline-none p-2'
                      type={showPass ? 'text' : 'password'}
                      id='passs'
                      name='passs'
                      required
                    />
                    {showPass ? (
                      <VscEyeClosed
                        className='mx-auto cursor-pointer'
                        onClick={handleShowPass}
                      />
                    ) : (
                      <VscEye
                        className='mx-auto cursor-pointer'
                        onClick={handleShowPass}
                      />
                    )}
                  </div>
                </div>

                <button
                  type='submit'
                  className='mt-2 flex mx-auto px-28 py-2 ring-black ring-offset-2 ring-2 text-gray-100 font-bold font-sfprotr text-lg bg-black rounded-lg outline-none transition-colors hover:ring-0'
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className='my-8'>
            <p className='font-sfprotr'>
              Not a member?{' '}
              <span className='font-bold font-sfprotr'>
                <Link to='/register' className='text-black hover:underline' href='#'>
                  Register
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
