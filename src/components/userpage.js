import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import UserCard from './usercard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



export default function UserPage( { users, tasks, handleDelete, url } ) {

  const [displayedUsers, setDisplayedUsers] = useState(users);


  function handleDeleteClick(id) {
    const filteredUsers = users.filter((user) => user.id != id)
    setDisplayedUsers(filteredUsers);
  }

  return (
    <Container>
      <h1>Users</h1>
      <Button variant='contained' href="/users/new">Add New User</Button>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {users.map((user) => (
          <Grid item xs={5} key={user.id}> 
            <UserCard
              key={user.id}
              user={user}
              handleDelete={handleDeleteClick}
              url={url}
              tasks={tasks}
            />
          </Grid>
        ))}       
      </Grid>
    </Container>
  )
}