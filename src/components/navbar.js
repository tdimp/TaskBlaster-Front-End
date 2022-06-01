import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
        exact
      > Home </NavLink>
    </div>
  )
}

export default NavBar