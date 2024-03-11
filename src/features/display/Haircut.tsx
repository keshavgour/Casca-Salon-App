import React, { useState } from "react";
import { Container, IconButton, Typography, styled, Button, ButtonProps, Grid } from "@mui/material";
import { PendingOutlined } from "@mui/icons-material";
import HaircutBox from "../../components/HaircutBox";
import { menhaircutlist, womenhaircutlist } from "../../temp-object-file/Haircuts";
import BackBtn from "../../components/BackBtn";
import BlockBtn from "../../components/BlockBtn";
import { flexRowEnd, flexRowSpaceAround, flexRowStart } from "sx/FlexStyles";
interface TabBtnProps extends ButtonProps {
  variant?: "contained" | "outlined";
}
export default function Haircut() {
  const [selectedTab, setSelectedTab] = useState("menhaircuts");
  const handleClick = (btnvalue: string) => {
    setSelectedTab(btnvalue);
  };
  const TabBtn = styled(({ variant, ...other }: TabBtnProps) => <Button {...other} variant={variant || "contained"} />)({
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
      <Grid container rowSpacing={2}>
        <Grid item xs={6} sx={flexRowStart}>
          <BackBtn to="/allservices" />
          <Typography variant="h4" component="span">
            Haircut
          </Typography>
        </Grid>
        <Grid item xs={6} sx={flexRowEnd}>
          <IconButton aria-label="search">
            <PendingOutlined fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={12} sx={flexRowSpaceAround}>
          <TabBtn variant={selectedTab === "menhaircuts" ? "contained" : "outlined"} value="menhaircuts" onClick={() => handleClick("menhaircuts")}>
            Men
          </TabBtn>
          <TabBtn
            variant={selectedTab === "womenhaircuts" ? "contained" : "outlined"}
            value="womenhaircuts"
            onClick={() => handleClick("womenhaircuts")}
          >
            Women
          </TabBtn>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginY="auto">
        {selectedTab === "menhaircuts" &&
          menhaircutlist.map((list, index) => {
            return (
              <Grid item xs={12} key={index}>
                <HaircutBox hid={list.id} image={list.image} haircut={list.haircut} booking={list.booking} price={list.price} />
              </Grid>
            );
          })}
        {selectedTab === "womenhaircuts" &&
          womenhaircutlist.map((list, index) => {
            return (
              <Grid item xs={12} key={index}>
                <HaircutBox hid={list.id} image={list.image} haircut={list.haircut} booking={list.booking} price={list.price} />
              </Grid>
            );
          })}
      </Grid>
      <BlockBtn btnText="Apply" btnSubText="" />
    </Container>
  );
}
