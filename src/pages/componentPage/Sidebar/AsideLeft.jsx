import { Box } from "@mui/material";
import SidebarContent from "./_sidebarContent";

const AsideLeft = ({isOpened}) => {
  return (
    <Box
          sx={{
            marginLeft: isOpened ? "0px" : "-200px",
            width: "200px",
            height: "calc(100vh - 48px)",
            transition: "margin-left 0.3s ease",
            position: "fixed",
            backgroundColor: "white-dark.main",
            zIndex: 100,
            mt: "48px",
          }}
        >
          <aside>
            <SidebarContent />
          </aside>
        </Box>
  );
};

export default AsideLeft;