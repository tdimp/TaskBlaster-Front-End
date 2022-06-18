import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'

export default function TaskCard({
  task: {
    id,
    name,
    description,
    is_complete,
    deadline,
    user_id,
    category_id,
    priority
  },
  users,
  url,
  handleComplete
}) {

  let taskUser = users.find(u => u.id == user_id);
  let categories = {
    1: "Home",
    2: "Work",
    3: "Personal"
  }

  function handleCompleteToggle() {
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
      .then((newComplete) => handleComplete(newComplete))
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
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Link to={`/tasks/${id}/edit`}><Button variant={"contained"}><EditIcon /></Button></Link>
        </Box>
    
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>Assigned to: {taskUser.name}</h3>
        <h3>Category: {categories[`${category_id}`]} | Priority: {priority} </h3>
        <Button variant="contained" onClick={handleCompleteToggle}>{is_complete? "Mark Incomplete" : "Complete!"}</Button>
      </Box>
    </Container>
  )
}