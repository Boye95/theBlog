import { Routes, Route } from 'react-router-dom'
import { Header, Layout } from './components'
import {
  BlogPost,
  Home,
  Login,
  Profile,
  Publish,
  Tags,
  Register
} from './pages'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/blogpost' element={<BlogPost />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/publish' element={<Publish />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
