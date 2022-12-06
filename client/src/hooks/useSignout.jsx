import { useContext, useState } from 'react'
import { AuthContext } from '../authcontext/Context'
import {useNavigate} from 'react-router-dom'


export const useSignout = () => {
    const { dispatch } = useContext(AuthContext)
    
    const navigate = useNavigate()
    
    const signout = () => {
        dispatch({ type: 'LOGOUT' })
        localStorage.removeItem('user')
        navigate('/')
    }
    
    return { signout }
}