import { Box, Button, styled } from "@mui/material";
import React from "react";

const Menus = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  padding: "0px 10px", // Reduced padding for small screens
  [theme.breakpoints.up("md")]: {
    // Reset to default padding at 'md' breakpoint
    padding: theme.spacing(1, 2), // Default padding for larger screens
  },
}));

export const NavMenu = () => {
  return (
    <Menus>
      <CustomButton variant="text" color="secondary" href="/about">
        About
      </CustomButton>
      <CustomButton variant="text" color="secondary" href="/services">
        Services
      </CustomButton>
      <CustomButton variant="text" color="secondary" href="/book">
        Book
      </CustomButton>
      <CustomButton variant="text" color="secondary" href="/contact">
        Contact
      </CustomButton>
      <CustomButton variant="text" color="secondary" href="/faqs">
        FAQs
      </CustomButton>
    </Menus>
  );
};
