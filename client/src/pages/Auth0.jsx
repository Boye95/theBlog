import { useAuth0 } from '@auth0/auth0-react'

export default function Auth0 () {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithPopup,
    loginWithRedirect,
    logout
  } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {JSON.stringify(user, null, 2)}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    )
  } else {
    return <button onClick={loginWithPopup}>Log in</button>
  }
}
