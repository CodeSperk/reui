"use client"
const { createTheme } = require("@mui/material/styles");

export const theme = createTheme({
  palette:{
    primary:{
      main: "#2E3CAE"
    },
    secondary:{
      main: "#666F73",
    }
  },
  components:{
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides:{
        root:{
          padding : "8px 24px",
          backgroundColor: "#2E3CAE"
        }
      },
    },
  },
  typography:{
    body1:{
      color: "#0B1134CC",
      textAlign: "justify"
    }
  }
});

theme.shadows[1] = "0px 5px 22px #D3D3D3";