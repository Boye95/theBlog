// import react-google-login
import { useGoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { FcGoogle } from 'react-icons/fc'
import { useSignup } from '../../hooks/useSignup'

export default function GoogleSignIn ({ buttonText}) {
  const { signup, signupLoading, isError, setIsError, signupSuccess } =
    useSignup()

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      const googleToken = tokenResponse.access_token
      const user = { googleToken }
      signup(user)
    },
    onError: errorResponse => console.log(errorResponse)
  })

  return (
    <button className='flex items-center gap-2' onClick={() => login()}>
      {buttonText} <FcGoogle />
    </button>
  )
}
