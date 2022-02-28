import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
    const navigate = useNavigate();

    const signinClick = () => {
        navigate("/home");
    }
    const registerClick = () => {
      navigate("/signin");
  }
    const logoutClick = () => {
      navigate("/");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="warning">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>🐕‍🦺 SideLick</Link>
          </Typography>
          <Link to='/signin' style={{ textDecoration: 'none', color: 'white' }}><Button onClick={signinClick} color="inherit">Login</Button></Link>
		  <Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}><Button onClick={registerClick} color="inherit">Register</Button></Link>
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button onClick={logoutClick} color="inherit">Logout</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
