import React, { useState } from "react";
import { Container, Box, IconButton, Typography, styled, Button, ButtonProps } from "@mui/material";
import { PendingOutlined } from "@mui/icons-material";
import HaircutBox from "../../components/HaircutBox";
import { menhaircutlist, womenhaircutlist } from "../../temp-object-file/Haircuts";
import BackBtn from "../../components/BackBtn";
import BlockBtn from "../../components/BlockBtn";
interface TabBtnProps extends ButtonProps {
  variant?: "contained" | "outlined";
}
export default function Haircut() {
  const [selectedTab, setSelectedTab] = useState("menhaircuts");
  const handleClick = (btnvalue: string) => {
    setSelectedTab(btnvalue);
  };
  const TabBtn = styled(({ variant, ...other }: TabBtnProps) => (
    <Button {...other} variant={variant || "contained"} />
  ))({
    width: "40%",
    height: 45,
    borderRadius: 25,
    textTransform: "none",
    fontSize: 18,
    fontWeight: 400,
  });
  return (
    <Container
      sx={{
        minWidth: "320px",
        maxWidth: "1080px",
        boxSizing: "border-box",
        marginX: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BackBtn to="/allservices" />
          <Typography variant="titleTypo" component="span">
            Haircut
          </Typography>
        </Box>
        <Box>
          <IconButton aria-label="search">
            <PendingOutlined fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          my: 2,
        }}
      >
        <TabBtn
          variant={selectedTab === "menhaircuts" ? "contained" : "outlined"}
          value="menhaircuts"
          onClick={() => handleClick("menhaircuts")}
        >
          Men
        </TabBtn>
        <TabBtn
          variant={selectedTab === "womenhaircuts" ? "contained" : "outlined"}
          value="womenhaircuts"
          onClick={() => handleClick("womenhaircuts")}
        >
          Women
        </TabBtn>
      </Box>
      {selectedTab === "menhaircuts" &&
        menhaircutlist.map((list, index) => {
          return (
            <HaircutBox
              hid={list.id}
              image={list.image}
              haircut={list.haircut}
              booking={list.booking}
              price={list.price}
              key={index}
            />
          );
        })}
      {selectedTab === "womenhaircuts" &&
        womenhaircutlist.map((list, index) => {
          return (
            <HaircutBox
              hid={list.id}
              image={list.image}
              haircut={list.haircut}
              booking={list.booking}
              price={list.price}
              key={index}
            />
          );
        })}
      <BlockBtn btnText="Apply" btnSubText="" />
    </Container>
  );
}
