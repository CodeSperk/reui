`// Dashboard.jsx
//=======================
import React, { useEffect, useState } from "react";
import AsideLeft from "./AsideLeft";
import { Box } from "@mui/material";
import ComponentNavbar from "./ComponentNavbar";

const Dashboard = () => {
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
    <Box backgroundColor="#E9EAEC" minHeight="100vh">
      <ComponentNavbar isOpened={isOpened} setIsOpened={setIsOpened} />
      <div style={{ display: "flex" }}>
        <AsideLeft isOpened={isOpened} />
        <Box
          flex={1}
          sx={{
            marginLeft: isOpened ? "200px" : "0px",
            transition: "margin-left 0.3s ease",
            mt: "56px",
          }}
        >
          <main style={{ flex: 1 }}>This is main</main>
        </Box>
      </div>
    </Box>
  );
};
export default Dashboard;


//Top Navbar / NavbarComponent.jsx
//======================================
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


//Aside / sidebar AsideLeft.jsx
//==================================
import { Box } from "@mui/material";
import SidebarContent from "./SidebarContent";

const AsideLeft = ({isOpened}) => {
  return (
    <Box
          sx={{
            marginLeft: isOpened ? "0px" : "-200px",
            width: "200px",
            height: "calc(100vh - 56px)",
            transition: "margin-left 0.3s ease",
            position: "fixed",
            backgroundColor: "white",
            zIndex: 100,
            mt: "56px",
          }}
        >
          <aside>
            <SidebarContent />
          </aside>
        </Box>
  );
};
export default AsideLeft;

//SidebarComponent.jsx
//==========================
import { componentsData } from '@/data/componentData';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const SidebarContent = () => {
  const {group} = useParams();
  const uniqueCategory = componentsData.reduce((acc, component) => {
    if(!acc.some((item) => item.category ===component.category)){
      acc.push(component);
    }
    return acc;
  },[]);

  return (
    <Box my={2}>
        <Link href="/components">
        <Typography  px={4} fontWeight={700}>Components</Typography>
        </Link>
      <Box>
      {uniqueCategory.map((item, idx) => {
        const isActive = group === item.category;
        return (
          <Link key={idx} href={`/components/${item.category}`}>
          <Box  px={5} py={1.5} mt={1} sx={{
            textTransform: "capitalize",
            transition: "background-color 0.3s ease",
            "&:hover":{
              backgroundColor: "#efefef"
            },
            borderRight: isActive ? "2px solid #3E4AA5" : "",
            backgroundColor: isActive ? "#D9E5FE" : "",
            color: isActive ? "primary.main" : "",
            fontWeight:isActive ? "medium" : ""
          }}>          
              {item.category}       
          </Box>
          </Link> 
        );
      })};     
    </Box>
    </Box>
  );
};

export default SidebarContent;`
