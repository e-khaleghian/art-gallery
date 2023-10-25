import { Body, Head } from "@/components";
import { Box } from "@mui/material";
import Image from "next/image";

export default function HomePage() {
  return (
    <Box position={"relative"} minHeight={"100vh"}>
      <Image
        src="/images/princess.png"
        fill
        style={{ objectFit: "cover" }}
        alt="Princess"
      />
      <Head />

      <Body />
    </Box>
  );
}
