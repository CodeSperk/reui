import { Box, Typography } from "@mui/material";

const AsideRight = ({items, activeIndex, handleClick}) => {

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
                fontSize:14,
                color: idx === activeIndex ? "primary.main" : "",
                fontWeight: idx === activeIndex ? "bold" : "normal",
                borderLeft: idx === activeIndex ? "2px solid #3E4AA5" : "normal",
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