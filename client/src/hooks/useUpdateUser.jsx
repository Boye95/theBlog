import { useContext, useState } from 'react'
import { AuthContext } from '../authcontext/Context'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const useUpdateUser = () => {
  const { user, dispatch } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
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
    isError: updateError,
    isSuccess: updateSuccess
  } = useMutation(updateUser)

  const updateUserHandler = updated => {
    mutate(updated, {
      onSuccess: data => {
        dispatch({ type: 'UPDATE', payload: data })
        localStorage.setItem('user', JSON.stringify(data))
        window.location.reload()
      },
      onError: error => {
        setIsError(error.response.data.errors.msg)
      }
    })

    if (updateLoading) {
      setIsLoading(true)
    }
    if (updateSuccess) {
      setIsSuccess(true)
    }
  }

  return { updateUserHandler, isLoading, isError, setIsError, isSuccess }
}
