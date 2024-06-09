import { Send } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

export const SubmitForm = () => {
  const [hover, setHover] = useState(false);
  return (
    <Button
      variant="outlined"
      type="submit"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={(theme) => ({
        width: { xs: 150, sm: 200, md: 200 }, // Different sizes on different screen sizes
        height: 50, // Same as width for square shape
        borderColor: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
        },
        mt: 1,
      })}
      //   onClick={() => console.log("Book Now!")}
      endIcon={<Send color="secondary" />}
    >
      <Typography
        variant="h6"
        sx={(theme) => ({
          color: theme.palette.secondary.main, // Change the color based on hover state
        })}
      >
        Submit
      </Typography>
    </Button>
  );
};
