import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Log from './Log';

// Import Swal
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Navbar = () => {

  const navRef = useRef()

  const MySwal = withReactContent(Swal)

  const [loggedIn, setLoggedIn] = useState(true)
  
  return (
    <div ref={navRef} className='p-4 text-blue-200 sticky top-0 z-30 bg-white'>
      
      <div className='flex gap-2 justify-end pr-3'>
        {
          !loggedIn ? <><NavLink className="hover:text-red-400" to="/login">Login</NavLink>
                    <NavLink className="hover:text-red-400" to="/signup">Sign Up</NavLink>
                    </>
          : <Log />
        }
      </div>
      <div className='flex gap-4 justify-center font-bold'>
        <NavLink className="hover:text-red-400" to="/">Home</NavLink>
        <NavLink className="hover:text-red-400" to="/home">Client Tasks</NavLink>
        <NavLink className="hover:text-red-400" to="/tasks">Tasks</NavLink>
        <NavLink className="hover:text-red-400" to="/livechat">Live Chat</NavLink>
      </div>
    </div>
  );
}

export default Navbar;