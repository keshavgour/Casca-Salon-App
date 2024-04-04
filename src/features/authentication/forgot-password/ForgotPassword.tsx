import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import forgotPasswordService from "Services/forgotPasswordService";
import TextFieldComponent from "components/TextFieldComponent";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await forgotPasswordService(email);
      console.log(response);
      if (response.status === 200) {
        navigate("/verifyOtp");
      }
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const response = await axiosInstance.post("/auth/sendOTPByEmail", { email });
    //   console.log(response);
    //   if (response.status === 200) {
    //     navigate("/verifyOtp");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} pl={5} pb={3}>
            <TextFieldComponent
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} pl={5}>
            <Button type="submit" variant="contained" fullWidth>
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ForgotPassword;
