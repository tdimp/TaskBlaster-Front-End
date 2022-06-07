import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function TaskCard({ tasks }) {

  return (
    <Container>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
        }}
        >
        <h1>{tasks}</h1>

      </Box>
    </Container>
  )
}