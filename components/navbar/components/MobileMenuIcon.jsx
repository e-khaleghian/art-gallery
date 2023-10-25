import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function MobileMenuIcon(props) {
  const { handleDrawerToggle } = props;
  // const theme = useTheme();
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{
        display: { md: "none", xs: "block" },
        "&>svg": { fill: "#FFF" },
      }}
    >
      <MenuIcon
        sx={{
          fontSize: 40,
        }}
      />
    </IconButton>
  );
}
