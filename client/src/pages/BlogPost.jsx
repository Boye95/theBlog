import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import moment from 'moment'
import eyes from '../assets/eyes.svg'
// import img1 from '../assets/postimages/1.png'
import avatar from '../assets/avatar.png'
// import inpostimg from '../assets/inpostimgs/1.png'
import { FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { OtherArticles, Newsletter } from '../components'

import DOMPurify from 'isomorphic-dompurify';

// axios and react query
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export default function BlogPost () {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  // console.log(path)

  const fetchSinglePost = async () => {
    const res = await fetch(`http://localhost:4000/api/blogposts/${path}`)
    return res.json()
  }

  const { data, isLoading, error } = useQuery(['singlePost'], fetchSinglePost)
  const post = data?.data?.post
  // console.log(post)

  const postBody = post?.body
  const clean = DOMPurify.sanitize(postBody)
  console.log(postBody)
  // let handleBody = (state, postBody) => {
  //   postBody.update(() => {
  //     const htmlString = $generateHtmlFromNodes(postBody, null)
  //     console.log(htmlString)
  //   })
  // }
  // handleBody()

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
        // console.log('Post deleted')
        window.location.replace('/')
      }
    }
  )
  const handleDelete = () => {
    mutate()
  }

  return (
    <div className=''>
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
                <div className='border-2 rounded py-1 w-16 cursor-pointer transition-all hover:border-black'>
                  <BiEdit className='w-8 h-6 mx-auto' />
                </div>
                <div
                  className='border-2 rounded py-1 w-16 cursor-pointer transition-all hover:border-black'
                  onClick={handleDelete}
                >
                  <AiOutlineDelete className='w-8 h-6 mx-auto' />
                </div>
                {/* <div className='border-2 rounded py-1 w-16 cursor-pointer transition-all hover:border-black'>
                  <FaFacebookSquare className='w-8 h-6 mx-auto' />
                </div> */}
                <div className='border-2 rounded py-1 w-16 cursor-pointer transition-all hover:border-black'>
                  <FaTwitterSquare className='w-8 h-6 mx-auto' />
                </div>
              </div>
            </div>

            <div id='postcontent' className='mt-16 font-nysmall'>
              <div className='post_body' dangerouslySetInnerHTML={{__html:clean}} />
            </div>

            <div className=''>
              <div className='mt-8 flex w-full items-center gap-2'>
                <div className='border-2 rounded py-2 w-3/6 flex justify-center items-center font-sfprotr'>
                  <FaFacebookSquare className='w-8 h-6' />
                  <p className='sm:text-[13px]'>Share on Facebook</p>
                </div>
                <div className='border-2 rounded py-2 w-3/6 flex justify-center items-center font-sfprotr'>
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
                    <span className='font-sfproth'>ADEBOYE FOLARANMI</span> is a
                    Design Founder & Advisor, Berlin School of Creative
                    Leadership Executive MBA participant, Zippie advisor, Wolt
                    co-founder, and Nordic Rose stakeholder.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='relative'>
            <p className='mt-24 h-1 w-full bg-black'></p>
            <img src={eyes} alt='' className='absolute -top-7 inset-x-2/4' />
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
    </div>
  )
}
