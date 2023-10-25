import "./globals.css";
import { Footer, Navbar, ThemeRegistry } from "@/components";
import { Box } from "@mui/material";

export const metadata = {
  title: "Fast bundle",
  description: "Bundle for fast Growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          <Box component="main">{children}</Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
