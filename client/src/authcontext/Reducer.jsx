export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        isError: false
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuth: false,
        isError: false
      }
    case 'UPDATE':
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        isError: false
      }
    default:
      return state
  }
}

// export default authReducer;
