import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function TaskCard({
  task: {
    id,
    name,
    description,
    is_complete,
    deadline
  },
}) {

  const [isComplete, setIsComplete] = useState(is_complete)

  const url = 'http://localhost:9292'

  function handleCompleteToggle() {
    console.log("Clicked!")
    fetch(`${url}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: {
          is_complete: !isComplete
        }
      }),
    })
      .then((r) => r.json())
      .then((task) => setIsComplete(task))
  }

  function handleDeleteClick() {
    console.log("Click")
    fetch(`${url}/tasks/${id}`, {
      method: "DELETE",
    });
    console.log("delete click")
  }
  
  return (
    <Container>
      <Box
        sx={{
          width: 400,
          height: 325,
          backgroundColor: 'primary.dark',
          margin: 10
        }}
        >
        <Button variant="contained">Edit Task</Button>
        <Button variant="contained" onClick={handleDeleteClick}>Delete</Button>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>{deadline}</h3>
        <Button variant="contained" onClick={handleCompleteToggle}>{isComplete? "Mark Incomplete" : "Complete!"}</Button>
      </Box>
    </Container>
  )
}