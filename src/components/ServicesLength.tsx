import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const ServicesLength = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        color="secondary.main"
        sx={{
          fontFamily: "Lora, serif",
          textAlign: "center",
        }}
      >
        Length
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={8}>
          {/* More space on the right */}
          <Typography variant="body1" color="secondary.main">
            Short
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Medium
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Medium Long
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Long
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Extra Long
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
            $20+
          </Typography>
          <Typography variant="body1" color="secondary.main">
            $25+
          </Typography>
          <Typography variant="body1" color="secondary.main">
            $30+
          </Typography>
          <Typography variant="body1" color="secondary.main">
            $40+
          </Typography>
          <Typography variant="body1" color="secondary.main">
            $45+
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
