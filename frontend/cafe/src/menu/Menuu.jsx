import React, { useEffect, useState } from 'react';
import './menu.css';
import Menulist from './Menulist';

const Menuuu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/menu')
     .then(res=>{
      return res.json();
     }).then(data=>{
      setMenus(data);
     })
  }, []);

  if(!menus){
    return <div>Loading...</div>;
  }

  const menuItems = menus.map((menu, index) => (
    <Menulist
      key={index}
      food={menu.food}
      price={menu.price}
      description={menu.description}
      image={menu.image}
    />
  ));

  return (
    <div className='menu'>
      {menuItems}
    </div>
  );
};

export default Menuuu;
