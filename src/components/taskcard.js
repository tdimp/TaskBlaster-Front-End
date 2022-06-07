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
          is_complete: !is_complete
        }
      }),
    })
      .then((r) => r.json())
      .then((task) => console.log(task))
  }
  
  return (
    <Container>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
        }}
        >
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>{deadline}</h3>
        <Button variant="contained" onClick={handleCompleteToggle}>{is_complete? "Mark Incomplete" : "Complete!"}</Button>
      </Box>
    </Container>
  )
}