import React from 'react';


const Navbar = () => {
  
  return (
    <div >

   <nav >
      <div className='navlinks'>
        <li>Home</li>
        <li>Blog</li>
        <li>About</li>
        <li>LiveChat</li>
        </div>

        <h1 className='logo'>Kazi Skillset</h1>
        
        <div className='logbuttons'>
        <li>Log in</li>
        <li>Sign Up</li>
        </div>

     </nav>

    
  
    </div>
   
  );
}

export default Navbar;