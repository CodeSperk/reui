// Dasoboard.jsx

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Aside from "./_aside";
import TopNav from "./_topNav";

const DashBoardDrawer = () => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth >= 800) {
        setIsOpened(true);
      } else {
        setIsOpened(false);
      }
    };
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <Box height="100%" width="100%">
      <TopNav isOpened={isOpened} setIsOpened={setIsOpened} />

      <div style={{ display: "flex" }}>
        <Aside isOpened={isOpened} />
        <main style={{ flex: 1, paddingLeft: "20px" }}>
          <Box
            flex={1}
            sx={{
              marginLeft: isOpened ? "200px" : "0px",
              transition: "margin-left 0.3s ease",
              mt: "56px",
              height: "calc(100vh - 56px)", 
              backgroundColor: "white",
              p: 4,
            }}
          >
            This is the main section
          </Box>
        </main>
      </div>
    </Box>
  );
};

export default DashBoardDrawer;
