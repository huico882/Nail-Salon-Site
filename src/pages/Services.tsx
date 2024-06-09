import styled from "@emotion/styled";
import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Gallery } from "../components/Gallery";
import { Navbar } from "../components/Navbar";
import { ServicesAddOn } from "../components/ServicesAddOn";
import { ServicesLength } from "../components/ServicesLength";

export const Services = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        // display: "flex",
        // flexDirection: "column",
      }}
    >
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            // position="relative"
          >
            <Box pb={2} pt={5}>
              <Typography
                variant="h2"
                color="secondary.main"
                sx={{
                  fontFamily: "Caveat, serif",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                Services
              </Typography>
            </Box>

            {/* THIS BOX CONTAINS PRICING DEPENDING ON LENGTH */}
            <ServicesLength />
            {/* THIS BOX PERTAINS TO ADD_ONS */}
            <ServicesAddOn />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8} alignItems="center">
          <Gallery />
        </Grid>
      </Grid>
    </Box>
  );
};
