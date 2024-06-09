import { Box, Stack, Typography } from "@mui/material";
import { BookButton } from "../components/BookButton";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh", // Adjust the height as needed
        backgroundRepeat: "no-repeat",
        backgroundImage:
          'url("/NailArtJPEG/0DDA883B-876C-4B42-A98D-F116A2C53DDC.jpg")', // Path to your background image
        backgroundSize: "cover", // Cover the entire Box area
        backgroundPosition: "center center", // Center the background image
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.25)", // Dark overlay, adjust color and opacity as needed
          zIndex: 1, // Ensure it's above the background image but below the content
        }}
      />
      <Navbar />
      <Stack
        direction="column"
        flex={1}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        position="relative"
        zIndex={2}
      >
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Typography
            variant="h4"
            color="secondary.light"
            sx={{
              fontFamily: "Lora, serif",
              fontSize: {
                xs: "1.5rem", // Smaller font size on xs screens
                sm: "1.5rem", // Slightly larger on sm screens
                md: "1.75rem", // Default size on md screens and up
              },
            }}
          >
            Craft the Perfect Look - Your Dream Nails Await!
          </Typography>
        </Box>
        <BookButton />
      </Stack>
    </Box>
  );
};
