import { componentsData } from "@/data/componentData";
import { Box, Button, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";
import Link from "next/link";
const Components = () => {
  const uniqueCategory = componentsData.reduce((acc, component) => {
    if(!acc.some((item) => item.category ===component.category)){
      acc.push(component);
    }
    return acc;
  },[])

  return (
    <Box height="100vh" p={10} sx={{backgroundColor: "#DDE0E4"}}>
      <Stack direction={"row"} gap={4}>
      {uniqueCategory.map((item, idx) => (
        <Box key={idx} color={blue}>
          <Link href={`/components/${item.category}`}>
            <Button>{item.category}</Button>
          </Link>
        </Box>
      ))}
      </Stack>
    </Box>
  );
};

export default Components;