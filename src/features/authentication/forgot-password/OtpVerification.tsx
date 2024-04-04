import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import otpVerificationService from "Services/otpVerificationService";
import TextFieldComponent from "components/TextFieldComponent";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await otpVerificationService(email, otp);
      localStorage.setItem("resetToken", response.data.resetToken);
      console.log(response);
      if (response.status === 200) {
        navigate("/updatePassword");
      }
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const response = await axiosInstance.post("/auth/verifyOTPSendByEmail", { email, otp });
    //   localStorage.setItem("resetToken", response.data.resetToken);
    //   console.log(response);
    //   if (response.status === 200) {
    //     navigate("/updatePassword");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "70vh",
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
          <Grid item xs={12} pl={5} pb={3}>
            <TextFieldComponent
              label="OTP"
              name="otp"
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} pl={5}>
            <Button type="submit" variant="contained" fullWidth>
              Verify
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default OtpVerification;
