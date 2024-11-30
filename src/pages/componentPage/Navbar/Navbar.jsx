import { Box, Stack, Typography} from '@mui/material';
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Image from 'next/image';
import Link from 'next/link';

const ComponentNavbar = ({ isOpened, setIsOpened }) => {

  return (
    <Stack
        direction="flex"
        alignItems="center"
        gap={4}
        px={{ xs: 2, md: 6, lg: 8 }}
        sx={{
          height: "48px",
          boxShadow: "0px 1px 4px #DDE0E4",
          backgroundColor: "white-dark.main",
          borderBottom: "2px solid #efefef",
          position: "fixed",
          zIndex: 100,
          width: "100vw",
        }}
      >
          <Link href="/">
          <Stack direction= "row" gap={1} alignItems="center">
            <Image
              style={{ borderRadius: "8px" }}
              alt="logo"
              src="/logo1.png"
              width={40}
              height={40}
            />
            <Typography fontSize="24px" fontWeight={700}>ReUI</Typography>
          </Stack>
          </Link>
          
        
        <Box
          onClick={() => setIsOpened(!isOpened)}
          sx={{
            cursor: "pointer",
            transform: `rotate(${isOpened ? 0 : 180}deg)`,
            transition: "transform 0.5s ease",
          }}
        >
          <MenuOpenIcon fontSize="medium" />
        </Box>
      </Stack>
  );
};

export default ComponentNavbar;