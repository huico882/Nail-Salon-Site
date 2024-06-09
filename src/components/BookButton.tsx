import { Button, Typography } from "@mui/material";
import { useState } from "react";

export const BookButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <Button
      variant="outlined"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={(theme) => ({
        width: { xs: 150, sm: 150, md: 200 }, // Different sizes on different screen sizes
        height: 50, // Same as width for square shape
        borderColor: theme.palette.primary.light,
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
        },
      })}
      href="/book"
    >
      <Typography
        variant="h6"
        sx={(theme) => ({
          color: hover
            ? theme.palette.secondary.dark
            : theme.palette.primary.light, // Change the color based on hover state
        })}
      >
        Book Now
      </Typography>
    </Button>
  );
};
