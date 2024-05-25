import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import About from './pages/About'
import Profile from './pages/Profile'
const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/sign-in" element={<Signin></Signin>} />
      <Route path="/sign-up" element={<Signout></Signout>} />
      <Route path="/about" element={<About></About>} />
      <Route path="/profile" element={<Profile></Profile>} />
    </Routes>
  
  </BrowserRouter>
}

export default App