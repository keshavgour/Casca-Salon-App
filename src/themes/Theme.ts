import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading: React.CSSProperties;
    linkTypo: React.CSSProperties;
    titleTypo: React.CSSProperties;
    infoTypo1: React.CSSProperties;
    infoTypo2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    linkTypo?: React.CSSProperties;
    titleTypo?: React.CSSProperties;
    infoTypo1?: React.CSSProperties;
    infoTypo2?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    linkTypo: true;
    titleTypo: true;
    infoTypo1: true;
    infoTypo2: true;
  }
}

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
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: 18,
        fontWeight: 500,
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
      fontWeight: "bolder",
      "@media (max-width:600px)": {
        fontSize: 18,
        fontWeight: 800,
      },
      "@media (max-width:450px)": {
        fontSize: 16,
        fontWeight: 600,
      },
    },
    body2: {
      fontSize: 20,
      "@media (max-width:600px)": {
        fontSize: 18,
      },
      "@media (max-width:450px)": {
        fontSize: 16,
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
    linkTypo: {
      fontSize: 20,
      fontWeight: "bold",
    },
    infoTypo1: {
      fontSize: 20,
    },
    infoTypo2: {
      fontSize: 20,
      fontWeight: 600,
    },
  },
});
export default theme;
