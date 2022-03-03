import * as React from "react";
import { Avatar } from '@mui/material';
import HomeNav from './parts/HomeNav';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from 'react-router-dom';

function Copyright(props) {
	return (
	  <Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
		<Link color="inherit" to="/contact-us">
		  Contact Us
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }
  
const theme = createTheme();  

export default function Home(){
	const ttoken = JSON.parse(localStorage.getItem('token'));
	const sendData = {};
  	const navigate = useNavigate();
  	const Update_URL = "http://127.0.0.1:8000/api/auth/update";

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let userData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
    }
	console.log(sendData);
	if (userData.name !== '' ){
		 sendData["name"] = userData.name;
		}
	if (userData.email !== '' ){
		sendData["email"] = userData.email;
		}
	if (userData.password !== '' ){
		sendData["password"] = userData.password;
		}
	console.log(sendData);
    try {
		const response = await axios.post(
			Update_URL,
			sendData, { headers: { Authorization: `Bearer ${ttoken.access_token}`},}
		  );
		toast.success("edited successfully!", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 4000,
			});
      	console.log('SUCCESS');
      	navigate("/home");
    } catch (err) {
      console.log(err);
    }
};
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
		<HomeNav/>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "warning.main" }}>
            <BorderColorIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  color="warning"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  color="warning"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color="warning"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password_confirmation"
                  label="Confirm Password"
                  type="password"
                  id="password_confirmation"
                  autoComplete="password_confirmation"
                  color="warning"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="warning"
            >
              Edit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
