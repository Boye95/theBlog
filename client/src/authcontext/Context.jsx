import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "./Reducer";

const INITIAL_STATE = {
    user: null,
    isAuth: false,
    error: false,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch({ type: "LOGIN", payload: user });
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isAuth: state.isAuth,
                isError: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}