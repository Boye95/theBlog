import { createContext, useReducer, useEffect } from 'react'
import { authReducer } from './Reducer'

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoading: false,
  isError: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)

  // console.log(state);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        isError: state.isError,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

