import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'

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
          <Link to={`/users/${id}/edit`}><Button variant={"contained"}><EditIcon /></Button></Link>
        </Box>
        <h1>{name}</h1>
        <ul>{tasks.filter((task) => task.user_id == id).map((t) => <li key={t.id}><h3>{t.name}</h3> {t.description? t.description : "No desc"} | {categories[t.category_id]} | {t.priority} </li>)}</ul>
      </Box>
    </Container>
  )
}