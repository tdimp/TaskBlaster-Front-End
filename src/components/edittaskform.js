import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Container from '@mui/material/Container';

export default function EditTaskForm({ tasks, users, url }) {

  const navigate = useNavigate();

  const { id } = useParams()

  const task = tasks.find(t => t.id == id)

  const [taskCategory, setTaskCategory] = useState(task.category_id);
  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [taskPriority, setTaskPriority] = useState(task.priority);
  const [taskUser, setTaskUser] = useState(task.user_id);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let submittedTask = { task: {
      name: taskName,
      description: taskDescription,
      category_id: taskCategory,
      priority: taskPriority,
      user_id: taskUser,
    }};

    fetch(`${url}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submittedTask),
    })
      .then((r) => r.json())
      .then((newTask) => {
        if (newTask.errors) {
          return alert(newTask.errors)
        }
      })
      .then(setTimeout(() => {
        navigate('/tasks')
      }, 800))
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        backgroundColor='primary'
        component='form'
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          aligntems: 'center',
          maxWidth: "xs",
        }}
        noValidate
        autoComplete = 'off'
        onSubmit={handleFormSubmit}
      >
        <h1>Edit Task</h1>
        <TextField
          required
          id="outlined-required"
          label="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}

        />
        <TextField
          id="outlined-multiline-flexible"
          label="Task Description"
          multiline
          maxRows={4}
          name="task-description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            User
          </InputLabel>
          <NativeSelect
            onChange={(e) => setTaskUser(e.target.value)}
            value={taskUser}
          >
            {users.map((user) => 
            <option key={user.id} value={user.id}>{user.name}</option>)}
          </NativeSelect>
        </FormControl>
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Category
          </InputLabel>
          <NativeSelect
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
          >
            <option value={1}>Home</option>
            <option value={2}>Work</option>
            <option value={3}>Personal</option>
          </NativeSelect>
        </FormControl>
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Priority
          </InputLabel>
          <NativeSelect
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
          >
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
          </NativeSelect>
        </FormControl>

        <Button type="submit" variant="contained">Submit</Button>
        <Button href="/tasks">Go to Tasks Page</Button>
      </Box>
    </Container>
  )
}