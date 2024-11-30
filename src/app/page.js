import { Box, Stack} from "@mui/material";
import HomeLeft from "pages/homePage/_homeLeft";
import HomeRight from "pages/homePage/_homeRight";

export default function HomePage() {
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
        <Stack
          direction={{ xs: "column", lg: "row" }}
          gap={8}
          maxWidth="1440px" px={{ xs: 2, md: 6, lg: 8 }}
          justifyContent="between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <HomeLeft/>
          <HomeRight/>
        </Stack>
    </Box>
  );
}
