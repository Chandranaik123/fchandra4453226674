import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Gallery from './Components/Home Component/Gallery'
// import { AuthProvider } from './auth/MainAuth'
function App() {

return(
  <>
  <BrowserRouter>
  {/* <AuthProvider> */}

  <NavBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
 
  {/* </AuthProvider> */}
  </BrowserRouter>
  </>
)
}
export default App
