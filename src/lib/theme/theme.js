"use client"
const { createTheme } = require("@mui/material/styles");

export const theme = createTheme({
  palette:{
    Focussed:{
      main: "#3E4AA5"
    },
    secondary:{
      main: "#666F73",
    }
  },
  typography:{
    body1:{
      color: "#0B1134CC",
    }
  }
});

theme.shadows[1] = "0px 5px 22px #D3D3D3";