export const LoginStart = () => {
    return {
        type: "LOGIN_START",
    }
}

export const LoginSuccess = (user) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: user,
    }
}

export const LoginError = () => {
    return {
        type: "LOGIN_ERROR",
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

export const UpdateError = () => {
    return {
        type: "UPDATE_ERROR",
    }
}