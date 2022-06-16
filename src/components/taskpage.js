import React, { useState } from 'react';
import TaskCard from './taskcard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';



export default function TaskPage({ tasks, users, url }) {

  const [displayedTasks, setDisplayedTasks] = useState(tasks)
  const [taskUser, setTaskUser] = useState("");

  function handleDelete(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setDisplayedTasks(filteredTasks)
  }

  function filterTasksByUser(id) {
    if (isNaN(id)) {
      setDisplayedTasks(tasks)
    } else {
      const filteredTasks = tasks.filter((task) => task.user_id == id)
      setDisplayedTasks(filteredTasks);
    }      
  }
  
  return (
    <Container>
      <h1>Tasks</h1>
      <Button variant='contained' href="/tasks/new">Add New Task</Button>
      <Box>
        <FormControl>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              User
            </InputLabel>
            <NativeSelect
              defaultValue={"All"}
              onChange={(e) => filterTasksByUser(e.target.value)}
            >
              <option value={"All"}>All</option>
              {users.map((user) => 
              <option key={user.id} value={user.id}>{user.name}</option>)}
            </NativeSelect>
          </FormControl>
      </Box>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {displayedTasks.map((task) => (
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