import React from 'react'
import moon from '../assets/moon.jpg'

export default function Register () {
  return (
    <div className='flex'>
      <div className='w-3/6'>
        <img src={moon} alt='' className='h-screen rounded-lg' />
      </div>
      <div className='w-3/6'>
        <div id='signup' className='bg-white flex flex-col items-center '>
          <h2 className='font-nylarge font-bold text-gray-800 text-3xl mt-12 text-center mx-auto'>
            Register and Get your Blog On!
          </h2>
          <div id='form-body' className='mt-24'>
            <h1 className='font-bold font-sfprod text-2xl text-gray-700 mx-4'>Sign up.</h1>
            <p className='mt-4 text-gray-700 mx-4 font-sfprotr'>
              Let's create your account,
            </p>

            <form className='mt-4  mx-4'>
              <div className='grid grid-cols-2 gap-6 font-sfprotr'>
                <div className='flex flex-col '>
                  <label for='name'>Name</label>
                  <input
                    className='mt-2 h-8 border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-black'
                    type='text'
                    id='full-name'
                    name='name'
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label for='mail'>Email</label>
                  <input
                    className='mt-2 h-8 border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-black'
                    type='email'
                    id='mail'
                    name='mail'
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label for='pass'>Password</label>
                  <input
                    className='mt-2 h-8  border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-black'
                    type='password'
                    id='pass'
                    name='pass'
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label for='pass2'>Confirm Password</label>
                  <input
                    className='mt-2 h-8  border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-black'
                    type='password'
                    id='pass2'
                    name='pass2'
                    required
                  />
                </div>
              </div>

              <button
                type='submit'
                className='mt-7 flex mx-auto px-28 py-2 text-gray-100 font-bold font-sfprotr text-lg bg-black rounded-sm outline-none '
              >
                Register Me
              </button>
            </form>
          </div>

          <div className='my-8'>
            <p className='font-sfprotr'>
              Already a member?{' '}
              <span className='font-bold font-sfprotr'>
                <a className='text-black' href='#'>
                  Log in
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
