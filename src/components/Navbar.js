import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Navbar = () => {
  return (
      <AppBar position="static">
      <Container maxWidth='xl'> 
      <Toolbar>
        <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}> {/* component is defined to select the tag to be styled, sx attribute - style any component coming from matrial UI */}
          Bank of React
        </Typography>
      </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar
