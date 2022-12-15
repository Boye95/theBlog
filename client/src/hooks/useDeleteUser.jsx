import { useContext, useState } from 'react'
import { AuthContext } from '../authcontext/Context'
import { useLocation, useNavigate } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const useDeleteUser = () => {
  const { user, isLoading, isError, dispatch } = useContext(AuthContext)
  const [error, setError] = useState('')
  const token = user?.data?.token
  const userId = user?.data?.registeredUser?._id
  const navigate = useNavigate()

  const deleteUser = async id => {
    const { data } = await axios.delete(
      `http://127.0.0.1:4000/api/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return data
  }

  const {
    mutate,
    isLoading: isDeleting,
    isSuccess: isDeleteSuccess,
  } = useMutation(deleteUser)

  const handleDelete = id => {
    mutate(id, {
      onSuccess: () => {
        dispatch({ type: 'DELETE_USER' })
        localStorage.removeItem('user')
        navigate('/')
        window.location.reload()
      },
      onError: error => {
        dispatch({ type: 'DELETE_ERROR' })
        if (error.response.data.message) {
          setError(error.response.data.message.message)
        }
        setError(error.response.data.errors.msg)
      }
    })
  }

  return { user, handleDelete, isDeleting, isDeleteSuccess, error }
}
