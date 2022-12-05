import { useContext, useState } from 'react'
import { AuthContext } from '../authcontext/Context'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const registerUser = async user => {
  const res = await axios.post('http://127.0.0.1:4000/api/users/register', user)
  return res.data
}

export const useSignup = () => {
  const { dispatch } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const signup = user => {
    const { data, mutate, isLoading, isError, isSuccess } =
      useMutation(registerUser)
    mutate(user, {
      onSuccess: data => {
        dispatch({ type: 'LOGIN', payload: data })
        localStorage.setItem('user', JSON.stringify(data))
        console.log(data)
      },
      onError: error => {
        console.log(error)
      }
    })

    if (isLoading) {
      setIsLoading(true)
    }
    if (isError) {
      setIsError(true)
    }
    if (isSuccess) {
      setIsSuccess(true)
    }
  }

  return { signup, isLoading, isError, isSuccess }
}
