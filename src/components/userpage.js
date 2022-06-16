import React, { useState } from 'react';
import Button from '@mui/material/Button';



export default function UserPage( {users, tasks} ) {

  return (
    <div>
      <ul>
        {users.map((user) => <li><Button>{user.name}</Button></li>)}
      </ul>
    </div>
  )
}