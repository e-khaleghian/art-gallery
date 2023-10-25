import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FA114F",
    },
    secondary: {
      main: "#222F4C",
    },
    darkBlue: {
      main: "#222F4C !important",
    },
    text: {
      default: "#131A2A",
      subdued: "#414B62",
      mSubdued: "#898989",
    },
    surface: {
      normal: "#F5F5F5",
      subdued: "#E6E6E6",
      gradient: "#f8f8f8",
    },
  },
  spacing: 4,

  typography: {
    displayXXL: {
      fontFamily: "AppleGaramond, sans-serif",
      fontSize: "84px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "100px",
      // letterSpacing: "-4.2px",
      color: "#131A2A",
    },

    displayXL: {
      fontFamily: "AppleGaramond, sans-serif",
      fontSize: "72px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "84px",
      // letterSpacing: "-3.6px",
      color: "#131A2A",
    },

    displayXL_helvetica: {
      fontFamily: "Helvetica, sans-serif",
      fontSize: "72px",
      fontStyle: "normal",
      fontWeight: 800,
      lineHeight: "84px",
      letterSpacing: "-3.6px",
      color: "#131A2A",
    },

    headingXL_helvetica: {
      fontFamily: "Helvetica, sans-serif",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: 800,
      lineHeight: "56px",
      color: "#131A2A",
      letterSpacing: "-2.4px",
    },

    displayX: {
      fontFamily: "AppleGaramond, sans-serif",
      fontSize: "46px",
      fontStyle: "normal",
      fontWeight: 800,
      lineHeight: "54px",
      color: "#131A2A",
    },
    displayX_helvetica: {
      fontFamily: "Helvetica, sans-serif",
      fontSize: "46px",
      fontStyle: "normal",
      fontWeight: 800,
      lineHeight: "54px",
      color: "#131A2A",
    },

    headingM: {
      fontFamily: "Helvetica, sans-serif",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 800,
      lineHeight: "32px",
      color: "#131A2A",
    },
    headingXS: {
      fontFamily: "Helvetica, sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
      color: "#131A2A",
    },
    descriptionL: {
      fontFamily: "Helvetica, sans-serif",
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "32px",
      color: "#131A2A",
    },
    description: {
      fontFamily: "Helvetica, sans-serif",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "32px",
      color: "#131A2A",
    },
    itemMenu: {
      fontFamily: "Helvetica, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "28px",
      color: "#131A2A",
    },
    pricingItem: {
      fontFamily: "Helvetica, sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      color: "#898989",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
