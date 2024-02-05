import { Box, ThemeProvider } from "@mui/material";
import { Routers } from "./Routes/Routers";
import RoutesSaloonDetail from "Routes/RoutesSaloonDetail";
import theme from "themes/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Routers />
        <RoutesSaloonDetail />
      </Box>
    </ThemeProvider>
  );
}

export default App;
