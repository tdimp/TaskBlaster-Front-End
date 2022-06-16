import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



export default function UserPage( {users, tasks} ) {

  return (
    <div>
      <ul>
        {users.map((user) => <li key={user.id}><Link to={`/users/${user.id}/tasks`}><Button>{user.name}</Button></Link></li>)}
      </ul>
    </div>
  )
}