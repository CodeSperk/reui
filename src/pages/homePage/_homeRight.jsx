import { Box } from "@mui/material";
import Image from "next/image";

const HomeRight = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <Image
        src="/reui.png"
        height={600}
        width={1000}
        alt="Home Banner Picture"
      />
    </Box>
  );
};

export default HomeRight;
