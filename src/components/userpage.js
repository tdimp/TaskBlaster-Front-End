import React, { useState } from 'react';
import Button from '@mui/material/Button';
import UserCard from './usercard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



export default function UserPage( { users, tasks, url, handleEditTask } ) {

  const [displayedTasks, setDisplayedTasks] = useState(tasks);


  function handleDeleteClick(id) {
    const filteredTasks = tasks.filter((task) => task.id != id)
    setDisplayedTasks(filteredTasks);
  }

  return (
    <Container>
      <h1>Users</h1>
      <Button variant='contained' href="/users/new">New User</Button>
      <Button variant='contained' href='/tasks/new' sx={{margin: 1}}>New Task</Button>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {users.map((user) => (
          <Grid item xs={5} key={user.id}> 
            <UserCard
              key={user.id}
              user={user}
              handleDelete={handleDeleteClick}
              handleComplete={handleEditTask}
              url={url}
              tasks={tasks}
            />
          </Grid>
        ))}       
      </Grid>
    </Container>
  )
}