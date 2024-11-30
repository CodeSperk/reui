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