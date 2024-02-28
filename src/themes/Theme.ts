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
      main: "#EF6C00",
      light: "#FFE0B2",
    },
    secondary: {
      main: "rgb(0,0,0)",
      light: "#616161",
    },
  },
  typography: {
    h2: {
      "@media (max-width:1280px)": {
        fontSize: 55,
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
      "@media (max-width:450px)": {
        fontSize: 25,
        fontWeight: "bold",
      },
    },
    h4: {
      fontSize: 25,
      fontWeight: "bold",
      "@media (max-width:450px)": {
        fontSize: 20,
        fontWeight: "bold",
      },
    },
    h6: {
      fontSize: 18,
      fontWeight: "bold",
      "@media (max-width:600px)": {
        fontSize: 15,
      },
    },
    body1: {
      fontSize: 20,
      color: "#616161",
      "@media (max-width:450px)": {
        fontSize: 16,
      },
    },
    body2: {
      fontSize: 20,
      color: "rgb(0,0,0)",
      fontWeight: 600,
      "@media (max-width:450px)": {
        fontSize: 16,
      },
      linkTypo: {
        fontSize: 20,
        fontWeight: "bold",
      },
      infoTypo1: {
        fontSize: 20,
        color: "#616161",
      },
      infoTypo2: {
        fontSize: 20,
        color: "rgb(0,0,0)",
        fontWeight: 600,
      },
    },
  },
});
export default theme;
