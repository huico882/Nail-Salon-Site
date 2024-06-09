import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export const ServicesAddOn = () => {
  return (
    <Box pt={2}>
      <Typography
        variant="h5"
        color="secondary.main"
        sx={{
          fontFamily: "Lora, serif",
          textAlign: "center",
        }}
      >
        Add-ons
        <Box component="span" sx={{ fontSize: "0.6em", ml: 1 }}>
          (each nail)
        </Box>
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={8}>
          {/* More space on the right */}
          <Typography variant="body1" color="secondary.main">
            French
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Glitter French
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Ombre
          </Typography>
          <Typography variant="body1" color="secondary.main">
            3D Flower
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Rhinestones
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Nail Charms
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Sweater Nail
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Small Nail Art
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Divider
            orientation="vertical"
            sx={(theme) => ({ color: theme.palette.secondary.main })}
          />
        </Grid>
        <Grid item sm={2}>
          <Typography variant="body1" color="secondary.main">
            $2
          </Typography>
          <Typography variant="body1" color="secondary.main">
            $3
          </Typography>
          <Typography variant="body1" color="secondary.main">
            $2
          </Typography>
          <Typography variant="body1" color="secondary.main">
            $3+
          </Typography>
          <Typography variant="body1" color="secondary.main">
            $2+
          </Typography>
          <Typography variant="body1" color="secondary.main">
            $2+
          </Typography>
          <Typography variant="body1" color="secondary.main">
            $2
          </Typography>
          <Typography variant="body1" color="secondary.main">
            $2+
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
