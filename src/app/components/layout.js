"use client";
import { Box, Stack} from "@mui/system";
import { useEffect, useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Image from "next/image";
import SidebarContent from "@/components/Components/SidebarContent";

export default function ComponentsLayout({ children }) {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      if(window.innerWidth >= 1024){
      setIsOpened(true);
    }else{
      setIsOpened(false)
    }
  };
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    }
  }, []);
  
  return (
    <Box backgroundColor="#E9EAEC" minHeight="100vh">
      {/* navbar */}
      <Stack
        direction="flex"
        alignItems="center"
        gap={4}
        px={{ xs: 2, md: 6, lg: 8 }}
        sx={{
          height: "48px",
          boxShadow: "0px 1px 4px #DDE0E4",
          backgroundColor: "#fff",
          borderBottom: "2px solid #efefef",
          position: "fixed",
          zIndex: 100,
          width: "100vw"
        }}
      >
        <Box>
          <Image
            style={{ borderRadius: "8px" }}
            alt="logo"
            src="/logoWithBG.webp"
            width={80}
            height={80}
          />
        </Box>

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

      <div style={{ display: "flex" }}>
        <Box
          sx={{
            marginLeft: isOpened ? "0px" : "-200px",
            width: "200px",
            height: "calc(100vh - 48px)",
            transition: "margin-left 0.3s ease",
            position: "fixed",
            backgroundColor: "white",
            zIndex: 100,
            mt: "48px"
          }}
        >
          <aside>
            <SidebarContent/>
          </aside>
        </Box>

        <Box
          sx={{
            marginLeft: isOpened ? "200px" : "0px",
            transition: "margin-left 0.3s ease",
            mt: "48px"
          }}
        >
          <main style={{ flex: 1}}>
            {children}
          </main>
        </Box>
      </div>
    </Box>
  );
}
