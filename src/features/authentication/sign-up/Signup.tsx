import React, { useState } from "react";
import { Container, Button, Typography, Grid } from "@mui/material";
import ButtonComponent from "components/ButtonComponent";
import TextFieldComponent from "components/TextFieldComponent";
import BackButtonComponent from "components/BackButtonComponent";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
  fullName: string;
  nickname: string;
  dob: string;
  gender: string;
  mobile: string;
}

export function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    fullName: "",
    nickname: "",
    dob: "",
    gender: "",
    mobile: "",
  });

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const clickBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    navigate("/login");
  };

  const steps = ["Create your Account!", "Fill Your Profile"];

  const renderStep = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
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
              <Grid item xs={12} textAlign="center">
                <ButtonComponent label="Sign up" selected onClick={handleNext} />
              </Grid>
            </Grid>
          </form>
        );
      case 1:
        return (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextFieldComponent
                  label="Full Name"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextFieldComponent
                  label="Nickname"
                  type="text"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextFieldComponent
                  label=""
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextFieldComponent
                  label="Mobile Number"
                  name="mobile"
                  type="number"
                  value={formData.mobile}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextFieldComponent
                  label="Gender"
                  name="gender"
                  type="text"
                  value={formData.gender}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
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
                  Continue
                </Button>
              </Grid>
            </Grid>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "4rem" }}>
      <Grid container>
        <Grid item>
          {steps[step] === "Fill Your Profile" ? <BackButtonComponent onClick={clickBack} /> : ""}
        </Grid>
        <Grid item pl={1}>
          <Typography variant="h4" align="center" gutterBottom>
            {steps[step]}
          </Typography>
        </Grid>
      </Grid>
      {renderStep(step)}
    </Container>
  );
}
