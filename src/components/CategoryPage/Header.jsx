import { Box, Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

const CategoryHeader = ({ category }) => {
  const handleClick = (event) => {
    event.preventDefault();
    console.info("bre");
  };
  return (
    <Box sx={{
      backgroundColor: "white",
      mb: 2,
      p: 4,
      borderRadius: 1,
    }}>
      <Box role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" href="/">
            <HomeIcon sx={{mb:"2px"}}/>
          </Link>
          <Link underline="hover" href="/components">
            Components
          </Link>
          <Typography fontWeight={600} sx={{textTransform:"capitalize" }}>{category}</Typography>
        </Breadcrumbs>
      </Box>
      <Typography variant="h3" my={1} fontWeight={600}textTransform="capitalize">{category} Components</Typography>
      <Typography>
      Build dynamic, user-focused web pages with the versatile {category}, designed for seamless performance and enhanced adaptability across a range of use cases.
      </Typography>
    </Box>
  );
};

export default CategoryHeader;
