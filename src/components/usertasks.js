import React, { useState } from 'react';
import TaskCard from './taskcard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';



export default function TaskPage({ tasks, users, url }) {

  const [displayedTasks, setDisplayedTasks] = useState(tasks)

  function handleDelete(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setDisplayedTasks(filteredTasks)
  }
  
  return (
    <Container>
      <h1>Tasks</h1>
      <Button variant='contained' href="/tasks/new">Add New Task</Button>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {tasks.map((task) => (
          <Grid item xs={5} key={task.id}> 
            <TaskCard
              key={task.id}
              task={task}
              isComplete={task.is_complete}
              handleDelete={handleDelete}
              users={users}
              url={url}
            />
          </Grid>
        ))}       
      </Grid>
    </Container>
    
  )
}