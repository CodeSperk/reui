import { Box } from "@mui/material";
import AsideContent from "./__asideContent";

const Aside = ({isOpened}) => {
  return (
    <Box
          sx={{
            marginLeft: isOpened ? "0px" : "-220px", // "200px"
            transition: "visibility 0.7s ease",
            width: "200px",
            height: "100%", // height: "calc(100vh - 56px)",
            transition: "margin-left 0.3s ease",
            // position: "fixed",
            backgroundColor: "white-dark.main",
            zIndex: 100,
            // mt: "56px",
          }}
        >
          <aside>
            <AsideContent />
          </aside>
        </Box>
  );
};

export default Aside;