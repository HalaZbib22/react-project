import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default function ButtonAppBar() {
    const navigate = useNavigate();
    const ttoken = JSON.parse(localStorage.getItem('token'));

    const signinClick = () => {
        navigate("/home");
    }
    const registerClick = () => {
      navigate("/signin");
  }
    const logoutClick = () => {
      ttoken == null ? cantLogOut() : logout();
    }
    const logout = () => {
      navigate("/");
      localStorage.removeItem('token');
      loggedOut();
    }
    const loggedOut = () => {
      toast.success("Logged out successfully!", {position: toast.POSITION.TOP_CENTER, autoClose: 4000});
    }
    const cantLogOut = () => {
      toast.warn("You're not logged in!", {position: toast.POSITION.TOP_CENTER, autoClose: 4000});
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="warning">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>🐕 SideLick</Link>
          </Typography>
          <Link to='/signin' style={{ textDecoration: 'none', color: 'white' }}><Button onClick={signinClick} color="inherit">Login</Button></Link>
		  <Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}><Button onClick={registerClick} color="inherit">Register</Button></Link>
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button onClick={logoutClick} color="inherit">Logout</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
