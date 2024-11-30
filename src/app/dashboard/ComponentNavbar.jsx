import { Box, Stack, Typography } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Image from "next/image";
import Link from "next/link";

const ComponentNavbar = ({ isOpened, setIsOpened }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      px={{ xs: 2, md: 6, lg: 8 }}
      sx={{
        height: "56px",
        boxShadow: "0px 1px 4px #DDE0E4",
        backgroundColor: "white",
        borderBottom: "2px solid #efefef",
        position: "fixed",
        zIndex: 100,
        width: "100vw",
      }}
    >
      <Link href="/">
        <Stack direction="row" gap={1} alignItems="center">
          <Image
            style={{ borderRadius: "8px" }}
            alt="logo"
            src="/logo1.png"
            width={40}
            height={40}
          />
          <Typography variant="h5" fontWeight={700}>
            REUI
          </Typography>
        </Stack>
      </Link>

      <Box
        onClick={() => setIsOpened(!isOpened)}
        sx={{
          cursor: "pointer",
          transform: `rotate(${isOpened ? 0 : 180}deg)`,
          transition: "transform 0.5s ease",
          gap:"12px",
          backgroundColor: "#E9EAEC",
          padding: "8px",
          borderRadius: "50%",
        }}
      >
        <MenuOpenIcon fontSize="medium" />
      </Box>
    </Stack>
  );
};

export default ComponentNavbar;
