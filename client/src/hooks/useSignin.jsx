import { useContext, useState } from 'react'
import { AuthContext } from '../authcontext/Context'
import {useLocation, useNavigate} from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const loginUser = async user => {
  const res = await axios.post('http://127.0.0.1:4000/api/users/login', user)
  return res.data
}

export const useSignin = () => {
  const { dispatch } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const {
    data,
    mutate,
    isLoading: signinLoading,
    isError: signupError,
    isSuccess: signinSuccess
  } = useMutation(loginUser)

  const signin = user => {
    mutate(user, {
      onSuccess: data => {
        dispatch({ type: 'LOGIN', payload: data })
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/')
        window.location.reload()
      },
      onError: error => {
        setIsError(error.response.data.errors.msg)
      }
    })

    if (signinLoading) {
      setIsLoading(true)
    }
    if (signinSuccess) {
      setIsSuccess(true)
    }
  }
  

  return { signin, isLoading, isError, setIsError, isSuccess }
}
