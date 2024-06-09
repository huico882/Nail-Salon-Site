import { Box, Typography } from "@mui/material";
import React from "react";
import { Gallery } from "./Gallery";

export const HomeFeed = () => {
  return (
    <Box flex={6} p={2} bgcolor="skyblue">
      <Typography>HomeFeed</Typography>
      <Gallery />
    </Box>
  );
};
