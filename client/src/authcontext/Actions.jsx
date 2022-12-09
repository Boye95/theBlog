export const Login = (user) => {
    return {
        type: "LOGIN",
        payload: user,
    }
}

export const Logout = () => {
    return {
        type: "LOGOUT",
    }
}

export const Update = (user) => {
    return {
        type: "UPDATE",
        payload: user,
    }
}