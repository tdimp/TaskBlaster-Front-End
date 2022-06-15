import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import EditTaskForm from './edittaskform';
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
  handleDelete
}) {

  const [isComplete, setIsComplete] = useState(is_complete)
  const [open, setOpen] = useState(false)

  const url = 'http://localhost:9292'

  function handleCompleteToggle() {
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
      .then((newComplete) => setIsComplete(newComplete.is_complete))
  }

  function handleOpenClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleDeleteClick() {
    fetch(`${url}/tasks/${id}`, {
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
          <Link to={`/tasks/${id}/edit`}><Button variant={"contained"}><EditIcon /></Button></Link>
          <Button variant="contained" onClick={handleOpenClick}><DeleteForeverIcon/></Button>
        </Box>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Delete Task?</DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button variant="contained" onClick={handleDeleteClick}>Yes</Button>
          </DialogActions>
        </Dialog>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <Button variant="contained" onClick={handleCompleteToggle}>{isComplete? "Mark Incomplete" : "Complete!"}</Button>
      </Box>
    </Container>
  )
}