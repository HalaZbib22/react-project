import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const sidebar = {
  title: "About",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non nunc et enim rhoncus vehicula in at enim. Integer congue sollicitudin mi vitae semper. Donec volutpat, metus vitae blandit facilisis, mi ex iaculis velit, non laoreet augue mi vel massa. Aliquam porttitor tempus ullamcorper. Nam lobortis semper erat, a luctus neque bibendum ac. Quisque ut turpis a leo vestibulum malesuada eget malesuada risus. Pellentesque feugiat urna eget metus feugiat, sit amet ultrices nunc aliquet.",
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};
const theme = createTheme();

export default function Blog(){
  return (
    <div>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth="lg">
        <Grid container spacing={5} style={{
    paddingTop: '100px',
    boxSizing: 'content-box',
  }}
  containerStyle={{
    position: 'relative',
    overflow: 'visible'
  }}>
          <Sidebar title={sidebar.title} description={sidebar.description} social={sidebar.social} />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
    </div>
  );
}