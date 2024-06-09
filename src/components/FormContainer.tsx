import {
  Button,
  Grid,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { SubmitForm } from "./SubmitForm";

const Papers = styled(Paper)(({ theme }) => ({
  width: 250,
  height: 525,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    width: 450,
    height: 550,
  },
}));

export const FormContainer = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [firstnameError, setFirstnameError] = useState<boolean>(false);
  const [lastnameError, setLastnameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [subjectError, setSubjectError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFirstnameError(firstname === "");
    setLastnameError(lastname === "");
    setEmailError(email === "");
    setPhoneError(phone === "");
    setSubjectError(subject === "");
    setMessageError(message === "");

    if (firstname && lastname && email && phone && subject && message) {
      console.log(firstname, lastname, email, phone, subject, message);
      const formData = new FormData();
      formData.append("first_name", firstname);
      formData.append("last_name", lastname);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("subject", subject);
      formData.append("message", message);
      formData.append("access_key", "e236355c-06c1-4f9e-9406-e9d4997adf41");
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.success) {
          console.log("Form Submitted Successfully!", data);
          alert("Form submitted successfully!");
          // Reset form or further actions can be triggered here
          setFirstname("");
          setLastname("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
        } else {
          console.error("Form submission error:", data.message);
          alert(`Failed to submit the form: ${data.message}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form.");
      }
    }
  };

  return (
    <Papers elevation={4}>
      <Typography
        variant="h3"
        color="secondary.main"
        sx={{
          fontFamily: "Caveat, serif",
          textAlign: "center",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Contact
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sm={6} p={{ xs: 0, sm: 1 }}>
            <TextField
              id="first_name"
              label="First Name"
              name="name"
              variant="standard"
              required
              fullWidth
              margin="normal"
              size="small"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstname(e.target.value);
              }}
              error={firstnameError}
            />
          </Grid>

          <Grid item xs={12} sm={6} p={{ xs: 0, sm: 1 }}>
            <TextField
              id="last_name"
              label="Last Name"
              variant="standard"
              required
              fullWidth
              margin="normal"
              size="small"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLastname(e.target.value);
              }}
              error={lastnameError}
            />
          </Grid>
          <Grid item xs={12} p={{ xs: 0, sm: 1 }}>
            <TextField
              id="email"
              type="email"
              name="email"
              label="Email"
              variant="standard"
              required
              fullWidth
              margin="normal"
              size="small"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              error={emailError}
            />
          </Grid>
          <Grid item xs={12} p={{ xs: 0, sm: 1 }}>
            <TextField
              id="phone"
              type="tel"
              label="Phone Number"
              variant="standard"
              required
              fullWidth
              margin="normal"
              size="small"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPhone(e.target.value);
              }}
              error={phoneError}
            />
          </Grid>
          <Grid item xs={12} p={{ xs: 0, sm: 1 }}>
            <TextField
              id="Subject"
              label="Subject"
              variant="standard"
              required
              fullWidth
              margin="normal"
              size="small"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSubject(e.target.value);
              }}
              error={subjectError}
            />
          </Grid>
          <Grid item xs={12} p={{ xs: 0, sm: 1 }}>
            <TextField
              id="message"
              name="message"
              label="Message"
              variant="standard"
              type="text"
              required
              fullWidth
              size="small"
              margin="normal"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMessage(e.target.value);
              }}
              error={messageError}
            />
          </Grid>
        </Grid>
        <SubmitForm />
      </form>
    </Papers>
  );
};
