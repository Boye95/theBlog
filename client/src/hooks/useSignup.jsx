import { useContext, useState } from 'react'
import AuthContext from '../authcontext/Context'
import { useNavigate } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const registerUser = async user => {
  const res = await axios.post('http://127.0.0.1:4000/api/users/register', user)
  return res.data
}

export const useSignup = () => {
  const { dispatch } = useContext(AuthContext)
  const [isError, setIsError] = useState('')

  const navigate = useNavigate()

  const {
    data,
    mutate,
    isLoading: signupLoading,
    isSuccess: signupSuccess
  } = useMutation(registerUser)

  const signup = user => {
    mutate(user, {
      onSuccess: data => {
        dispatch({ type: 'LOGIN', payload: data })
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/')
        window.location.reload()
      },
      onError: error => {
        if (error.response.data.message) {
          setIsError(error.response.data.message.message)
        }
        setIsError(error.response.data.errors.msg)
      }
    })
  }

  return { signup, signupLoading, isError, setIsError, signupSuccess }
}
