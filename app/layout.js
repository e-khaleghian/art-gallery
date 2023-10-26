import "./globals.css";
import { Footer, Navbar, ThemeRegistry } from "@/components";
import { Box } from "@mui/material";

export const metadata = {
  title: "Yasaho Art Gallery",
  description: "Art for the world",
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
