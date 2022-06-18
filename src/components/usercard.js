import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function UserCard({
  user: {
    id,
    name
  },
  handleDelete,
  url,
  tasks
}) {
  const [open, setOpen] = useState(false)
  const userTasks = tasks.filter((task) => task.user_id == id)
  const categories = {1: "Home", 2: "Work", 3: "Personal"}

  function handleOpenClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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
          <div>{t.description? t.description : "No desc"} | {categories[t.category_id]} | {t.priority} </div>
          </li>)}
        </ul>
      </Box>
    </Container>
  )
}