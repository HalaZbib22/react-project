import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="warning">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>🐕‍🦺 SideLick</Link>
          </Typography>
          <Link to='/signin' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Login</Button></Link>
		  <Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Register</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
