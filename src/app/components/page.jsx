import { componentsData } from "@/data/componentData";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Components = () => {
  const uniqueCategory = componentsData.reduce((acc, component) => {
    if(!acc.some((item) => item.category ===component.category)){
      acc.push(component);
    }
    return acc;
  },[])

  return (
    <Box>
      {uniqueCategory.map((item, idx) => (
        <Box key={idx} margin="12px" padding={4} borderRadius={2} backgroundColor="white">
          <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quisquam dolorum minima tenetur consequatur tempora perferendis ea magnam. Voluptates maiores rem temporibus? Iusto ut, eos repudiandae rem saepe nulla. Labore quasi ducimus dolor, numquam ab neque et dolorem! Dolor mollitia animi, sint rerum ipsum facere officia maiores aperiam sed porro.
          </Typography>
          
          <Link href={`/components/${item.category}`}>
            <Button>{item.category}</Button>
          </Link>
        </Box>
      ))}      
    </Box>
  );
};

export default Components;