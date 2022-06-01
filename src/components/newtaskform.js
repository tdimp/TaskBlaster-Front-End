import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect'

export default function NewTaskForm() {

  const [taskCategory, setTaskCategory] = useState("1");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");

  const url = "http://localhost:9292"

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let submittedTask = { task: {
      name: taskName,
      description: taskDescription,
      category_id: taskCategory,
      priority: taskPriority,
    }};

    console.log(submittedTask)

    fetch(`${url}/tasks`, {
      method: "POST",
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
        console.log(newTask)
      })
  }
  return (
    <Box
      backgroundColor='primary'
      component='form'
      sx={{
        'a > :not(style)': { m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete = 'off'
      onSubmit={handleFormSubmit}
    >
      <h1>Add Task</h1>
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
          Category
        </InputLabel>
        <NativeSelect
          defaultValue={1}
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
          defaultValue={1}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </NativeSelect>
      </FormControl>
        
      <Button type="submit" variant="contained">Submit</Button>
    </Box>
  )
}