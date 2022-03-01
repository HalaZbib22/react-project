import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Sidebar from "./Sidebar";
import Slider from "../Slider/Slider";
import Footer from "../ContactUs/Footer";

const sidebar = {
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};
const theme = createTheme();

export default function Blog() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
        <Slider />
          <Grid
            container
            spacing={5}
            style={{
              paddingTop: "100px",
            }}
            containerStyle={{
              position: "relative",
              overflow: "visible",
            }}
          >
            {/* <Sidebar social={sidebar.social} /> */}
          </Grid>
        </Container>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}
