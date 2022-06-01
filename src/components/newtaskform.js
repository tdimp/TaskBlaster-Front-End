import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

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
      component='form'
      sx={{
        'a > :not(style)': { m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete = 'off'
      onSubmit={handleFormSubmit}
    >
      <h1>Add Task</h1>
      <input
        type="text"
        name="task-name"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <input
        type="textarea"
        name="task-description"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <select onChange={(e) => setTaskCategory(e.target.value)}>
      <option value="1">Home</option>
      <option value="2">Work</option>
      <option value="3">Personal</option>
      </select>
      <select onChange={(e) => setTaskPriority(e.target.value)}>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
      </select>
        
      <Button type="submit" variant="contained">Submit</Button>
    </Box>
  )
}