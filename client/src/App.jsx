import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Header, Layout } from './components'
import {
  BlogPost,
  Home,
  Login,
  Profile,
  Publish,
  Tags,
  Register,
  PostsByTag
} from './pages'

import { AuthContext } from './authcontext/Context'

function App () {
  const { user } = useContext(AuthContext)

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/blogpost/:postID' element={<BlogPost />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/tags/:tag' element={<PostsByTag />} />
        </Route>
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to='/' />}
        />
        <Route
          path='/register'
          element={!user ? <Register /> : <Navigate to='/' />}
        />
        <Route
          path='/publish'
          element={user ? <Publish /> : <Navigate to='/login' />}
        />
        <Route
          path='/profile'
          element={user ? <Profile /> : <Navigate to='/login' />}
        />
      </Routes>
    </>
  )
}

export default App
