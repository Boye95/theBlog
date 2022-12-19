import React, { useContext } from 'react'
import { AuthContext } from '../../authcontext/Context'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import moment from 'moment'

export default function Dashboard () {
  const { user } = useContext(AuthContext)
  const token = user?.data?.token

  // fetch all users from db
  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:4000/api/modifyuser', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data
  }

  const { data, isLoading, error, isSuccess } = useQuery(
    ['allusers'],
    fetchUsers
  )

  const users = data?.data?.allUsers

  // get all posts
  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/api/blogposts')
    return res.data
  }

  const {
    data: posts,
    isLoading: postsLoading,
    error: postsError,
    isSuccess: postsSuccess
  } = useQuery(['allposts'], fetchPosts)
  console.log(users)

  return (
    <div className='w-4/6 mx-auto my-5'>
      {/* total number of regsitered users */}
      <div
        className='border-2 border-violet-700 shadow-[5px_5px_0px_0px_rgba(109,40,217)]
      font-nylarge text-center p-5 rounded-lg'
      >
        <h1 className=''>Total Registered Users</h1>
        <h1 className='text-[5rem] font-sfprod'>{data?.results}</h1>
      </div>
      {/* total number of posts */}
      <div
        className='border-2 border-violet-700 shadow-[5px_5px_0px_0px_rgba(109,40,217)]
      font-nylarge text-center p-5 rounded-lg my-5'
      >
        <h1 className=''>Total Posts</h1>
        <h1 className='text-[5rem] font-sfprod'>{posts?.results}</h1>
      </div>
      {/* list of users */}
      <div
        className='border-2 border-violet-700 shadow-[5px_5px_0px_0px_rgba(109,40,217)]
      font-nylarge text-center p-5 rounded-lg my-5'
      >
        <h1
          className='border-2 border-violet-700 shadow-[5px_5px_0px_0px_rgba(109,40,217)]
      font-nylarge text-center p-5 rounded-lg my-5'
        >
          List of Users
        </h1>
        <div className='flex flex-col'>
          {users?.map(user => (
            <div
              className='flex justify-between items-center my-2 border-2 border-violet-700 shadow-[5px_5px_0px_0px_rgba(109,40,217)]
            font-nylarge text-center p-5 rounded-lg'
            >
              <div className=''>
                <div className='font-sfprod'>
                  <h1 className=''>{user.name}</h1>
                  <p className=''>{`Joined: ${moment(user.createdAt).format(
                    'lll'
                  )}`}</p>
                </div>

                <h1 className='text-[2rem] font-sfprod'>{user.role}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
