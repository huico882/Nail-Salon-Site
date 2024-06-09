import { Box, createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import { NoPage } from "./pages/NoPage";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Book } from "./pages/Book";
import { About } from "./pages/About";
import { FAQs } from "./pages/FAQs";

const theme = createTheme({
  palette: {
    primary: {
      light: "#E6E2DD",
      main: "#E7DBDA",
      dark: "#DFCFCD",
      contrastText: "#fff",
    },
    secondary: {
      light: "#EBEBEB",
      main: "#595959",
      dark: "#000",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: '"Mukta", serif',
    fontWeightLight: 300, // Setting ExtraLight as the light weight
    allVariants: {
      fontWeight: 300, // Apply the 200 weight globally to all text variants
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* <Home /> */}
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<Book />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
