import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import  Menu  from './components/Menu'
import  About  from './components/About'
import  Cart  from './components/Cart'
import  Blog  from './components/Blog'
import  Contact  from './components/Contact'
import  Login  from './components/Login'
import  Signup  from './components/Signup'
import  Service  from './components/Service'
import  Navbar  from './components/layout/Navbar'
import  App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
       <Route  element={<Navbar />} /> 
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        <Route/>
      </Routes>
     
    </BrowserRouter>
    
  </StrictMode>,
)
