import * as React from "react";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, Link } from "react-router-dom";
import { Warning } from "@mui/icons-material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Form() {
  const navigate = useNavigate();
  //   const Login_URL = "http://127.0.0.1:8000/api/auth/login";

  //   const handleSubmit = async(e) => {
  //     e.preventDefault();
  //     const data = new FormData(e.currentTarget);
  //     // eslint-disable-next-line no-console
  //     let userData = {
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     }
  //     // console.log(userData);
  //     try {
  //       const response = await axios.post(Login_URL, userData);
  //       // console.log(JSON.stringify(response?.data));
  //       // set token
  //       localStorage.setItem('token',JSON.stringify(response?.data));
  //       console.log(userData.email,'logged in');
  //       navigate("/home");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "warning.main" }}>
            <AssignmentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
			  color="warning"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="subject"
              label="Subject"
              name="subject"
              autoComplete="subject"
              autoFocus
			  color="warning"
            />
            <TextField
              margin="normal"
              id="message"
              label="Description"
              name="message"
              autoFocus
              fullWidth
              required
              multiline
              rows={5}
              maxLength={255}
			  color="warning"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="warning"
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
