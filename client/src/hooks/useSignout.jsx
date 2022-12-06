import { useContext, useState } from 'react'
import { AuthContext } from '../authcontext/Context'
import {useNavigate, useLocation} from 'react-router-dom'


export const useSignout = () => {
    const { dispatch } = useContext(AuthContext)
    
    const navigate = useNavigate()
    const location = useLocation()
    
    const signout = () => {
        dispatch({ type: 'LOGOUT' })
        localStorage.removeItem('user')
        navigate('/')
        window.location.reload()
    }
    
    return { signout }
}