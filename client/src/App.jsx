import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { BlogPost, Home, Login, Publish, Tags, Register } from './pages'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogpost' element={<BlogPost />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
