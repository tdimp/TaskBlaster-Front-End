import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const url = "http://localhost:9292"

export default function NewUserForm() {

  useEffect(() => {
    fetch(`${url}/users`)
      .then((r) => r.json())
      .then(setUsers)
  }, [])

  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = { user: {
      name: currentUser,
    }};

    fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.errors) {
          return alert(user.errors)
        }
        console.log(user)
      });
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            aligntems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            New User
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              onChange={(e) => setCurrentUser(e.target.value)}
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}