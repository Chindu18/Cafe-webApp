import React from 'react'
import './pages.css'


export const navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            Cafe.drink
        </div>
        <div className='items'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Menu</a>
            <a href="">Services</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Cart</a>
        </div>
        <div className='login'>
            <button>Login</button>
            <button>signup</button>
        </div>
    </div>
  )
}

export default navbar