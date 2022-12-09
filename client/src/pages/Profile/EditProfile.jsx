import React, { useState } from 'react'
// import avatar from '../../assets/avatar.png'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { useUpdateUser } from '../../hooks/useUpdateUser'

const EditProfile = ({ user, dispatch }) => {
  const { updateUserHandler, isLoading, isError, isSuccess } = useUpdateUser()

  const [showPass, setShowPass] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [about, setAbout] = useState('')
  const [avatar, setAvatar] = useState('')
  const [error, setError] = useState('')

  // console.log(password)
  // console.log(error)
  const handleUpdate = e => {
    e.preventDefault()
    // check password equals confirm password
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    } else {
      setError('')
    }
    const updated = { name, email, password, avatar, about }
    updateUserHandler(updated)
    // if (isError === '') {
    //   setIsError('')
    // }
    console.log(updated)
  }

  let handleShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <div className=''>
      <h2 className='text-xl font-nysmall bg-green-100 p-1 w-fit border-black border-b-2 sm:text-lg'>
        Update Your Profile.
      </h2>{' '}
      {/* <div className=''>
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
                  Must contain a combination of uppercase and lowercase letters
                </li>
              </ul>
            </div>
          ) : (
            <div className='w-full bg-red-500 p-2 rounded-lg font-sfmono'>
              {isError}
            </div>
          )
        ) : null}
      </div> */}
      <form
        className='mt-[2rem] mb-8 flex flex-col items-center font-sfprod'
        onSubmit={handleUpdate}
      >
        <div className='h-[10rem] w-[10rem] border-2 border-emerald-200 ring-2 ring-emerald-400 ring-offset-2 hover:ring-emerald-700 rounded-full overflow-hidden'>
          {/* avatar input */}
          <label htmlFor='avatar' className='flex h-full items-center'>
            <IoIosAddCircleOutline className='' />

            <input
              type='file'
              name='avatar'
              id='avatar'
              className='hidden'
              onChange={e => setAvatar(e.target.files[0])}
            />
          </label>
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
        >
          Register Me
        </button>
      </form>
    </div>
  )
}

export default EditProfile
