import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';


export default function UserCard({
  user: {
    id,
    name
  },
  handleDelete,
  url,
  tasks
}) {

  const userTasks = tasks.filter((task) => task.user_id == id)
  const categories = {1: "Home", 2: "Work", 3: "Personal"}

  function handleDeleteClick(id) {
    fetch(`${url}/tasks/${id}`, {
      method: "DELETE",
    });
    //handleDelete(id)
  }

  return (
    <Container>
      <Box
        sx={{
          width: 400,
          height: '100%',
          backgroundColor: 'primary.dark',
          margin: 10,
          padding: 0.5
        }}
        >
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        </Box>
        <h1>{name}</h1>
        <ul>{tasks.filter((task) => task.user_id == id).map((t) => <li key={t.id}><h2>{t.name}
          <Link to={`/tasks/${t.id}/edit`}>
            <Button variant="contained" sx={{margin: 1}}><EditIcon /></Button>
          </Link>      
        </h2>
          <div>{t.description? t.description : "No desc"} | {categories[t.category_id]} | {t.priority} | {t.is_complete? "Complete" : "Incomplete" }</div>
          </li>)}
        </ul>
      </Box>
    </Container>
  )
}