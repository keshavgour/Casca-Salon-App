import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import BackButtonComponent from "components/BackButtonComponent";

const Notifications = () => {
  const notificationData = [
    {
      id: 1,
      imageURL:
        "https://cdni.iconscout.com/illustration/premium/thumb/mobile-card-payment-successful-5796098-4841252.png",
      title: "Payment Successful",
      description: "You have made a salon payment",
    },
    {
      id: 2,
      imageURL:
        "https://img.freepik.com/premium-vector/success-payment-icon-flat-style-approved-money-vector-illustration-isolated-background-successful-pay-sign-business-concept_157943-1354.jpg",
      title: "New Services Available",
      description: "Now you can search the nearest salon",
    },
    {
      id: 3,
      imageURL:
        "https://png.pngtree.com/png-vector/20210629/ourmid/pngtree-promo-code-dark-blue-and-apricot-glow-flat-label-png-image_3521369.jpg",
      title: "Today's Special Offers",
      description: "You get a special promo today!",
    },
    {
      id: 4,
      imageURL:
        "https://www.shutterstock.com/image-vector/vector-illustration-detailed-glossy-black-260nw-613618706.jpg",
      title: "Credit Card Connected!",
      description: "Credit card has been linked!",
    },
    {
      id: 5,
      imageURL:
        "https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg",
      title: "Account Setup Successful!",
      description: "Your account has been created!",
    },
  ];

  const navigate = useNavigate();

  const clickBack = () => {
    return navigate("/dashboard");
  };
  return (
    <Container>
      <Grid container direction="column" spacing={3} alignItems="center">
        <Grid item>
          <Grid container>
            <Grid item>
              <BackButtonComponent onClick={clickBack} />
            </Grid>
            <Grid item pt={0.4} pl={1}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Notification
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Today
          </Typography>
        </Grid>
        <Grid item>
          {notificationData.map((data) => (
            <Paper key={data.id}>
              <Grid container spacing={2} mb={3}>
                <Grid item mb={2} ml={5}>
                  <Avatar src={data.imageURL} sx={{ width: "60px", height: "60px" }} />
                </Grid>
                <Grid item>
                  <Grid container direction="column" pl={15}>
                    <Grid item>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {data.title}
                      </Typography>
                    </Grid>
                    <Grid item mr={5}>
                      <Typography variant="body1">{data.description}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Notifications;
