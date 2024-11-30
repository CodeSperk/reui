"use client"
import React, { useEffect, useState } from 'react';
import AsideLeft from './AsideLeft';
import { Box } from '@mui/material';
import ComponentNavbar from './ComponentNavbar';

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
      <ComponentNavbar isOpened={isOpened} setIsOpened={setIsOpened}/>
      <div style={{ display: "flex" }}>
        <AsideLeft isOpened={isOpened}/>

        <Box
          flex={1}
          sx={{
            marginLeft: isOpened ? "200px" : "0px",
            transition: "margin-left 0.3s ease",
            mt: "56px",
          }}
        >
          <main style={{ flex: 1 }}>
            This is main
          </main>
          
        </Box>
      </div>
    </Box>
  );
};

export default Dashboard;