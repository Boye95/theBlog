import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "./Reducer";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuth: false,
    error: false,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
    
    // useEffect(() => {
    //     const userr = localStorage.getItem("user", JSON.stringify('user'));
        
    //     if (userr) {
    //         dispatch({ type: "LOGIN", payload: userr });
    //     } else {
    //         dispatch({ type: "LOGOUT" });
    //     }
    // }, []);
    console.log(state);
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