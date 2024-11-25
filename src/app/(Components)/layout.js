import { Box } from "@mui/material";

const ComponentLayout = ({children}) => {
  return (
    <Box minHeight="100vh">
      {children} 
    </Box>
  );
};

export default ComponentLayout;
