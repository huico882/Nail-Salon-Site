import { ReportProblemOutlined } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import { Navbar } from "../components/Navbar";

export const NoPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Stack
        direction="column"
        flex={1}
        spacing={0.5}
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <ReportProblemOutlined
          sx={{ color: "secondary.main", fontSize: "4rem" }}
        />
        <Box
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            variant="h3"
            color="secondary.main"
            sx={{
              fontFamily: "Lora, serif",
              fontSize: {
                xs: "1.5rem", // Smaller font size on xs screens
                sm: "1.5rem", // Slightly larger on sm screens
                md: "1.75rem", // Default size on md screens and up
              },
            }}
          >
            PAGE IS NOT AVAILABLE
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
