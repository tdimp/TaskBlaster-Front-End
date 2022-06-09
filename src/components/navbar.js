import * as React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
      > Home </NavLink>
      <NavLink
        to="/tasks"
      > Tasks </NavLink>
      <NavLink
        to="/newtaskform"
      > New Task Form </NavLink>
      <NavLink
        to="/newuserform"
      > New User Form </NavLink>
    </div>
  )
}

export default NavBar