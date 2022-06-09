import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Container from '@mui/material/Container';

export default function EditTaskForm() {

  const url = "http://localhost:9292"
  
  useEffect(() => {
    fetch(`${url}/users`)
      .then((r) => r.json())
      .then(setUsers)
  }, [])

  useEffect(() => {
    fetch(`${url}/tasks/${id}`)
      .then((r) => r.json())
      .then(setTask)
  }, [])

  const [users, setUsers] = useState([]);
  const [task, setTask] = useState({})
}