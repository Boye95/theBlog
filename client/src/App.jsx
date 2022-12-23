import React, { useContext, useEffect } from 'react'
import { AuthContext } from './context/Context'
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
  PostsByTag,
  Dashboard,
  ErrorPage
} from './pages'

function App () {
  // scroll to the top on page load using useEffect
  useEffect(() => {
    window.scrollTo(0, 0, 'smooth')
  }, [])

  const { user } = useContext(AuthContext)
  const admin = user?.data?.registeredUser?.role === 'admin'

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/blogpost/:postID' element={<BlogPost />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/tags/:tag' element={<PostsByTag />} />
          <Route
            path='/dashboard'
            element={admin ? <Dashboard /> : <Navigate to='/' />}
          />
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
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
