import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  return (
  <div >

    <nav >
      <div className='navlinks'>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/tasks"><li>Tasks</li></NavLink>
        <NavLink to="/livechat"><li>Live Chat</li></NavLink>
      </div>

      <h1 className='logo'>Kazi Skillset</h1>
        
      <div className='logbuttons'>
        <NavLink to="/login"><li>Login</li></NavLink>
        <NavLink to="/signup"><li>Sign Up</li></NavLink>
      </div>
    </nav>
  </div> 
  );
}

export default Navbar;