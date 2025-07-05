import React from 'react'
import { NavLink } from 'react-router-dom'
import '../pages.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>Cafe.drink</div>

      <div className='items'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'b' : 'a'}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'b' : 'a'}>About</NavLink>
        <NavLink to="/menu" className={({ isActive }) => isActive ? 'b' : 'a'}>Menu</NavLink>
        <NavLink to="/service" className={({ isActive }) => isActive ? 'b' : 'a'}>Services</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'b' : 'a'}>Blog</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'b' : 'a'}>Contact</NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'b' : 'a'}>Cart</NavLink>
      </div>

      <div className='login'>
        <button><NavLink to="/login" className={({ isActive }) => isActive ? 'b' : 'a'}>Login</NavLink></button>
        <button><NavLink to="/signup" className={({ isActive }) => isActive ? 'b' : 'a'}>Signup</NavLink></button>
      </div>
    </div>
  )
}

export default Navbar
