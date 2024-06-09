import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { AccordianFAQ } from "../components/AccordianFAQ";
import { Booking } from "../components/Booking";
import { Navbar } from "../components/Navbar";

export const FAQs = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center", // Center items horizontally in the container
        // justifyContent: "center",
      }}
    >
      <Navbar />
      <Grid
        container
        // alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={10}>
          <Typography
            variant="h3"
            color="secondary.main"
            sx={{
              fontFamily: "Caveat, serif",
              textAlign: "center",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
            p={5}
          >
            Frequently Asked Questions
          </Typography>
          <AccordianFAQ />
        </Grid>
      </Grid>
    </Box>
  );
};
