import {
  Box,
  Paper,
  Stack,
  Typography,
  styled,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import React from "react";
import { FormContainer } from "../components/FormContainer";
import { Navbar } from "../components/Navbar";
import { SubmitForm } from "../components/SubmitForm";

const Papers = styled(Paper)(({ theme }) => ({
  width: 250,
  height: 450,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    width: 450,
    height: 550,
  },
}));

export const Contact = () => {
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
        <FormContainer />
      </Stack>
    </Box>
  );
};
