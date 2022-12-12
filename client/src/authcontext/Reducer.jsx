export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isLoading: true,
        isError: false
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: false
      }
    case 'LOGIN_ERROR':
      return {
        user: null,
        isLoading: false,
        isError: true
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isLoading: false,
        isError: false
      }
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: false
      }
    case 'UPDATE_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      return state
  }
}

// export default authReducer;
