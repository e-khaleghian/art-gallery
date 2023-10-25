import { Box } from "@mui/material";

export function Container(props) {
  const { sx = {}, fullWidth } = props;
  return (
    <Box
      {...props}
      sx={{
        maxWidth: { xs: fullWidth ? "100%" : "90%", md: "min(1120px , 90%)" },
        px: 4,
        m: "0 auto",
        ...sx,
      }}
    />
  );
}
