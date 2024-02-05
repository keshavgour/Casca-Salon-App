import { Button } from "@mui/material";
import React from "react";
interface ButtonProp {
  btnText: string;
  btnSubText: string;
}
const BlockBtn: React.FC<ButtonProp> = ({ btnText, btnSubText }) => {
  const BlockBtnStyle = {
    display: "block",
    width: "70%",
    height: "70px",
    backgroundColor: "primary.main",
    borderRadius: 25,
    fontSize: "20px",
    fontWeight: "bold",
    marginY: 3,
    marginX: "auto",
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
