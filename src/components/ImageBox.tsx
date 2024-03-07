import { Box, styled } from "@mui/material";
export const ImageBox = styled(Box)({
  width: 150,
  height: 150,
  marginX: "auto",
  "@media (max-width:600px)": {
    width: 100,
    height: 100,
  },
  "@media (max-width:450px)": {
    width: 85,
    height: 85,
  },
});
