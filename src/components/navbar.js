import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function NavBar() {

  return (
    <Box sx={{
      backgroundColor: 'primary',
      padding: 2.5,
      marginTop: 3,
      display: 'flex',
      justifyContent: 'space-evenly',
    }}>
      <Button
        href='/'
      > Home </Button>
      <Button
        href="/users"
      > Users </Button>
      <Button
        href="/tasks/new"
      > New Task </Button>
      <Button
        href="/users/new"
      > New User </Button>
    </Box>
  )
}

export default NavBar