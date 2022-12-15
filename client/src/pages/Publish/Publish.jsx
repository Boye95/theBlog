import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Editor } from '@tinymce/tinymce-react'

import { AuthContext } from '../../AuthContext/Context'
import { useSignout } from '../../hooks/useSignout'

// import TagItem component
import TagItem from './TagItem'

// axios and react query
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getTags = async () => {
  const { data } = await axios.get('http://127.0.0.1:4000/api/tags')
  return data
}
export default function Publish () {
  const { user } = useContext(AuthContext)
  const token = user?.data?.token

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
    const res = await axios.post('http://127.0.0.1:4000/api/blogposts', data, {
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
      console.log('success')
      navigate('/')
      window.location.reload()
    },
    onError: () => {
      console.log('error')
    }
  })
  const handleSubmit = e => {
    e.preventDefault()
    const post = {
      title,
      subtitle,
      body,
      displayImage,
      tags
    }
    if (user) {
      mutate(post)
    }
    console.log(post)
  }

  return (
    <div className='mt-5'>
      <div className='w-full mx-auto flex justify-between px-6 py-4 mb-5 bg-white border-b-4 shadow-xl border-gray-600 fixed top-0 z-10 ham:w-full sm:px-4 '>
        <h1 className='text-xl font-nylarge font-semibold sm:text-[17px]'>
          {`Tell a Story, ${user?.data?.registeredUser?.name}`}
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
            <span className='flex h-3 w-3 absolute -right-2 -top-2'>
              <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
            </span>
            <div className='h-8 w-8 cursor-pointer rounded-sm border shadow-xl overflow-hidden ring-1 ring-gray-600 ring-offset-2 transition-shadow hover:ring-2 hover:ring-emerald-400'>
              {avatar !== '' ? (
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
        <form
          id='form'
          className='w-[80%] mx-auto ham:w-[95%]'
          encType='multipart/form-data'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col items-center w-full mx-auto'>
            {displayImage && (
              <div className='h-[30rem] w-full rounded mx-auto my-2 md:h-[15rem]'>
                <img
                  src={displayImage}
                  alt='blog post display'
                  className='w-full h-full object-cover rounded'
                />
              </div>
            )}
            <label
              htmlFor='blogimg'
              className='mb-4 flex items-center justify-center gap-2 font-nylarge cursor-pointer h-[3rem] text-2xl text-white w-full max-w-[1050px] bg-gray-700 ring-gray-700 rounded ring-offset-2 ring-2 border-2 border-gray-700 transition hover:bg-gray-800'
            >
              <IoIosAddCircleOutline className='' />
              <p className='sm:text-xl'>Click to Add Post Image</p>
              <input
                type='file'
                name='displayImage'
                id='blogimg'
                className='hidden'
                onChange={handleImage}
                required
              />
            </label>
            <div className='flex flex-col w-full gap-2 [&>*]:h-[3rem] [&>*]:outline-none [&>*]:rounded'>
              <input
                type='text'
                name='title'
                id='blogTitle'
                placeholder='Title...'
                className='w-full max-w-[1050px] mx-auto ring-gray-700 ring-offset-2 ring-2 border-2 text-3xl px-3 font-nylarge transition focus:border-emerald-300 focus:ring-emerald-300 focus:shadow-emerald-300 focus:shadow-[0_0_15px] sm:text-2xl'
                onChange={e => setTitle(e.target.value)}
                required
              />
              <input
                type='text'
                name='subtitle'
                id='blogSubtitle'
                placeholder='Subtitle...'
                className='ring-gray-700 ring-offset-2 ring-2 border-2 w-full max-w-[1050px] mx-auto mt-2 text-2xl px-3 font-sfmono transition focus:border-emerald-300 focus:ring-emerald-300 focus:shadow-emerald-300 focus:shadow-[0_0_15px] sm:text-xl'
                onChange={e => setSubtitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='mt-7 w-full min-h-[30rem] max-w-[1050px] font-nymedium rounded-tr-[10px] rounded-tl-[10px] ring-gray-700 ring-offset-2 ring-2 border-2 transition focus-within:border-emerald-300 focus-within:ring-emerald-300 focus-within:shadow-emerald-300 focus-within:shadow-[0_0_25px]'>
            <Editor
              apiKey={import.meta.env.VITE_TINY_API_KEY}
              // onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue='<p>This is the initial content of the editor.</p>'
              init={{
                height: 500,
                // menubar: false,
                plugins: [
                  'advlist',
                  'media',
                  'autolink',
                  'lists',
                  'link',
                  'image',
                  'charmap',
                  'preview',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'code',
                  'fullscreen',
                  'insertdatetime',
                  'media',
                  'table',
                  'code',
                  'help',
                  'wordcount'
                ],
                menubar: 'file edit view insert format tools table help',
                toolbar:
                  'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                toolbar_sticky: true,
                content_style: `body { 
              font-family:NY-Medium,sans-serif; 
              font-size:14px;
            }`,
                body_class: 'tiny_body'
              }}
              onEditorChange={newText => setBody(newText)}
            />
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
