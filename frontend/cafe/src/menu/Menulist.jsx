import React from 'react'
import './menu.css'

const Menulist = (props) => {
  return (
   <div className='cart'>
    <div>
        <img src={props.image} alt="" />
    </div>
     <div> 
        <h1>Food:{props.food}</h1>
        <h2>Price:{props.price}</h2>
        <h4>description:{props.description}</h4>
      </div>
    </div>
  )
}

export default Menulist