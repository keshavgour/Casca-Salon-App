import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TextFieldComponent from "components/TextFieldComponent";
import axiosInstance from "lib/axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store/store";
import { useActions } from "hooks/useActions";

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axiosInstance
      .post("/auth/signup", formData)
      .then((res) => {
        console.log(res);
        navigate("/signup");
      })
      .catch((err) => console.log(err));
  };

  // const fetchData = async () => {
  //   const res = await axiosBaseURL.post("/auth/signup", formData);
  //   return res.data;
  // };

  // const { isLoading, isError, data, error } = useQuery({
  //   queryFn: fetchData,
  //   queryKey: ["getData"],
  // });

  // if (isLoading) {
  //   return <p>Loading.......</p>;
  // }

  // if (isError) {
  //   return <p>Error: {error.message}</p>;
  // }

  // if (data) {
  //   navigate("/signup");
  // }

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item mt={8}>
            <Typography variant="h4">Create your Account</Typography>
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
                  color: "white",
                  border: "1px solid #ff9800",
                },
                color: "white",
                backgroundColor: "#ff9800",
                border: "1px solid #ff9800",
                borderRadius: "100px",
              }}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </form>
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
