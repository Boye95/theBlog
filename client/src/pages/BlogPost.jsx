import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import moment from 'moment'
import eyes from '../assets/eyes.svg'
import avatar from '../assets/avatar.png'
import { FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { OtherArticles, Newsletter } from '../components'
import { Editor } from '@tinymce/tinymce-react'
// import { Base64, encode, decode } from 'js-base64'

import DOMPurify from 'isomorphic-dompurify'

// axios and react query
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const ConfirmDeletePost = ({ path, deleteState }) => {
  const deletePost = async () => {
    const del = await axios.delete(
      `http://localhost:4000/api/blogposts/${path}`
    )
    return del
  }

  const { mutate, isLoading: isDeleting, isError, isSuccess } = useMutation(
    deletePost,
    {
      onSuccess: () => {
        location.reload()
      }
    }
  )
  const handleDelete = () => {
    mutate()
  }

  return (
    <div className='fixed p-3 font-sfmono text-center flex flex-col items-center w-auto h-auto bg-white rounded-lg border-2 border-gray-400 ring-2 ring-grey-400 ring-offset-2 sm:w-[90%]'>
      {isDeleting ? (
        <>
          <h1 className='text-xl font-semibold'>Deleting...</h1>
        </>
      ) : isSuccess ? (
        <>
          <h1 className='text-xl font-semibold'>Deleted!</h1>
        </>
      ) : (
        <>
          <p className=''>This is a permanent action</p>
          <p className=''>Are you sure you want to delete this post?</p>
          <div
            className='
          flex gap-5 mt-4  
          [&>*]:border-2
          [&>*]:px-4
          [&>*]:rounded-lg
          '
          >
            <button
              className='text-white bg-red-600 ring-red-600 ring transition-all hover:ring-1'
              onClick={handleDelete}
            >
              Yes
            </button>
            <button
              className='text-white bg-black ring-black ring transition-all hover:ring-1'
              onClick={() => deleteState(false)}
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default function BlogPost () {
  const [wannaDelete, setWannaDelete] = useState(false)

  // set state for the blog post update
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [body, setBody] = useState('')
  const [displayImage, setDisplayImage] = useState('')
  const [tags, setTags] = useState(['rfrf'])
  const [disable, setDisable] = useState(false)
  const [updateMode, setUpdateMode] = useState(false)

  const [trackImageSelection, setTrackImageSelection] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const fetchSinglePost = async () => {
    const res = await fetch(`http://localhost:4000/api/blogposts/${path}`)
    return res.json()
  }

  const { data, isLoading, error } = useQuery(['singlePost'], fetchSinglePost, {
    onSuccess: data => {
      const postSet = data?.data?.post
      setTitle(postSet.title)
      setSubtitle(postSet.subtitle)
      setBody(postSet.body)
      // setDisplayImage(postSet.displayImage.url)
      setTags(postSet.tags)
    }
  })

  const post = data?.data?.post
  // track image selection

  const postBody = post?.body
  const clean = DOMPurify.sanitize(postBody, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
  })

  // handle image
  const handleImage = e => {
    const file = e.target.files[0]
    setFileToBase(file)
    setTrackImageSelection(true)
  }

  const setFileToBase = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setDisplayImage(reader.result)
    }
  }

  const updatePost = async data => {
    const res = await axios.patch(
      `http://localhost:4000/api/blogposts/${path}`,
      data
    )
    return res
  }

  const {
    mutate: isUpdate,
    isLoading: isUpdating,
    isError,
    isSuccess: isUpdated
  } = useMutation(updatePost, {
    onSuccess: () => {
      window.location.reload()
      setUpdateMode(false)
      console.log('updated')
    },
    onError: () => {
      console.log('error')
    }
  })

  // console.log(updateMode)
  var yemi
  {
    !trackImageSelection
      ? (yemi = post?.displayImage.url)
      : (yemi = displayImage)
  }
  const handleUpdate = e => {
    e.preventDefault()
    const newEdits = {
      title,
      subtitle,
      body,
      displayImage: yemi,
      tags
    }
    isUpdate(newEdits)
    setDisable(true)
    console.log(newEdits)
  }
  // Persisting the updateMode state
  // useEffect(() => {
  //   const updateModeState = localStorage.getItem('updateMode')
  //   if (updateModeState === 'true') {
  //     setUpdateMode(true)
  //   } else {
  //     setUpdateMode(false)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('updateMode', updateMode)
  // }, [updateMode])

  return (
    <div className='relative'>
      {updateMode ? (
        <div className='h-auto mt-[2rem] mb-[5rem] relative'>
          <button
            type='submit'
            form='form'
            className='fixed right-2 text-white bg-black
             rounded p-1 font-sfprod px-8 ring-2 ring-black
             z-10 
             ring-offset-2 ring-offset-gray-600 transition hover:bg-gray-600 hover:ring-gray-400 sm:px-4 
             disabled:opacity-80 disabled:cursor-not-allowed'
            // disabled={disable}
          >
            {isUpdating ? 'Updating...' : isUpdated ? 'Updated' : 'Update'}
          </button>
          {displayImage ? (
            <div className='h-[30rem] w-full rounded mx-auto my-2 md:h-[15rem]'>
              <img
                src={displayImage}
                alt='blog post display'
                className='w-full h-full object-cover rounded'
              />
            </div>
          ) : (
            <div className='h-[30rem] w-full rounded mx-auto my-2 md:h-[15rem]'>
              <img
                src={post?.displayImage.url}
                alt='blog post display'
                className='w-full h-full object-cover rounded'
              />
            </div>
          )}
          <label
            htmlFor='blogimg'
            className='mb-4 flex items-center justify-center gap-2 font-nylarge cursor-pointer h-[3rem] text-2xl text-white w-full max-w-[1050px] bg-gray-700 ring-gray-700 rounded ring-offset-2 ring-2 border-2 border-gray-700 transition hover:bg-gray-800 hover:ring-offset-1'
          >
            <IoIosAddCircleOutline className='' />
            <p className='sm:text-xl'>Click to Replace Post Image</p>
            <input
              type='file'
              name='displayImage'
              id='blogimg'
              className='hidden'
              onChange={handleImage}
              // required
            />
          </label>
          <form
            id='form'
            className='w-[80%] mx-auto ham:w-[95%]'
            encType='multipart/form-data'
            onSubmit={handleUpdate}
          >
            <div className='flex flex-col items-center w-full mx-auto'>
              <div className='flex flex-col w-full gap-2 [&>*]:h-[3rem] [&>*]:outline-none [&>*]:rounded'>
                <input
                  type='text'
                  defaultValue={post?.title}
                  name='title'
                  id='blogTitle'
                  placeholder='Title...'
                  className='w-full max-w-[1050px] mx-auto ring-gray-700 ring-offset-2 ring-2 border-2 text-3xl px-3 font-nylarge transition focus:border-emerald-300 focus:ring-emerald-300 focus:shadow-emerald-300 focus:shadow-[0_0_15px] sm:text-2xl'
                  onChange={e => setTitle(e.target.value)}
                  required
                />
                <input
                  type='text'
                  defaultValue={post?.subtitle}
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
                apiKey='mk3t00giiyqt48pkpkk19x5es04efdg6r5b3ndaa4hz5if9k'
                // onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={postBody}
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
          </form>
        </div>
      ) : (
        <>
          {wannaDelete && (
            <div className='absolute p-3 h-screen w-screen flex justify-center items-center z-20'>
              <ConfirmDeletePost path={path} deleteState={setWannaDelete} />
            </div>
          )}
          {data && (
            <div className=''>
              <div id='article1' className='flex flex-col items-center'>
                <h1 className='font-nylarge w-3/6 text-4xl text-center mt-7 ham:w-5/6 sm:w-11/12 sm:text-3xl '>
                  {post?.title}
                </h1>
                <h3 className='font-sfmono text-lg w-2/5 text-center mt-8 ham:w-3/5 sm:w-11/12 sm:text-sm'>
                  {post?.subtitle}
                </h3>
                <img
                  src={post?.displayImage.url}
                  alt='post image'
                  className='mt-8 w-3/6 ham:w-11/12 xl:w-4/6'
                />
              </div>

              <div className='mt-8 w-3/6 border-t-2 border-black mx-auto ham:w-11/12 xl:w-4/6'>
                <div id='postinfo' className='mt-8 flex sm:flex-col sm:gap-5'>
                  <div className='flex gap-2 w-4/6 sm:w-full'>
                    <div className='w-12 h-12 rounded-3xl overflow-hidden'>
                      <img src={avatar} alt='' className='w-full' />
                    </div>
                    <div className=''>
                      <Link to='/profile' className='font-sfproth'>
                        ADEBOYE FOLARANMI
                      </Link>
                      <div className='font-sfprotr flex gap-2 xl:text-sm'>
                        <span>{moment(post?.createdAt).format('lll')}</span>
                        <span>· 4 min read</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex w-3/6 justify-end items-center gap-2 sm:w-full sm:[&>*]:w-3/6'>
                    <div
                      className='border-2 rounded py-1 w-16 cursor-pointer ring-gray-700 transition-all hover:border-gray-400 hover:ring-1'
                      onClick={() => setUpdateMode(true)}
                    >
                      <BiEdit className='w-8 h-6 mx-auto' />
                    </div>
                    <div
                      className='border-2 rounded py-1 w-16 cursor-pointer ring-gray-700 transition-all hover:border-gray-400 hover:ring-1'
                      onClick={() => setWannaDelete(!wannaDelete)}
                    >
                      <AiOutlineDelete className='w-8 h-6 mx-auto' />
                    </div>
                    {/* <div className='border-2 rounded py-1 w-16 cursor-pointer ring-gray-700 transition-all hover:border-gray-400 hover:ring-1'>
                  <FaFacebookSquare className='w-8 h-6 mx-auto' />
                </div> */}
                    <div className='border-2 rounded py-1 w-16 cursor-pointer ring-gray-700 transition-all hover:border-gray-400 hover:ring-1'>
                      <FaTwitterSquare className='w-8 h-6 mx-auto' />
                    </div>
                  </div>
                </div>

                <div id='postcontent' className='mt-16 font-nysmall'>
                  <div
                    className='post_body'
                    dangerouslySetInnerHTML={{ __html: clean }}
                  />
                </div>

                <div className=''>
                  <div className='mt-8 flex w-full items-center gap-2'>
                    <div className='border-2 rounded py-2 w-3/6 flex justify-center items-center font-sfprotr cursor-pointer ring-gray-700 transition-all hover:border-gray-400 hover:ring-1'>
                      <FaFacebookSquare className='w-8 h-6' />
                      <p className='sm:text-[13px]'>Share on Facebook</p>
                    </div>
                    <div className='border-2 rounded py-2 w-3/6 flex justify-center items-center font-sfprotr cursor-pointer ring-gray-700 transition-all hover:border-gray-400 hover:ring-1'>
                      <FaTwitterSquare className='w-8 h-6' />
                      <p className='sm:text-[14px]'>Share on Twitter</p>
                    </div>
                  </div>

                  <div className='font-sfprotr mt-7'>
                    Tags: product, design, culture
                  </div>

                  <div className='mt-9 border-t-2 border-dotted border-black'>
                    <div className='mt-4 flex items-center gap-4 sm:text-sm'>
                      <div className='w-32 rounded-full overflow-hidden'>
                        <img src={avatar} alt='' className='w-full h-full' />
                      </div>
                      <p className='font-nymedium'>
                        <span className='font-sfproth'>ADEBOYE FOLARANMI</span>{' '}
                        is a Design Founder & Advisor, Berlin School of Creative
                        Leadership Executive MBA participant, Zippie advisor,
                        Wolt co-founder, and Nordic Rose stakeholder.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <p className='mt-24 h-1 w-full bg-black'></p>
                <img
                  src={eyes}
                  alt=''
                  className='absolute -top-7 inset-x-2/4'
                />
              </div>

              <div className='mt-16 w-3/5 mx-auto ham:w-4/5'>
                <h2 className='font-nylarge text-4xl text-center lg:text-3xl sm:text-2xl'>
                  What to read next
                </h2>

                <OtherArticles post={post} path={path} />
              </div>

              <div className='mt-16 w-2/5 mx-auto mb-20 xl:w-3/5 sm:w-11/12 xs:w-full'>
                <Newsletter />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
