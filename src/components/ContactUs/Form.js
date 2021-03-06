import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const Contact_Us_URL = "http://127.0.0.1:8000/api/contact-us";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let userData = {
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    };
    // console.log(userData.message.length);
  try {
      if(userData.message.length <= 100 ){
      await axios.post(Contact_Us_URL, userData);
      toast.success("Message sent successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
      });
      navigate("/");
    }else{
      toast.error("Message exceeds limit ( 100 character )", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
      });
    }
    }catch (err) {
      console.log(err);
    }
  };

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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              color="warning"
              required
              fullWidth
              autoFocus
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              color="warning"
              required
              fullWidth
              autoFocus
              id="subject"
              label="Subject"
              name="subject"
              autoComplete="subject"
            />
            <TextField
              margin="normal"
              autoFocus
              fullWidth
              required
              multiline
              rows={5}
              maxLength={255}
              color="warning"
              id="message"
              label="Description"
              name="message"
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
