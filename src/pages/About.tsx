import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Navbar } from "../components/Navbar";

export const About = () => {
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
      <Grid container p={{ xs: 5, sm: 20 }} spacing={20}>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/nails_1920_2880.jpg"
            sx={{ width: 300, height: 300 }}
          />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Stack direction="column">
            <Typography
              variant="h2"
              pb={4}
              color="secondary.main"
              sx={{
                fontFamily: "Caveat, serif",
                // textAlign: "center",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              About Me
            </Typography>
            <Box pl={2}>
              <Typography
                variant="h4"
                color="secondary.dark"
                sx={{
                  fontFamily: "Lora, serif",
                  // textAlign: "center",
                  fontWeight: "bold",
                  // fontStyle: "italic",
                }}
              >
                Bryanna Huico
              </Typography>
              <Typography
                variant="body1"
                color="secondary.main"
                sx={{
                  fontFamily: "Lora, serif",
                  // textAlign: "center",
                  fontWeight: "300",
                  // fontStyle: "italic",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                reprehenderit veniam atque aliquam ipsam reiciendis assumenda,
                debitis dolorum, dolores velit, tempore eos laborum ut ipsum
                illum odio facilis nihil fuga.
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
