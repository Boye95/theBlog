import { useContext, useState } from 'react'
import { AuthContext } from '../authcontext/Context'
import {useNavigate} from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const registerUser = async user => {
  const res = await axios.post('http://127.0.0.1:4000/api/users/register', user)
  return res.data
}

export const useSignup = () => {
  const { dispatch } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const navigate = useNavigate()

  const {
    data,
    mutate,
    isLoading: signupLoading,
    isError: signupError,
    isSuccess: signupSuccess
  } = useMutation(registerUser)

  const signup = user => {
    mutate(user, {
      onSuccess: data => {
        dispatch({ type: 'LOGIN', payload: data })
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/')
      },
      onError: error => {
        console.log(error.response.data.errors)
        setIsError(error.response.data.errors.msg)
      }
    })

    if (signupLoading) {
      setIsLoading(true)
    }
    // if (signupError) {
    //   setIsError(error.response.data.errors.msg)
    // }
    if (signupSuccess) {
      setIsSuccess(true)
    }
  }
  

  return { signup, isLoading, isError, setIsError, isSuccess }
}
