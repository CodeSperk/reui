import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HomeLeft = () => {
  return (
    <Stack
            direction="column"
            justifyContent="center"
            alignItems={{ xs: "center", lg: "start" }}
          >
              <Image
                style={{ borderRadius: "8px" }}
                alt="logo"
                src="/logo.png"
                width={150}
                height={100}
              />
           
            <Typography
              maxWidth={{ xs: "630px", lg: "420px" }}
              textAlign={{ xs: "center", lg: "left" }}
              variant="h3"
              py={4}
              fontSize={{xs:"40px" , lg:"48px"}}
              fontWeight="bold"
            >
              <Typography component="span" color="primary" fontSize={{xs:"40px" , lg:"48px"}}
              fontWeight="bold">ReUI</Typography> has made my design and development much smoother
            </Typography>

            <Link href="/components">
              <Button sx={{ py: 2, px: 4 }}>Explore Now</Button>
            </Link>
          </Stack>
  );
};

export default HomeLeft;