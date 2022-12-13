import React, { useState } from 'react'
import { BsPencilFill } from 'react-icons/bs'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { useUpdateUser } from '../../hooks/useUpdateUser'

const EditProfile = ({ user, dispatch }) => {
  // current user info
  const oldAvatar = user?.data?.registeredUser?.avatar
  const oldName = user?.data?.registeredUser?.name
  const oldEmail = user?.data?.registeredUser?.email
  const oldAbout = user?.data?.registeredUser?.about

  const { updateUserHandler, updateLoading, isSuccess, error } = useUpdateUser()

  const [showPass, setShowPass] = useState(false)
  const [name, setName] = useState(oldName)
  const [email, setEmail] = useState(oldEmail)
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [about, setAbout] = useState(oldAbout)
  const [avatar, setAvatar] = useState('')

  const handleImage = e => {
    const file = e.target.files[0]
    setFileToBase(file)
  }

  const setFileToBase = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setAvatar(reader.result)
    }
  }
  

  const handleUpdate = e => {
    e.preventDefault()
    const updated = {}
    // check if user wants to update an item
    if (name !== oldName) {
      updated.name = name
    }
    if (email !== oldEmail) {
      updated.email = email
    }
    if (oldPassword) {
      updated.oldPassword = oldPassword
    }
    if (password) {
      updated.password = password
    }
    if (about !== oldAbout) {
      updated.about = about
    }
    if (avatar) {
      updated.avatar = avatar
    }
    updateUserHandler(updated)
    console.log(updated)
  }

  let handleShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <div className=''>
      <h2 className='text-xl font-sfpro bg-green-100 p-1 w-fit border-black border-b-2 sm:text-lg'>
        Update Your Profile.
      </h2>{' '}
      <form
        className='mx-auto mt-[2rem] mb-8 flex flex-col items-center font-sfprod'
        encType='multipart/form-data'
        onSubmit={handleUpdate}
      >
        <div className='relative'>
          <label
            htmlFor='avatar'
            className='absolute -bottom-[4.1rem] right-0 cursor-pointer flex h-full items-center'
          >
            <p className='p-1.5 border-black border-1 rounded-tl-lg rounded-br-lg shadow-xl bg-gray-500 h-fit w-fit transition-shadow hover:bg-black'>
              <BsPencilFill className='text-white' />
            </p>

            <input
              type='file'
              name='avatar'
              id='avatar'
              className='hidden'
              onChange={handleImage}
            />
          </label>
          <div className='h-[10rem] w-[10rem] border-2 border-gray-400 shadow-xl rounded-lg ring-1 ring-black ring-offset-2 hover:ring-emerald-700 overflow-hidden'>
            {avatar ? (
              <img src={avatar} alt='avatar' className='w-full h-full' />
            ) : oldAvatar ? (
              <img
                src={oldAvatar.url}
                alt='avatar'
                className='w-full h-full object-cover rounded'
              />
            ) : (
              <img
                src='https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'
                alt='avatar'
                className='w-full h-full object-cover rounded'
              />
            )}
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6 font-sfprotr sm:grid-cols-1'>
          <div className='flex flex-col col-span-2'>
            <label htmlFor='about'>About</label>
            <textarea
              name='about'
              id='about'
              className='h-[10rem] mt-2
               border border-gray-700 rounded outline-none p-2 ring-2 transition-all focus:ring-4 ring-black ring-offset-2'
              value={about}
              onChange={e => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div className='flex flex-col '>
            <label htmlFor='name'>Name</label>
            <input
              className='mt-2 h-8 border border-gray-700 rounded outline-none p-2 ring-2 transition-all focus:ring-4 ring-black ring-offset-2'
              type='text'
              id='full-name'
              name='name'
              value={name}
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
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='pass'>Old Password</label>
            <div className='flex items-center mt-2 h-8  border border-gray-700 rounded outline-none ring-2 transition-all focus-within:ring-4 ring-black ring-offset-2'>
              <input
                className='h-7 w-5/6 outline-none p-2'
                type={showPass ? 'text' : 'password'}
                id='pass'
                name='pass'
                onChange={e => setOldPassword(e.target.value)}
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
            <label htmlFor='pass2'>New Password</label>
            <div className='flex items-center mt-2 h-8  border border-gray-700 rounded outline-none ring-2 transition-all focus-within:ring-4 ring-black ring-offset-2'>
              <input
                className='h-7 w-5/6 outline-none p-2'
                type={showPass ? 'text' : 'password'}
                id='pass2'
                name='pass2'
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
        </div>

        <button
          type='submit'
          className='w-fit justify-center mt-7 flex mx-auto px-8 ring-black ring-offset-2 ring-2 py-1 text-gray-100 font-bold 
          font-sfprotr text-md bg-black rounded-lg outline-none transition-colors hover:ring-0 
          disabled:cursor-not-allowed disabled:bg-gray-700'
          disabled={updateLoading}
        >
          {updateLoading ? 'Updating...' : 'Update Me'}
        </button>

        <div className='mt-4'>
          {error ? (
            <div className='w-fit bg-red-500 p-2 rounded-lg font-sfmono'>
              {error}
            </div>
          ) : error === 'Password not strong enough' ? (
            <div className='flex flex-col bg-red-500 p-2 rounded-lg font-sfmono'>
              {error}
              <ul className='font-mono list-disc pl-5 text-sm'>
                <li>Min. of 8 characters</li>
                <li>Must contain at least one number</li>
                <li>Must contain at least one special character</li>
                <li>
                  Must contain a combination of uppercase and lowercase letters
                </li>
              </ul>
            </div>
          ) : isSuccess ? (
            <div className='w-fit bg-green-400 p-2 rounded-lg font-sfmono'>
              Profile Updated Successfully!
            </div>
          ) : null}
        </div>
      </form>
    </div>
  )
}

export default EditProfile
