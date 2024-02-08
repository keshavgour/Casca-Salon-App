import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const FlexBoxRow = styled(Box)({
  width: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const FlexBoxCol = styled(Box)({
  width: "inherit",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
