import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slider from "../Slider/Slider";
import Footer from "../ContactUs/Footer";
import Navbar from "./Navbar";

const theme = createTheme();

export default function Blog() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
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
          </Grid>
        </Container>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}
