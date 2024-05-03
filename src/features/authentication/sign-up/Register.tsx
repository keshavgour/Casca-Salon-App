import React from "react";
import { Button, Grid, IconButton, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TextFieldComponent from "components/TextFieldComponent";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { useActions } from "hooks/useActions";
import { Link as RouterLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useRegisterService } from "hooks/useRegisterService";

export const Register: React.FC = () => {
  const { setData } = useActions();

  const mutation = useRegisterService();

  const formData = useSelector((state: RootState) => state.registration);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await mutation.mutateAsync(formData);
    } catch (error) {
      console.log(error);
    }
  };

  //------ for google login --------
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const token = urlParams.get("access_token");

  //   if (token) {
  //     window.location.href = "/dashboard";
  //   }
  // }, []);

  const clickGoogle = async () => {
    try {
      window.location.href = "http://ec2-13-232-214-55.ap-south-1.compute.amazonaws.com:3000/api/auth/google";
      //   const response = await axiosInstance.get("/auth/google");
      //   const redirectUrl = response.data.redirectUrl;
      //   window.location.href = redirectUrl;
    } catch (error) {
      console.log("Error fetching Google login URL: ", error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" component="span" sx={{ marginY: 2 }}>
        Create your Account
      </Typography>
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
          <Grid item xs={12}>
            <TextFieldComponent
              label="Confirm Password"
              name="passwordConfirm"
              type="password"
              value={formData.passwordConfirm}
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
                },
                backgroundColor: "primary.main",
                borderRadius: "100px",
                textTransform: "none",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="caption" component="span" sx={{ marginY: 2 }}>
        Already have an account ?{" "}
        <Link component={RouterLink} underline="hover" to="/login">
          Click Here
        </Link>
      </Typography>
      <Typography variant="h6">or continue with</Typography>
      <Grid container justifyContent={"center"}>
        <Grid item>
          <IconButton onClick={clickGoogle}>
            <GoogleIcon sx={{ color: "#f44336" }} fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <FacebookIcon sx={{ color: "#1565c0" }} fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

//   try {
//     const data = await registerService(formData);
//     console.log(data);
//     navigate("/signup");
//   } catch (error) {
//     throw new Error("Failed to Signup");
//   }

//   ---------------- Using UseState --------------------------

// import { Button, Grid, Typography } from "@mui/material";
// import { Container } from "@mui/system";
// import TextFieldComponent from "components/TextFieldComponent";
// import { axiosBaseURL } from "lib/axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// interface FormData {
//   email: string;
//   password: string;
//   passwordConfirm: string;
// }

// export const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     password: "",
//     passwordConfirm: "",
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setFormData((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     axiosBaseURL
//       .post("/register", formData)
//       .then((res) => {
//         navigate("/signup");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <Container maxWidth="sm">
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item mt={8}>
//             <Typography variant="h4">Create your Account</Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <TextFieldComponent
//               label="Email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextFieldComponent
//               label="Password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextFieldComponent
//               label="Confirm Password"
//               name="passwordConfirm"
//               type="password"
//               value={formData.passwordConfirm}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               sx={{
//                 "&:hover": {
//                   backgroundColor: "#ff9800",
//                   color: "white",
//                   border: "1px solid #ff9800",
//                 },
//                 color: "white",
//                 backgroundColor: "#ff9800",
//                 border: "1px solid #ff9800",
//                 borderRadius: "100px",
//               }}
//             >
//               Sign up
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };
