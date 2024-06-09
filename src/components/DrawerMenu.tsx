import { Inbox, Mail } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const links = ["/about", "/services", "/book", "/contact", "/faqs"];

export const DrawerMenu = () => {
  return (
    <Box
      sx={(theme) => ({
        width: 150,
        backgroundColor: theme.palette.primary.light,
        height: "100vh",
      })}
      role="presentation"
    >
      <List>
        <Divider />
        {["About", "Services", "Book", "Contact", "FAQs"].map((text, index) => (
          <React.Fragment key={text}>
            <ListItem disablePadding>
              <ListItemButton href={links[index]}>
                {/* <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon> */}
                <ListItemText primary={text} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

{
  /* <Divider
              sx={(theme) => ({
                backgroundColor: theme.palette.secondary.dark,
              })}
            /> */
}
