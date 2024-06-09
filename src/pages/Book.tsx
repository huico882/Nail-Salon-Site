import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { Booking } from "../components/Booking";
import { Navbar } from "../components/Navbar";

export const Book = () => {
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
      <Stack direction="column" alignItems="center" sx={{ width: "1000" }}>
        <Booking />
      </Stack>
    </Box>
  );
};
