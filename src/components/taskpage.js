import React, { useState, useEffect } from 'react';
import TaskCard from './taskcard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NewTaskForm from "./newtaskform";


export default function TaskPage() {

  const url = 'http://localhost:9292'

  useEffect(() => {
    fetch(`${url}/tasks`)
      .then((r) => r.json())
      .then(setTasks)
  }, []);

  const [tasks, setTasks] = useState([]);

  function handleDelete(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }
  
  return (
    <Container>
      <h1>Tasks</h1>
      <Button variant='contained' href="/newtaskform">Add New Task</Button>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {tasks.map((task) => (
          <Grid item xs={5} key={task.id}> 
            <TaskCard
              key={task.id}
              task={task}
              isComplete={task.is_complete}
              handleDelete={handleDelete}
            />
          </Grid>
        ))}       
      </Grid>
    </Container>
    
  )
}