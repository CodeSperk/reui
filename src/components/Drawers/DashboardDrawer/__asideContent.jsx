import { componentsData } from '@/data/componentData';
import { Analytics } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const AsideContent = () => {
  // const {group} = useParams();
  // console.log(group);

  // const uniqueCategory = componentsData.reduce((acc, component) => {
  //   if(!acc.some((item) => item.category ===component.category)){
  //     acc.push(component);
  //   }
  //   return acc;
  // },[]);
  const routs =  [{category:"Analytics"}, {category:"Commerce"}, {category:"Sales"}, {category:"CRM"}, {category:"Users"}, {category:"Minimal"} ]
  const uniqueCategory = routs;
  
  const [params, setParams] = useState("Analytics"); // params should take real param

  return (
      <Box my={2}>
        {/* <Link href="/components"> */}
        <Typography py={1} px={4} fontWeight={700}>Dashboard</Typography>
        {/* </Link> */}
      <Box>
      {uniqueCategory.map((item, idx) => {
        const isActive = params === item.category;
        return (
          // <Link key={idx} href={`/components/${item.category}`}>
           <Box key={idx} onClick={() => setParams(item.category)}>
          <Box  px={5} py={1.5} sx={{
            textTransform: "capitalize",
            transition: "background-color 0.3s ease",
            "&:hover":{
              backgroundColor: "#efefef"
            },
            borderRight: isActive ? "2px solid #3E4AA5" : "",
            backgroundColor: isActive ? "#D9E5FE" : "",
            color: isActive ? "primary.main" : "",
            fontWeight:isActive ? "medium" : "",
            cursor: "pointer"
          }}>          
            
              {item.category}    
          </Box>
          </Box>
          // </Link> 
        );
      })};     
    </Box>
    </Box>
  );
};

export default AsideContent;