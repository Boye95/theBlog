import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import typew from '../../assets/typewriter.png'
import GoogleSignIn from './GoogleSignIn'

import { useSignup } from '../../hooks/useSignup'

export default function Register () {
  // destructure signup function from useSignup hook
  const { signup, isLoading, isError, setIsError, isSuccess } = useSignup()
  // show/hide password logic
  const [showPass, setShowPass] = useState(false)

  // register form states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [avatar, setAvatar] = useState('')
  const [error, setError] = useState('')

  const handleRegister = e => {
    e.preventDefault()
    // check passowrd equals confirm password
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    } else {
      setError('')
    }
    const user = { name, email, password, avatar }
    signup(user)
    if (isError === '') {
      setIsError('')
    }
    console.log(user)
  }

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

            <form
              className='mt-4  mx-4'
              encType='multipart/form-data'
              onSubmit={handleRegister}
            >
              <div className=''>
                {error ? (
                  <div className='w-full bg-red-500 p-2 rounded-lg font-sfmono'>
                    {error}
                  </div>
                ) : isError ? (
                  isError === 'Password not strong enough' ? (
                    <div className='flex flex-col bg-red-500 p-2 rounded-lg font-sfmono'>
                      {isError}
                      <ul className='font-mono list-disc pl-5 text-sm'>
                        <li>Min. of 8 characters</li>
                        <li>Must contain at least one number</li>
                        <li>Must contain at least one special character</li>
                        <li>
                          Must contain a combination of uppercase and lowercase
                          letters
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className='w-full bg-red-500 p-2 rounded-lg font-sfmono'>
                      {isError}
                    </div>
                  )
                ) : null}
              </div>
              <div className='grid grid-cols-2 gap-6 font-sfprotr sm:grid-cols-1'>
                <div className='flex flex-col '>
                  <label htmlFor='name'>Name</label>
                  <input
                    className='mt-2 h-8 border border-gray-700 rounded outline-none p-2 ring-2 transition-all focus:ring-4 ring-black ring-offset-2'
                    type='text'
                    id='full-name'
                    name='name'
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='mail'>Email</label>
                  <input
                    className='mt-2 h-8 border border-gray-700 rounded outline-none p-2 ring-2 transition-all focus:ring-4 ring-black ring-offset-2'
                    type='email'
                    id='mail'
                    name='mail'
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='pass'>Password</label>
                  <div className='flex items-center mt-2 h-8  border border-gray-700 rounded outline-none ring-2 transition-all focus-within:ring-4 ring-black ring-offset-2'>
                    <input
                      className='h-7 w-5/6 outline-none p-2'
                      type={showPass ? 'text' : 'password'}
                      id='pass'
                      name='pass'
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

                <div className='flex flex-col'>
                  <label htmlFor='pass2'>Confirm Password</label>
                  <div className='flex items-center mt-2 h-8  border border-gray-700 rounded outline-none ring-2 transition-all focus-within:ring-4 ring-black ring-offset-2'>
                    <input
                      className='h-7 w-5/6 outline-none p-2'
                      type={showPass ? 'text' : 'password'}
                      id='pass2'
                      name='pass2'
                      onChange={e => setConfirmPassword(e.target.value)}
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
                className='w-fit justify-center mt-7 flex mx-auto px-8 ring-black ring-offset-2 ring-2 py-1 text-gray-100 font-bold font-sfprotr text-md bg-black rounded-lg outline-none transition-colors hover:ring-0 sm:w-full'
                disbled={isLoading}
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
