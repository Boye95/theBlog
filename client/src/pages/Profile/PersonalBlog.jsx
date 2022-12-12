import React, { useContext } from 'react'
import img4 from '../../assets/postimages/4.png'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AuthContext } from '../../AuthContext/Context'

const PersonalBlog = () => {
  const { user } = useContext(AuthContext)
  const authorID = user?.data?.registeredUser?._id

  const fetchByAuthor = async () => {
    const post = await axios.get(
      `http://localhost:4000/api/blogposts/author/${authorID}`
    )
    return post.data
  }

  const { data, isLoading, isError, isSuccess } = useQuery(['authorpost'], fetchByAuthor, {
    onSuccess: (data) => {
      console.log(data)

    }
  })
  // console.log(data)

  return (
    <div
      className='w-11/12 flex flex-wrap gap-6 mb-9 mx-auto 
    sm:justify-center [&>*]:xl:h-[22rem] [&>*]:xl:w-[18rem]'
    >
      <Link
        to='/blogpost'
        className='flex flex-col gap-3 h-[25rem] w-[20rem] border-4 rounded-md transition hover:ring-blue-400 hover:ring-2 hover:ring-offset-2'
      >
        <img src={img4} alt='' className='w-full rounded-sm' />
        <div className='overflow-hidden w-full p-1 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci
          esse voluptatibus quos perspiciatis laborum minima laudantium eum ab
          libero, dolore, facere optio alias nostrum debitis exercitationem
          commodi nam? Quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio adipisci esse voluptatibus quos perspiciatis
        </div>
      </Link>
    </div>
  )
}

export default PersonalBlog
