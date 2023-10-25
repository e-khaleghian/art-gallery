"use client";
/* ---------------------------- NextJs Components --------------------------- */
import Link from "next/link";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useTheme,
} from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { NAV_ITEMS } from "../Navbar";
/* -------------------------------------------------------------------------- */

const DRAWER_WIDTH = 300;

export function MobileDrawer(props) {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const theme = useTheme();
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: DRAWER_WIDTH, display: { xs: "block", md: "none" } }}
    >
      <Drawer
        anchor="right"
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
      >
        <Box
          onClick={handleDrawerToggle}
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <List sx={{ width: "80%" }}>
            {NAV_ITEMS.map((item, i) => (
              <ListItem key={item.name + i} disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    borderBottom: `1px solid black`,
                    py: 4,
                    px: 0,
                    "&>a": {
                      color: theme.palette.text.subdued,
                      textDecoration: "none",
                    },
                  }}
                >
                  <Link href={item.link}>{item.name}</Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
