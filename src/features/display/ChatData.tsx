import React from "react";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const ChatData = () => {
  const chatData = [
    {
      id: 1,
      shopName: "Bangs on Target",
      lastMsg: "Thank You So Much",
      imageURL:
        "https://m.media-amazon.com/images/I/41nSOi3%2B1-L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    },
    {
      id: 2,
      shopName: "Hair Force",
      lastMsg: "This is really epic!",
      imageURL: "https://imgmedia.lbb.in/media/2023/06/64880efb156ecf24a1e150bb_1686638331890.jpg",
    },
    {
      id: 3,
      shopName: "Galaxy Salon",
      lastMsg: "Awesome!",
      imageURL:
        "https://naomisheadmasters.com/wp-content/uploads/2023/07/Beauty-Salons-For-Men-In-Panchkula.jpg",
    },
    {
      id: 4,
      shopName: "Massage Parlor",
      lastMsg: "This is amazing!",
      imageURL: "https://i.pinimg.com/736x/0d/98/13/0d981340ef172234a2b0d6d50b480625.jpg",
    },
    {
      id: 5,
      shopName: "Amnesia",
      lastMsg: "How are you?",
      imageURL:
        "https://img.favpng.com/0/19/11/pedicure-manicure-nail-salon-beauty-parlour-png-favpng-m7cTeGwQiEWL7MngGbTMyhkPL.jpg",
    },
  ];

  return (
    <Grid>
      {chatData.map((data) => (
        <Grid
          container
          key={data.id}
          justifyContent="space-between"
          mb={3}
          lg={10}
          margin="0 auto"
          pl={20}
        >
          <Grid item mb={2} ml={2} lg={4}>
            <Grid container>
              <Grid item>
                <Avatar src={data.imageURL} sx={{ width: "60px", height: "60px" }} />
              </Grid>
              <Grid item>
                <Grid container direction="column" pl={2}>
                  <Grid item>
                    <Typography variant="h6" sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                      {data.shopName}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">{data.lastMsg}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <IconButton>
              <ChatIcon sx={{ color: "#ff9800" }} />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default ChatData;
