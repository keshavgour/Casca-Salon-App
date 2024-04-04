import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import updatePasswordService from "Services/updatePasswordService";
import TextFieldComponent from "components/TextFieldComponent";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await updatePasswordService(password, passwordConfirm);
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const resetToken = localStorage.getItem("resetToken");
    //   const response = await axiosInstance.patch(`/auth/resetPassword/${resetToken}`, { password, passwordConfirm });
    //   if (response.status === 200) {
    //     navigate("/login");
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
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} pl={5} pb={3}>
            <TextFieldComponent
              label="Confirm Password"
              name="passwordConfirm"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} pl={5}>
            <Button type="submit" variant="contained" fullWidth>
              Update Password
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UpdatePassword;
