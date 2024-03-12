import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { Routers } from "./Routes/Routers";
import RoutesSaloonDetail from "Routes/RoutesSaloonDetail";
import theme from "themes/Theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 3000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Box>
          <Routers />
          <RoutesSaloonDetail />
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
