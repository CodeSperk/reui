"use client";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import SidebarContent from "pages/componentPage/Sidebar/_sidebarContent";
import ComponentNavbar from "pages/componentPage/Navbar/Navbar";
import AsideLeft from "pages/componentPage/Sidebar/AsideLeft";

export default function ComponentsLayout({ children }) {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth >= 1200) {
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
    <Box backgroundColor="bg.main" minHeight="100vh">
      <ComponentNavbar isOpened={isOpened} setIsOpened={setIsOpened}/>
     
    
      <div style={{ display: "flex" }}>
        <AsideLeft isOpened={isOpened}/>

        <Box
          flex={1}
          sx={{
            marginLeft: isOpened ? "200px" : "0px",
            transition: "margin-left 0.3s ease",
            mt: "48px",
          }}
        >
          <main style={{ flex: 1 }}>{children}</main>
          {/* footer */}
          <Box minHeight={200}>
          This is footer
          </Box>
        </Box>
      </div>
    </Box>
  );
}
