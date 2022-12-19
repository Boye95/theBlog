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
    <div className='w-4/6 mx-auto my-5 sm:w-[90%]'>
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
              className='flex justify-between items-center gap-3 my-2 border-2 border-violet-700 shadow-[5px_5px_0px_0px_rgba(109,40,217)]
            font-nylarge text-center p-5 rounded-lg'
            >
              <div className='w-full'>
                <div className='flex justify-between sm:flex-col sm:items-start sm:gap-3'>
                  <div className='flex items-center gap-2'>
                    <div
                      className='h-8 w-8 cursor-pointer rounded-sm border overflow-hidden border-violet-700 shadow-[5px_5px_0px_0px_rgba(109,40,217)] ring-1 ring-gray-600 ring-offset-2
                   transition-shadow hover:ring-2 hover:ring-violet-400'
                    >
                      {user.avatar ? (
                        <img src={user.avatar.url} alt='' className='w-full' />
                      ) : (
                        <img
                          src='https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'
                          alt=''
                          className='w-full'
                        />
                      )}
                    </div>
                    <h1 className=''>{user.name}</h1>
                  </div>
                  <p className=''>{`Joined: ${moment(user.createdAt).format(
                    'lll'
                  )}`}</p>
                </div>
                <div className='flex flex-col items-center gap-2 font-sfprotr'>
                  <div className='w-2/6'>
                    <p className='font-nylarge text-xl'>{user.posts.length}</p>
                    <h1 className=''>Total Posts</h1>
                  </div>
                  <div className='4/6'>
                    <p className=''>
                      <h1 className='font-nymedium'>About</h1>
                      {user?.about ? user?.about : 'No about'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
