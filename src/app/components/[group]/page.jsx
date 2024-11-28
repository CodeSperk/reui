import { componentsData } from "@/data/componentData";
import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";

const ComponentPage = ({params}) => {
  const category = params.group;
    const categoryItems = componentsData.filter(item => item.category === category);
    console.log(categoryItems);
  return (
    <div className="min-h-[calc(100vh - 48px)]">
      <h1>This page is for Categorized components: {category}</h1>
      <Stack direction={"row"} gap={4}>
      {categoryItems.map((item, idx) => (
        <Box key={idx} >
          <Link href={`/components/${item.uid}`}>
            <Button>{item.name}</Button>
          </Link>
        </Box>
      ))}
      </Stack>
    </div>
  );
};

export default ComponentPage;