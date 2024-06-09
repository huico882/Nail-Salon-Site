import { Facebook, Instagram, MenuRounded, Pets } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  Avatar,
  IconButton,
  Drawer,
  Button,
  Stack,
  Divider,
} from "@mui/material";

import { borderRadius } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DrawerMenu } from "./DrawerMenu";
import { NavMenu } from "./NavMenu";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.secondary.light,
  paddingBottom: 3,
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  //   backgroundColor: "white",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const MenuIcon = styled(IconButton)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const title = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "Caveat, serif",
  display: "flex",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Stack direction="row" spacing={2} sx={{ pl: 0.5 }} alignItems="center">
        <Pets sx={(theme) => ({ color: theme.palette.secondary.main })} />
        <Typography
          color="black"
          variant="h5"
          // display="none"
          sx={(theme) => ({
            color: theme.palette.secondary.main,
            fontFamily: "Caveat, serif",
            fontSize: "1.5rem",
            [theme.breakpoints.up("sm")]: {
              fontSize: "2rem",
              // display: "flex",
            },
          })}
        >
          nailssbybryanna
        </Typography>
      </Stack>
    </Link>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <AppBar position="sticky" elevation={0}>
      <StyledToolbar>
        <Logo />
        <Stack direction="row" spacing={1}>
          <NavMenu />

          <Icons>
            <IconButton href="https://www.instagram.com/">
              <Instagram />
            </IconButton>

            <IconButton href="https://www.facebook.com/">
              <Facebook />
            </IconButton>

            <MenuIcon
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setOpen(true)
              }
            >
              <MenuRounded />
            </MenuIcon>

            <Drawer
              open={open}
              onClose={(e: React.MouseEvent<HTMLButtonElement>) =>
                setOpen(false)
              }
              anchor="right"
            >
              <DrawerMenu />
            </Drawer>
          </Icons>
        </Stack>

        {/* <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://picsum.photos/200"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => setOpen(true)}
          />
          <Typography variant="h6">John</Typography>
        </UserBox> */}
      </StyledToolbar>
      <Divider
        orientation="horizontal"
        sx={(theme) => ({
          height: 2,
          backgroundColor: theme.palette.secondary.main,
        })}
      />
    </AppBar>
  );
};
