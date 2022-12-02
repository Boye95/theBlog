import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import typew from '../../assets/typewriter.png'
import GoogleSignIn from './GoogleSignIn'


export default function Register () {
  // show/hide password logic
  const [showPass, setShowPass] = useState(false)

  let handleShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <div className='flex'>
      <div className='rounded-lg w-3/6 bg-gradient-to-b from-orange-300 to-orange-700 h-screen flex justify-center items-center ham:hidden'>
        <img src={typew} alt='' className='h-3/5 w-auto' />
      </div>
      <div className='w-3/6 ham:w-full'>
        <div id='signup' className='bg-white flex flex-col items-center '>
          <h2 className='font-nylarge font-bold text-gray-800 text-3xl mt-12 text-center mx-auto sm:text-xl sm:mt-9'>
            Register and Get your Blog On!
          </h2>
          <div id='form-body' className='mt-24 sm:mt-12'>
            <div className='font-sfprotr flex items-center justify-center mx-auto gap-2 py-1 w-60 border-2 border-black rounded-2xl hover:border-gray-400'>
              <GoogleSignIn actionText='signup_with' />
            </div>
            <p className='mx-4 my-4 font-sfprotr text-lg sm:text-center'>or</p>
            <h1 className='font-bold font-sfprod text-2xl text-gray-700 mx-4 sm:text-center'>
              Sign up with Email.
            </h1>
            <p className='mt-4 text-gray-700 mx-4 font-sfprotr'>
              Let's create your account,
            </p>

            <form className='mt-4  mx-4'>
              <div className='grid grid-cols-2 gap-6 font-sfprotr sm:grid-cols-1'>
                <div className='flex flex-col '>
                  <label htmlFor='name'>Name</label>
                  <input
                    className='mt-2 h-8 border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-black ring-offset-2'
                    type='text'
                    id='full-name'
                    name='name'
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='mail'>Email</label>
                  <input
                    className='mt-2 h-8 border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-black ring-offset-2'
                    type='email'
                    id='mail'
                    name='mail'
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='pass'>Password</label>
                  <div className='flex items-center mt-2 h-8  border border-gray-700 rounded outline-none focus-within:ring-4 ring-black ring-offset-2'>
                    <input
                      className='h-7 w-5/6 outline-none p-2'
                      type={showPass ? 'text' : 'password'}
                      id='pass'
                      name='pass'
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

                <div className='flex flex-col'>
                  <label htmlFor='pass2'>Confirm Password</label>
                  <div className='flex items-center mt-2 h-8  border border-gray-700 rounded outline-none focus-within:ring-4 ring-black ring-offset-2'>
                    <input
                      className='h-7 w-5/6 outline-none p-2'
                      type={showPass ? 'text' : 'password'}
                      id='pass2'
                      name='pass2'
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
              </div>

              <button
                type='submit'
                className='mt-7 flex mx-auto px-20 ring-black ring-offset-2 ring-2 py-2 text-gray-100 font-bold font-sfprotr text-lg bg-black rounded-lg outline-none transition-colors hover:ring-0'
              >
                Register Me
              </button>
            </form>
          </div>

          <div className='my-8'>
            <p className='font-sfprotr'>
              Already a member?{' '}
              <span className='font-bold font-sfprotr'>
                <Link
                  to='/login'
                  className='text-black hover:underline'
                  href='#'
                >
                  Log in
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
