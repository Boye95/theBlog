import { Routes, Route } from 'react-router-dom'
import { Header, Layout } from './components'
import {
  BlogPost,
  Home,
  Login,
  Profile,
  Publish,
  Tags,
  Register,
  Auth0
} from './pages'


function App () {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/blogpost/:postID' element={<BlogPost />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/publish' element={<Publish />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/auth0' element={<Auth0 />} />
        <Route path="/tags" element={<Tags />} />
      </Routes>
    </>
  )
}

export default App
