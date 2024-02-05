import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import BackButtonComponent from "components/BackButtonComponent";
import TextFieldComponent from "components/TextFieldComponent";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  const clickBack = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item mt={8}>
            <BackButtonComponent onClick={clickBack} />
          </Grid>
          <Grid item mt={8}>
            <Typography variant="h4">Login to your Account!</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextFieldComponent
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldComponent
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                "&:hover": {
                  backgroundColor: "#ff9800",
                  color: "white",
                  border: "1px solid #ff9800",
                },
                color: "white",
                backgroundColor: "#ff9800",
                border: "1px solid #ff9800",
                borderRadius: "100px",
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
