import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Editor } from '@tinymce/tinymce-react'
import { Helmet } from 'react-helmet-async'

import { AuthContext } from '../../context/Context'
import { useSignout } from '../../hooks/useSignout'

// import TagItem component
import TagItem from './TagItem'
import PublishByAi from './PublishByAi'
import PublishByHuman from './PublishByHuman'

// axios and react query
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getTags = async () => {
  const { data } = await axios.get('https://theblogxapi.onrender.com/api/tags')
  return data
}
export default function Publish () {
  const { user } = useContext(AuthContext)
  const token = user?.data?.token

  // slice user first name out if they have one
  const firstName = user?.data?.registeredUser?.name.split(' ')[0]

  const avatar = user?.data?.registeredUser?.avatar
  const { signout } = useSignout()

  const [showAction, setShowAction] = useState(false)

  // states for each input in the form
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [body, setBody] = useState('')
  const [displayImage, setDisplayImage] = useState('')
  const [tags, setTags] = useState([])
  // console.log(tags)

  // prompt state for Open Ai
  const [prompt, setPrompt] = useState('')

  // state for switching between PublishByAi and PublishByHuman
  const [publishBy, setPublishBy] = useState('human')

  const handleSwitch = () => {
    if (publishBy === 'ai') {
      setPublishBy('human')
    } else {
      setPublishBy('ai')
    }
  }

  // get tags to be chosen and saved
  const { data, isLoading: tagLoading, error } = useQuery(['tags'], getTags)
  const taglist = data?.data?.tags
  // console.log(taglist)

  const handleImage = e => {
    const file = e.target.files[0]
    setFileToBase(file)
  }

  const setFileToBase = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setDisplayImage(reader.result)
    }
  }

  const navigate = useNavigate()
  const createPost = async data => {
    const res = await axios.post('http://localhost:4000/api/blogposts', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res
  }

  const {
    mutate,
    isLoading: postLoading,
    isError,
    isSuccess
  } = useMutation(createPost, {
    onSuccess: () => {
      // console.log('success')
      navigate('/')
      window.location.reload()
    },
    onError: () => {
      console.log('error')
    }
  })
  const handleSubmit = e => {
    e.preventDefault()
    let post
    if (prompt !== '') {
      post = {
        prompt
      }
    } else {
      post = {
        title,
        subtitle,
        body,
        displayImage,
        tags
      }
    }
    if (user) {
      mutate(post)
    }
    console.log(post)
  }

  // set body overflow to auto when page loads
  useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [])

  return (
    <div className='mt-5'>
      <Helmet>
        <title>{user ? `${firstName} | Publish` : 'theBlogX'}</title>
        <meta
          name='description'
          content={`This is the page where blog posts are written`}
        />
        <link rel='canonical' href={`/dashboard`} />
      </Helmet>
      <div className='w-full mx-auto flex justify-between px-6 py-4 mb-5 bg-white border-b-4 shadow-xl border-gray-600 fixed top-0 z-10 ham:w-full sm:px-4 '>
        <h1 className='text-xl font-nylarge font-semibold sm:text-[17px]'>
          {`✍️, ${firstName}`}
        </h1>

        <div className='flex gap-3 items-center'>
          <button
            type='submit'
            form='form'
            className='text-white bg-black rounded p-1 font-sfprod px-8 ring-2 ring-gray-700 ring-offset-2 transition hover:bg-gray-600 hover:ring-gray-400 sm:px-4 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={postLoading}
          >
            {postLoading ? 'Publishing...' : 'Publish'}
          </button>
          <Link
            to='/'
            className='flex items-center gap-2 bg-gray-300 rounded p-1 transition hover:bg-gray-100'
          >
            <BiArrowBack className='sm:text-2xl' />
            <p className='sm:text-[13px] sm:hidden'>Blog Home</p>
          </Link>
          <div
            onClick={() => {
              setShowAction(!showAction)
            }}
            className='relative '
          >
            {/* <span className='flex h-3 w-3 absolute -right-2 -top-2'>
              <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
            </span> */}
            <div className='h-8 w-8 cursor-pointer rounded-sm border shadow-xl overflow-hidden ring-1 ring-gray-600 ring-offset-2 transition-shadow hover:ring-2 hover:ring-emerald-400'>
              {avatar && avatar !== '' ? (
                <img src={avatar.url} alt='' className='h-full w-full' />
              ) : (
                <img
                  src='https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'
                  alt=''
                  className='h-full w-full '
                />
              )}
            </div>
            {showAction && (
              <div className='absolute mt-1 -right-1 bg-black text-white rounded-sm shadow-lg font-sfprod transition-shadow'>
                <Link
                  to='/profile'
                  className='py-2 px-4 transition-all hover:opacity-40'
                >
                  Profile
                </Link>
                <button
                  onClick={signout}
                  className='py-1 px-3 transition-all hover:opacity-40'
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='h-screen mt-[9rem] mb-[10rem]'>
        <div className='flex justify-center items-center h-[2rem] my-4'>
          <button
            onClick={handleSwitch}
            className='flex items-center justify-center gap-2 font-nylarge cursor-pointer
         text-black rounded transition hover:bg-gray-800 hover:text-white'
          >
            Compose Yourself
          </button>
          <div className="w-[2px] h-full bg-black"></div>
          <button
            onClick={handleSwitch}
            className='flex items-center justify-center gap-2 font-nylarge cursor-pointer
         text-black rounded transition hover:bg-gray-800 hover:text-white'
          >
            Compose with AI
          </button>
        </div>
        <form
          id='form'
          className='w-[80%] mx-auto ham:w-[95%]'
          encType='multipart/form-data'
          onSubmit={handleSubmit}
        >
          <div className=''>
            {publishBy === 'human' ? (
              <PublishByHuman
                displayImage={displayImage}
                handleImage={handleImage}
                setTitle={setTitle}
                setSubtitle={setSubtitle}
                setBody={setBody}
              />
            ) : (
              <PublishByAi
                setDisplayImage={setDisplayImage}
                setBody={setBody}
                body={body}
                setTitle={setTitle}
                title={title}
                setSubtitle={setSubtitle}
                subtitle={subtitle}
                token={token}
              />
            )}
          </div>

          <div className='mt-6 flex flex-col items-center gap-2 font-nysmall'>
            <p className='font-bold text-center'>
              Select tags that captures your story-a maximum of 3 tags
            </p>
            <div className='flex flex-wrap justify-center '>
              {tagLoading ? (
                <div className=''>Fetching tags...</div>
              ) : taglist ? (
                taglist.map(tag => {
                  return (
                    <TagItem
                      key={tag._id}
                      tag={tag}
                      tagState={tags}
                      setTagState={setTags}
                    />
                  )
                })
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
