import React, { useState, useEffect } from 'react'
import { BsPencilFill } from 'react-icons/bs'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { CgDanger } from 'react-icons/cg'
import { useUpdateUser } from '../../hooks/useUpdateUser'
import { useDeleteUser } from '../../hooks/useDeleteUser'

const DeleteDialogue = ({ setShowDelete }) => {
  const [deleteName, setDeleteName] = useState('')
  const [deleteNameError, setDeleteNameError] = useState(false)

  const { user, handleDelete, isDeleting, isDeleteSuccess, error } =
    useDeleteUser()

  const handleDeleteUser = e => {
    e.preventDefault()
    if (deleteName === user?.data?.registeredUser?.name) {
      handleDelete()
    } else {
      setDeleteNameError(true)
    }
  }

  return (
    <div className='absolute z-10 top-0 left-0 w-screen h-screen bg-black bg-opacity-50'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
       bg-white w-96 h-fit p-2 rounded-md shadow-md md:w-[90%]'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h2 className='text-xl font-sfpro'>Are you sure?</h2>
          <p className='text-sm font-sfpro text-gray-500'>
            This action cannot be undone
          </p>

          <div className='w-[90%] flex flex-col items-center gap-2'>
            <p className='text-sm text-center'>
              Type{' '}
              <span className='font-bold'>
                {user?.data?.registeredUser?.name}
              </span>{' '}
              to confirm deletion
            </p>
            <input
              type='text'
              className={`w-[90%] mx-auto border-2 border-black ring-2 ring-emerald-400 p-1 ${deleteNameError && 'ring-2 ring-red-500'} ring-offset-2 rounded-lg focus:outline-none focus:ring-offset-1`}
              onChange={e => setDeleteName(e.target.value)}
            />
          </div>
          <div className='flex mt-4 gap-4'>
            <button
              onClick={() => setShowDelete(false)}
              className='bg-gray-200 text-gray-500 text-sm font-sfprod w-24 h-8 rounded-md shadow-sm 
              ring-1 ring-gray-500 ring-offset-2 transition-all hover:bg-gray-600 hover:ring-offset-1 hover:bg-gray-300'
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteUser}
              className='bg-red-500 text-white text-sm font-sfprod w-24 h-8 
              rounded-md shadow-sm ring-1 ring-red-500 ring-offset-2 transition-all hover:bg-red-600 hover:ring-offset-1'
            >
              {isDeleting ? 'Deleting...' : isDeleteSuccess ? 'Deleted' : 'Delete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

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
  const [noAction, setNoAction] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

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

  useEffect(() => {
    // stop the user from updating if no changes are made
    if (
      name === oldName &&
      email === oldEmail &&
      oldPassword === '' &&
      password === '' &&
      about === oldAbout &&
      avatar === ''
    ) {
      setNoAction(true)
    } else {
      setNoAction(false)
    }
  })

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
      {showDelete && <DeleteDialogue setShowDelete={setShowDelete} />}
      <div className='flex justify-between items-center w-[90%] mx-auto md:w-[95%]'>
        <h2
          className='text-xl font-sfpro bg-green-100 p-1 w-fit border-black 
        rounded-sm ring-1 ring-black md:text-[0.9rem]
        ring-offset-2 shadow-sm'
        >
          Update Your Profile.
        </h2>
        <button
          onClick={() => {
            setShowDelete(!showDelete)
          }}
          className='w-fit h-fit flex items-center gap-1 rounded-lg p-1.5
          bg-red-500 text-white font-sfprod ring-1 ring-red-500 ring-offset-1 transition-shadow
          hover:ring-offset-2 hover:shadow-xl'
        >
          Danger <CgDanger />
        </button>
      </div>
      <form
        className='mx-auto mt-[2rem] mb-8 flex flex-col items-center font-sfprod 
        sm:w-[90%]'
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
        <div className='grid grid-cols-2 gap-6 font-sfprotr sm:w-full'>
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
          <div className='flex flex-col sm:col-span-2'>
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

          <div className='flex flex-col sm:col-span-2'>
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

          <div className='flex flex-col sm:col-span-2'>
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

          <div className='flex flex-col sm:col-span-2'>
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
          disabled={updateLoading || noAction}
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
