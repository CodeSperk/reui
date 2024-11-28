import { componentsData } from '@/data/componentData';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const SidebarContent = () => {
  const {group} = useParams();
  console.log(group);

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

export default SidebarContent;