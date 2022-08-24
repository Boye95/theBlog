import React from 'react'
import sun from '../assets/sun.jpg'
import { FcGoogle } from 'react-icons/fc'

export default function Login () {
  return (
    <div className='flex'>
      <img src={sun} alt='' className='h-screen rounded-lg w-3/6' bg-cover />
      <div className='w-3/6'>
        <div id='signin' className='bg-white flex flex-col items-center '>
          <h2 className='font-nylarge font-bold text-gray-800 text-3xl mt-12 text-center mx-auto'>
            It's nice to have you back!
          </h2>
          <div id='form-bodylogin' className='mt-24'>
            <div className='font-sfprotr flex items-center justify-center mx-auto gap-2 py-1 w-60 border-2 border-black rounded-2xl hover:border-1'>
              <FcGoogle className='' />
              <p className=''>Sign in with Google</p>
            </div>
            <p className='mx-4 my-4 font-sfprotr text-lg'>or</p>
            <h1 className='font-bold font-sfprod text-2xl text-gray-700 mx-4'>
              Sign in with Email.
            </h1>

            <form className='mt-4  mx-4'>
              <div className='flex flex-col gap-6 font-sfprotr'>
                <div className='flex flex-col'>
                  <label for='mail'>Email</label>
                  <input
                    className='mt-2 h-8 border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-black'
                    type='email'
                    id='maill'
                    name='mail'
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label for='passs'>Password</label>
                  <input
                    className='mt-2 h-8  border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-black'
                    type='password'
                    id='passs'
                    name='passs'
                    required
                  />
                </div>

                <button
                  type='submit'
                  className='mt-2 flex mx-auto px-28 py-2 text-gray-100 font-bold font-sfprotr text-lg bg-black rounded-sm outline-none '
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
                <a className='text-black' href='#'>
                  Register
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
