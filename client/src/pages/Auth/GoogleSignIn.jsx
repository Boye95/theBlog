// import react-google-login
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { FcGoogle } from 'react-icons/fc'
import { useSignup } from '../../hooks/useSignup'


export default function GoogleSignIn ({ actionText }) {
  const { signup, signupLoading, isError, setIsError, signupSuccess } = useSignup()

  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          const decodedUser = jwt_decode(credentialResponse.credential)
          const userDetail = {
            name: decodedUser?.name,
            email: decodedUser?.email,
            avatar: decodedUser?.picture,
            googleToken: credentialResponse.credential
          }
          signup(userDetail)
          console.log(userDetail)
          console.log(jwt_decode(credentialResponse.credential))
        }}
        onError={() => {
          console.log('Login Failed')
        }}
        text={actionText}
      />
    </div>
  )
}
