import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { BlogPost, Home, Login, Profile, Publish, Tags, Register } from './pages'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogpost' element={<BlogPost />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/publish' element={<Publish />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
