import { Typography } from "@mui/material";
import { Container } from "../container";

export function Body() {
  return (
    <Container style={{ color: "#FFF" }}>
      <Typography
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%,0)",
          width: "100%",
          textAlign: "center",
          color: "#FFF !important",
          typography: { xs: "displayX", md: "displayXL" },
        }}
      >
        Yasaho Art Gallery
      </Typography>
      <h3>Wake up Honey</h3>
    </Container>
  );
}
