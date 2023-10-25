/* ---------------------------- NextJs Components --------------------------- */
import { useRouter } from "next/navigation";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Button, Typography } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { NAV_ITEMS } from "../Navbar";
/* -------------------------------------------------------------------------- */

export function DesktopMenu() {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "1120px",
        px: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Box
          sx={{ display: { xs: "none", md: "flex" }, gap: { md: 5, lg: 10 } }}
        >
          {NAV_ITEMS.map((item, i) => (
            <Button
              key={item.id + i}
              sx={{
                textTransform: "none",
              }}
              onClick={() => {
                router.push(item.link);
              }}
            >
              <Typography variant="headingM" color="#FFF">
                {item.name}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
