import { Typography } from "@mui/material";
import { Container } from "../container";

export function Body() {
  return (
    <Container>
      <Typography
        sx={{
          position: "absolute",
          top: { xs: "10%", md: "30%" },
          left: "5%",
          // transform: "translate(-50%,0)",
          width: "100%",
          textAlign: "left",
          color: "#093f41 !important",
          typography: { xs: "displayX", md: "displayXL" },
          textShadow: `text-shadow: 0px 15px 5px rgba(0,0,0,0.1),
                 10px 20px 5px rgba(0,0,0,0.05),
                 -10px 20px 5px rgba(0,0,0,0.05);`,
        }}
      >
        Yasaho Art Gallery
      </Typography>
    </Container>
  );
}
