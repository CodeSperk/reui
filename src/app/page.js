import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #0C0D1F, #1A1B3A, #1A1B3A,  #0C0D1F)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        position: "relative",
      }}
    >
      <Box maxWidth="1440px" px={{ xs: 2, md: 6, lg: 8 }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          gap={8}
          justifyContent="between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems={{ xs: "center", lg: "start" }}
          >
            <Box>
              <Image
                style={{ borderRadius: "8px" }}
                alt="logo"
                src="/logoWithBG.webp"
                width={150}
                height={100}
              />
            </Box>

            <Typography
              maxWidth={{ xs: "630px", lg: "420px" }}
              textAlign={{ xs: "center", lg: "left" }}
              variant="h3"
              py={4}
              fontSize={{xs:"40px" , lg:"48px"}}
              fontWeight="bold"
            >
              Development Made Smoother with Personal Storage
            </Typography>

            <Link href="/components">
              <Button sx={{ py: 2, px: 4 }}>Explore Now</Button>
            </Link>
          </Stack>

          <Box sx={{ flex: 1 }}>
            <Image
              src="/reui.png"
              height={600}
              width={1000}
              alt="Home Banner Picture"
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
