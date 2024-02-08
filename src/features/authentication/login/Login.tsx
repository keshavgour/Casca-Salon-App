import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import BackButtonComponent from "components/BackButtonComponent";
import TextFieldComponent from "components/TextFieldComponent";
import { axiosBaseURL } from "lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmail, setPassword } from "store/slices/loginSlice";
import { RootState } from "store/store";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.login);
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "email":
        dispatch(setEmail(value));
        break;
      case "password":
        dispatch(setPassword(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await axiosBaseURL.post("/login", formData);
      if (res.status === 200) {
        navigate("/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError(" Failed to log in");
    }
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
              Sign in
            </Button>
          </Grid>
          <Grid item>
            {error && (
              <Typography variant="h6" sx={{ color: "red" }}>
                {error}
              </Typography>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

// import { Button, Grid, Typography } from "@mui/material";
// import { Container } from "@mui/system";
// import BackButtonComponent from "components/BackButtonComponent";
// import TextFieldComponent from "components/TextFieldComponent";
// import { axiosBaseURL } from "lib/axios";
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// interface FormData {
//   email: string;
//   password: string;
// }

// export const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setFormData((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const res = await axiosBaseURL.post("/login", formData);
//       if (res.status === 200) {
//         navigate("/dashboard");
//       } else {
//         setError("Invalid credentials");
//       }
//     } catch (error) {
//       setError(" Failed to log in");
//     }
//   };

//   const clickBack = () => {
//     navigate("/");
//   };

//   return (
//     <Container maxWidth="sm">
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item mt={8}>
//             <BackButtonComponent onClick={clickBack} />
//           </Grid>
//           <Grid item mt={8}>
//             <Typography variant="h4">Login to your Account!</Typography>
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
//               Sign in
//             </Button>
//           </Grid>
//           <Grid item>
//             {error && (
//               <Typography variant="h6" sx={{ color: "red" }}>
//                 {error}
//               </Typography>
//             )}
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };
