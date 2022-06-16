import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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

  const [open, setOpen] = useState(false)

  const userTasks = tasks.filter((task) => task.user_id == id)
  const testArray = ["Test", "Testing", "Testering"]
  const categories = {1: "Home", 2: "Work", 3: "Personal"}

  function handleOpenClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleDeleteClick() {
    console.log("click")
    fetch(`http://localhost:9292/users/${id}`, {
      method: "DELETE",
    });
    handleDelete(id)
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
          <Link to={`/users/${id}/edit`}><Button variant={"contained"}><EditIcon /></Button></Link>
          <Button variant="contained" onClick={handleOpenClick}><DeleteForeverIcon/></Button>
        </Box>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Delete User?</DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button variant="contained" onClick={handleDeleteClick}>Yes</Button>
          </DialogActions>
        </Dialog>
        <h1>{name}</h1>
        <ul>{tasks.filter((task) => task.user_id == id).map((t) => <li key={t.id}>{t.name} | {t.description} | {categories[t.category_id]} | {t.priority} </li>)}</ul>
      </Box>
    </Container>
  )
}