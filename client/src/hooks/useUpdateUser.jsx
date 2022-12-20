import { useContext, useState } from 'react'
import AuthContext from '../AuthContext/Context'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const useUpdateUser = () => {
  const { user, isLoading, isError, dispatch } = useContext(AuthContext)
  const [error, setError] = useState('')
  const token = user?.data?.token
  const userId = user?.data?.registeredUser?._id

  // patch user with axios
  const updateUser = async data => {
    let updater = await axios.patch(
      `http://localhost:4000/api/modifyuser/${userId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return updater.data
  }

  const {
    mutate,
    isLoading: updateLoading,
    isSuccess
  } = useMutation(updateUser)

  
  const updateUserHandler = updated => {
    mutate(updated, {
      onSuccess: data => {
        dispatch({ type: 'UPDATE_SUCCESS', payload: data })
        localStorage.setItem('user', JSON.stringify(data))
        window.location.reload()
      },
      onError: error => {
        dispatch({ type: 'UPDATE_ERROR' })
        if (error.response.data.message) {
            setError(error.response.data.message.message)
        }
        setError(error.response.data.errors.msg)
      }
    })
  }
  return { updateUserHandler, updateLoading, isSuccess, error }
}
