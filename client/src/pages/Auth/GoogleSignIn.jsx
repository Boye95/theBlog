// import react-google-login
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { FcGoogle } from 'react-icons/fc'

export default function GoogleSignIn ({ actionText }) {
  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse)
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
