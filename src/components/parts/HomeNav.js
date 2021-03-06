import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const ttoken = JSON.parse(localStorage.getItem("token"));

  const logoutClick = () => {
    ttoken == null ? cantLogOut() : logout();
  };
  const logout = () => {
    navigate("/");
    localStorage.removeItem("token");
    loggedOut();
  };
  const loggedOut = () => {
    console.log("Logged out successfully!");
    toast.success("Logged out successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  };
  const cantLogOut = () => {
    toast.warn("You're not logged in!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 15 }}>
      <AppBar position="fixed" color="warning">
        <Toolbar>
        {/* <Avatar src="/broken-image.jpg" /> &nbsp;&nbsp; */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",fontWeight:'lighter', fontSize:35,
              }}
            > 🐕 SideLick
            </Link>
          </Typography>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button onClick={logoutClick} color="inherit" fontWeight='bold' style={{fontSize:20}}>
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
