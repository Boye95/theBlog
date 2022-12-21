import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import type from '../../assets/typewriter.png'
import GoogleSignIn from './GoogleSignIn'

import { useSignin } from '../../hooks/useSignin'

export default function Login () {
  // destructure signin function from useSignin hook
  const { signin, signinLoading, error, signinSuccess } = useSignin()

  // show/hide password logic
  const [showPass, setShowPass] = useState(false)

  // form items states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    const user = {
      email,
      password
    }
    signin(user)
    // console.log(user)
  }

  let handleShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center sm:h-auto sm:w-full'>
      <div className='flex w-[65%] h-[80%] rounded-lg xl:w-[70%] lg:w-[80%]
      shadow-[5px_5px_rgba(0,_0,_0,_0.4),_10px_10px_rgba(0,_0,_0,_0.3),_15px_15px_rgba(0,_0,_0,_0.2),_20px_20px_rgba(0,_0,_0,_0.1),_25px_25px_rgba(0,_0,_0,_0.05)]
      sm:shadow-none border-2 border-black sm:border-none'>
        <div className='rounded-lg w-2/6 bg-gradient-to-b from-gray-300 to-black  flex justify-center items-center ham:hidden'>
          <img src={type} alt='' className='h-3/5 w-auto' />
        </div>
        <div className='w-4/6 flex items-center justify-center ham:w-full'>
          <div id='signin' className='bg-white flex flex-col items-center gap-5'>
            <h2 className='font-nylarge font-bold text-gray-800 text-3xl text-center mx-auto sm:text-2xl sm:mt-9'>
              It's nice to have you back!
            </h2>
            <div id='form-bodylogin' className='sm:mt-12'>
              <div className='font-sfprotr flex items-center justify-center mx-auto gap-2 py-1 w-60 border-2 border-black rounded-2xl hover:border-gray-400'>
                <GoogleSignIn buttonText='Sign In with Google' />
              </div>
              <p className='mx-4 my-4 font-sfprotr text-lg sm:text-center'>
                or
              </p>
              <h1 className='font-bold font-sfprod text-2xl text-gray-700 mx-4 sm:text-center'>
                Sign in with Email.
              </h1>

              <form
                className='mt-4  mx-4'
                encType='multipart/form-data'
                onSubmit={handleLogin}
              >
                {error && (
                  <div className='w-full bg-red-500 rounded-lg p-2 font-sfmono mb-2'>
                    {error}
                  </div>
                )}
                <div className='flex flex-col gap-6 font-sfprotr'>
                  <div className='flex flex-col'>
                    <label htmlFor='mail'>Email</label>
                    <input
                      className='mt-2 h-8 border border-gray-700 rounded outline-none p-2 ring-2 transiton-all focus:ring-4 ring-black ring-offset-2'
                      type='email'
                      id='maill'
                      name='mail'
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label htmlFor='passs'>Password</label>
                    <div className='flex items-center mt-2 h-8  border border-gray-700 rounded outline-none ring-2 transiton-all focus-within:ring-4 ring-black ring-offset-2'>
                      <input
                        className='h-7 w-5/6 outline-none p-2'
                        type={showPass ? 'text' : 'password'}
                        id='passs'
                        name='passs'
                        onChange={e => setPassword(e.target.value)}
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
                    className='w-full justify-center mt-2 flex mx-auto px-8 ring-black ring-offset-2 ring-2 py-1 text-gray-100 font-bold font-sfprotr text-md bg-black rounded-lg outline-none transition-colors hover:ring-0'
                    disabled={signinLoading}
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
                  <Link
                    to='/register'
                    className='text-black hover:underline'
                    href='#'
                  >
                    Register
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
