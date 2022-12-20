import React, { useState, useContext } from 'react'
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
// import PostByTag from './Tags/PostsByTag'
import { Editor } from '@tinymce/tinymce-react'
// import { Base64, encode, decode } from 'js-base64'

import DOMPurify from 'isomorphic-dompurify'

import AuthContext from '../AuthContext/Context.jsx'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon
} from 'react-share'

// axios and react query
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const ConfirmDeletePost = ({ path, deleteState, user }) => {
  // const { user } = useContext(AuthContext)
  console.log(user)
  console.log(path)
  const token = user?.data?.token
  // console.log(token)
  const deletePost = async () => {
    const del = await axios.delete(
      `http://localhost:4000/api/blogposts/${path}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return del
  }

  const {
    mutate,
    isLoading: isDeleting,
    isError,
    isSuccess
  } = useMutation(deletePost, {
    onSuccess: () => {
      location.reload()
      location.href = '/'
    }
  })
  const handleDelete = () => {
    if (user) {
      mutate()
    }
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
  const { user } = useContext(AuthContext)
  const token = user?.data?.token
  const userID = user?.data?.registeredUser?._id

  const [wannaDelete, setWannaDelete] = useState(false)

  // set state for the blog post update
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [body, setBody] = useState('')
  const [displayImage, setDisplayImage] = useState('')
  const [tags, setTags] = useState(['rfrf'])
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
  const readTime = data?.data?.readTime

  // author info
  const authorAbout = post?.authorInfo?.about
  const authorAvatar = post?.authorInfo?.avatar?.url
  const authorID = post?.authorInfo?._id

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
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
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
      // console.log('updated')
    },
    onError: () => {
      console.log('error')
    }
  })

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
    if (user) {
      isUpdate(newEdits)
    }
    // console.log(newEdits)
  }
  // console.log(post)
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
            disabled={isUpdating}
          >
            {isUpdating ? 'Updating...' : isUpdated ? 'Updated' : 'Update'}
          </button>
          <form
            id='form'
            className='w-[80%] mx-auto ham:w-[95%]'
            encType='multipart/form-data'
            onSubmit={handleUpdate}
          >
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
              className='mb-4 mx-auto flex items-center justify-center gap-2 font-nylarge cursor-pointer h-[3rem] text-2xl text-white w-full max-w-[1050px] bg-gray-700 ring-gray-700 rounded ring-offset-2 ring-2 border-2 border-gray-700 transition hover:bg-gray-800 hover:ring-offset-1'
            >
              <IoIosAddCircleOutline className='' />
              <p className='sm:text-xl xs:text-[0.9rem]'>
                Click to Update Post Image
              </p>
              <input
                type='file'
                name='displayImage'
                id='blogimg'
                className='hidden'
                onChange={handleImage}
                // required
              />
            </label>
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
            <div className='mx-auto mt-7 w-full min-h-[30rem] max-w-[1050px] font-nymedium rounded-tr-[10px] rounded-tl-[10px] ring-gray-700 ring-offset-2 ring-2 border-2 transition focus-within:border-emerald-300 focus-within:ring-emerald-300 focus-within:shadow-emerald-300 focus-within:shadow-[0_0_25px]'>
              <Editor
                apiKey={import.meta.env.VITE_TINY_API_KEY}
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
              <ConfirmDeletePost path={path} deleteState={setWannaDelete} user={user} />
            </div>
          )}
          {isLoading ? (
            <div className=''>Loading...</div>
          ) : error ? (
            <div className=''>{error}</div>
          ) : (
            <div className=''>
              <div id='article1' className='flex flex-col items-center'>
                <h1 className='font-nylarge w-3/6 text-4xl text-center mt-7 ham:w-5/6 sm:w-11/12 sm:text-2xl '>
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
                      {authorAvatar ? (
                        <img src={authorAvatar} alt='' className='w-full' />
                      ) : (
                        <img
                          src='https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'
                          alt=''
                          className='w-full'
                        />
                      )}
                    </div>
                    <div className=''>
                      {userID === authorID ? (
                        <Link to='/profile' className='font-sfproth'>
                          {post?.authorInfo?.name?.toUpperCase()}
                        </Link>
                      ) : (
                        <div className='font-sfproth'>
                          {post?.authorInfo?.name?.toUpperCase()}
                        </div>
                      )}
                      <div className='font-sfprotr flex justify-between gap-2 xl:text-sm'>
                        <div className='flex flex-col'>
                          <span>{moment(post?.createdAt).format('lll')}</span>
                          <span>
                            {post?.updatedAt !== post?.createdAt &&
                              `Updated: ${moment(post?.updatedAt).format(
                                'lll'
                              )}`}
                          </span>
                        </div>
                        <span>•{` ${readTime} read`}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex w-3/6 justify-end items-center gap-2 sm:w-full sm:[&>*]:w-3/6'>
                    {userID === authorID && (
                      <div
                        className='border-2 rounded py-1 w-16 cursor-pointer ring-gray-700 transition-all hover:border-gray-400 hover:ring-1'
                        onClick={() => setUpdateMode(true)}
                      >
                        <BiEdit className='w-8 h-6 mx-auto' />
                      </div>
                    )}
                    {userID === authorID && (
                      <div
                        className='border-2 rounded py-1 w-16 cursor-pointer ring-gray-700 transition-all hover:border-gray-400 hover:ring-1'
                        onClick={() => setWannaDelete(!wannaDelete)}
                      >
                        <AiOutlineDelete className='w-8 h-6 mx-auto' />
                      </div>
                    )}
                    {userID !== authorID && (
                      <div className='border-2 rounded py-1 w-16 cursor-pointer ring-gray-700 transition-all hover:border-gray-400 hover:ring-1'>
                        <FacebookShareButton
                          title={post?.title}
                          url={window.location.href}
                          className='w-full h-full flex justify-center items-center'
                        >
                          <FaFacebookSquare className='w-8 h-6 mx-auto' />
                        </FacebookShareButton>
                      </div>
                    )}
                    <div className='border-2 rounded py-1 w-16 cursor-pointer ring-gray-700 transition-all hover:border-gray-400 hover:ring-1'>
                      <TwitterShareButton
                        title={post?.title}
                        url={window.location.href}
                        className='w-full h-full flex justify-center items-center'
                      >
                        <FaTwitterSquare className='w-8 h-6 mx-auto' />
                      </TwitterShareButton>
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
                  <div className='mt-8 flex w-full items-center gap-2 sm:flex-col'>
                    <div
                      className='border-2 rounded py-2 w-3/6 flex justify-center items-center font-sfprotr cursor-pointer
                     ring-gray-700 transition-all hover:border-gray-400 hover:ring-1 sm:w-full'
                    >
                      <FacebookShareButton
                        title={post?.title}
                        url={window.location.href}
                        className='w-fit h-full flex mx-auto justify-center items-center'
                      >
                        <FaFacebookSquare className='w-8 h-6 mx-auto' />
                        <p className='sm:text-[13px]'>Share on Facebook</p>
                      </FacebookShareButton>
                    </div>
                    <div
                      className='border-2 rounded py-2 w-3/6 flex justify-center items-center font-sfprotr cursor-pointer
                     ring-gray-700 transition-all hover:border-gray-400 hover:ring-1 sm:w-full'
                    >
                      <TwitterShareButton
                        title={post?.title}
                        url={window.location.href}
                        className='w-fit h-full flex mx-auto justify-center items-center'
                      >
                        <FaTwitterSquare className='w-8 h-6 mx-auto' />
                        <p className='sm:text-[13px]'>Share on Twitter</p>
                      </TwitterShareButton>
                    </div>
                  </div>

                  <div className='font-sfprotr mt-7'>
                    Tags:{'  '}
                    {post.tags.map((tag, index) => {
                      return (
                        <Link
                          to={`/tags/${tag}`}
                          className='transition-all hover:underline hover:font-bold'
                          key={index}
                        >
                          {index === post.tags.length - 1 ? tag : `${tag}, `}
                        </Link>
                      )
                    })}
                  </div>

                  <div className='mt-9 border-t-2 border-dotted border-black'>
                    <div className='mt-4 flex items-center gap-4 sm:text-sm'>
                      <div className='w-[5rem] rounded-full overflow-hidden'>
                        {authorAvatar ? (
                          <img
                            src={authorAvatar}
                            alt=''
                            className='w-full h-full'
                          />
                        ) : null}
                      </div>
                      <p className='font-nymedium'>
                        {authorAbout ? authorAbout : null}
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
