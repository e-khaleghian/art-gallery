import { Box, Typography } from "@mui/material";
import { Container } from "../container";

export function Footer() {
  return (
    <Container sx={{ py: { xs: 15, md: 25 } }}>
      <Box mt={{ xs: 15, md: 25 }}>
        <Typography
          mt={2}
          sx={{
            fontFamily: "Helvetica",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px",
          }}
          color="text.subdued"
        >
          Yasaho Art Gallery
        </Typography>
      </Box>
    </Container>
  );
}
