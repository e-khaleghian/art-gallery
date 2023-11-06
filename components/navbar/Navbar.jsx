"use client";

import { useState } from "react";

/* ----------------------------- MUI Components ----------------------------- */
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Slide, useScrollTrigger } from "@mui/material";
import { DesktopMenu, MobileDrawer, MobileMenuIcon } from "./components";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

export const NAV_ITEMS = [
  { id: "gallery", name: "Gallery", link: "/pricing" },
  { id: "about me", name: "About me", link: "./about-me" },
];

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    target: props.window ? props.window : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function Navbar(props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  // const trigger = useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 100,
  //   target: props.window ? window() : undefined,
  // });

  function handleDrawerToggle() {
    setMobileOpen((prevState) => !prevState);
  }

  return (
    <HideOnScroll {...props}>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "row-reverse", md: "row" },
            pt: 2,
            // pb: 4,
            width: "100%",
          }}
        >
          <MobileMenuIcon handleDrawerToggle={handleDrawerToggle} />
          <MobileDrawer
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
          <DesktopMenu />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
