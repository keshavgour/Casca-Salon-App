import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA726",
      light: "#FFE0B2",
      dark: "#EF6C00",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000",
      light: "#616161",
    },
  },
  typography: {
    h1: {
      fontSize: 55,
      fontWeight: "bold",
    },
    h2: {
      "@media (max-width:1280px)": {
        fontSize: 50,
        fontWeight: "bold",
      },
      "@media (max-width:900px)": {
        fontSize: 50,
        fontWeight: "bold",
      },
      "@media (max-width:600px)": {
        fontSize: 45,
        fontWeight: "bold",
      },
      "@media (max-width:510px)": {
        fontSize: 30,
        fontWeight: "bold",
      },
      // "@media (max-width:450px)": {
      //   fontSize: 25,
      //   fontWeight: "bold",
      // },
    },
    h3: {
      fontSize: 40,
      fontWeight: "bold",
      "@media (max-width:600px)": {
        fontSize: 35,
        fontWeight: "bold",
      },
      "@media (max-width:450px)": {
        fontSize: 30,
        fontWeight: "bold",
      },
    },
    h4: {
      fontSize: 30,
      fontWeight: "bold",
      "@media (max-width:450px)": {
        fontSize: 25,
        fontWeight: "bold",
      },
    },
    h5: {
      fontSize: 23,
      fontWeight: 800,
      "@media (max-width:600px)": {
        fontSize: 20,
        fontWeight: 600,
      },
      "@media (max-width:450px)": {
        fontSize: 18,
        fontWeight: 600,
      },
    },
    h6: {
      fontSize: 20,
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: 15,
        fontWeight: 500,
      },
    },
    body1: {
      fontSize: 20,
      fontWeight: "bold",
      "@media (max-width:600px)": {
        fontSize: 18,
        fontWeight: "bold",
      },
      "@media (max-width:450px)": {
        fontSize: 16,
        fontWeight: "bold",
      },
    },
    body2: {
      fontSize: 18,
      color: "secondary.light",
      "@media (max-width:600px)": {
        fontSize: 16,
        color: "secondary.light",
      },
      "@media (max-width:450px)": {
        fontSize: 14,
        color: "secondary.light",
      },
    },
    button: {
      fontSize: 18,
      fontWeight: "bolder",
      textTransform: "none",
      "@media (max-width:600px)": {
        fontSize: 14,
        fontWeight: 500,
      },
    },
    caption: {
      fontSize: 15,
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: 13,
        fontWeight: 300,
      },
      "@media (max-width:450px)": {
        fontSize: 13,
        fontWeight: 300,
      },
    },
  },
});
export default theme;
