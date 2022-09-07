import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const theme = createTheme({
  yellow: "#f5c32c",
  orange: "#fca61f",
  black: "#242d49",
  grey: "#788097",
  blueCard: "#ddf8fe",
  purple: "rgb(238,210,255)",
  orangeCard: "rgba(252,166,31,.45)",
  smBoxShadow: "-79px 51px 60px rgba(0, 0, 0, 0.08)",
  typography: {
    fontFamily: "'Nunito', sans-serif",
  },
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
