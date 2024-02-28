import React from "react";
import { Button } from "@mui/material";
interface ButtonProp {
  btnText: string;
  btnSubText: string;
}
const BlockBtn: React.FC<ButtonProp> = ({ btnText, btnSubText }) => {
  const BlockBtnStyle = {
    display: "block",
    width: "70%",
    backgroundColor: "primary.main",
    borderRadius: 25,
    fontSize: 20,
    fontWeight: 700,
    marginY: 3,
    marginX: "auto",
    textTransform: "none",
    "@media (max-width:450px)": {
      fontSize: 16,
      fontWeight: 500,
    },
  };
  return (
    <>
      <Button variant="contained" sx={BlockBtnStyle}>
        {btnText + btnSubText}
      </Button>
    </>
  );
};
export default BlockBtn;
