import React, { useState } from "react";
import { AppBar, Container, Grid } from "@mui/material";
import { Navbar } from "features/dashboard";
import ButtonComponent from "components/ButtonComponent";
import CallData from "features/display/CallData";
import ChatData from "features/display/ChatData";

const Inbox = () => {
  const [selectedTab, setSelectedTab] = useState("call");

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };
  return (
    <Container>
      <Grid container direction={"column"} spacing={4}>
        <Grid item>
          <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
            <Navbar />
          </AppBar>
        </Grid>
        <Grid item sx={{ mt: "64px" }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <ButtonComponent
                label="chats"
                selected={selectedTab === "chat"}
                onClick={() => handleTabClick("chat")}
              />
            </Grid>
            <Grid item>
              <ButtonComponent
                label="calls"
                selected={selectedTab === "call"}
                onClick={() => handleTabClick("call")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {selectedTab === "chat" && <ChatData />}
          {selectedTab === "call" && <CallData />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Inbox;
