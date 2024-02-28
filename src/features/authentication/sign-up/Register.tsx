import React from "react";
import { Button, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TextFieldComponent from "components/TextFieldComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store/store";
import { useActions } from "hooks/useActions";
import { Link as RouterLink } from "react-router-dom";
import { registerService } from "Services/registerService";

export const Register = () => {
  const navigate = useNavigate();
  const { setData } = useActions();

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
      const data = await registerService(formData);
      console.log(data);
      navigate("/signup");
    } catch (error) {
      throw new Error("Failed to Signup");
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
      <Typography variant="h2" component="span" sx={{ marginY: 2 }}>
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
      <Typography variant="subtitle2" component="span" sx={{ marginY: 2 }}>
        Already have an account ?{" "}
        <Link component={RouterLink} underline="hover" to="/login">
          Click Here
        </Link>
      </Typography>
    </Container>
  );
};

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
