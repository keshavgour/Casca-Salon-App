import theme from "./themes/Theme";
import { Box, ThemeProvider } from "@mui/material";
import { Routers } from "./Routers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Routers />
      </Box>
    </ThemeProvider>
  );
}

export default App;
