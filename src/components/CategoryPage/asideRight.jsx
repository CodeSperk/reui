import { Box, Typography } from "@mui/material";

const AsideRight = ({items, activeIndex, handleClick}) => {
  console.log(activeIndex);
  return (
    <div>
      {
        items.map((item, idx) => (
          <Box
          key={idx}
          onClick={() => handleClick(item.uid)}
          p={1}
          borderRadius={1}
          style={{
            fontWeight: idx === activeIndex ? "bold" : "normal", // Bold active
            cursor: "pointer",
          }}
          
        >
            <Typography
              sx={{
                color: idx === activeIndex + 1 ? "primary.main" : "",
                fontWeight: idx === activeIndex + 1 ? "bold" : "normal",
                borderLeft: idx === activeIndex + 1 ? "2px solid #3E4AA5" : "normal",
                pl: 1,

              }}
            >{item.name} </Typography>
          </Box>
        ))
      }
    </div>
  );
};

export default AsideRight;