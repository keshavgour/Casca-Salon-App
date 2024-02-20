import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import BackButtonComponent from "components/BackButtonComponent";
import TextFieldComponent from "components/TextFieldComponent";
import axiosInstance from "lib/axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "store/store";
import { useActions } from "hooks/useActions";

export const Signup = () => {
  const navigate = useNavigate();
  const { setProfile } = useActions();
  const formData = useSelector((state: RootState) => state.signup);

  const clickBack = () => {
    navigate("/");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setProfile({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosInstance
      .post("/auth/register", formData)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item mt={8}>
            <BackButtonComponent onClick={clickBack} />
          </Grid>
          <Grid item mt={8}>
            <Typography variant="h4">Fill Your Profile</Typography>
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
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextFieldComponent
              label="Mobile Number"
              name="mobileNumber"
              type="number"
              value={formData.mobileNumber}
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
            {/* <FormControl fullWidth variant="outlined">
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                label="gender"
                name="gender"
                value={formData.gender}
                onChange={(event) => handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl> */}
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
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

// ----------------------Using UseState-----------------------------

// import { Button, Grid, Typography } from "@mui/material";
// import { Container } from "@mui/system";
// import BackButtonComponent from "components/BackButtonComponent";
// import TextFieldComponent from "components/TextFieldComponent";
// import { axiosBaseURL } from "lib/axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// interface FormData {
//   email: string;
//   fullName: string;
//   nickname: string;
//   dateOfBirth: string;
//   gender: string;
//   mobileNumber: string;
// }

// export const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     fullName: "",
//     nickname: "",
//     dateOfBirth: "",
//     gender: "",
//     mobileNumber: "",
//   });

//   const clickBack = () => {
//     navigate("/");
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setFormData((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     axiosBaseURL
//       .post("/createProfile", formData)
//       .then((res) => {
//         navigate("/login");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <Container maxWidth="sm">
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item mt={8}>
//             <BackButtonComponent onClick={clickBack} />
//           </Grid>
//           <Grid item mt={8}>
//             <Typography variant="h4">Fill Your Profile</Typography>
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
//           <Grid item xs={12} sm={12}>
//             <TextFieldComponent
//               label="Full Name"
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={12}>
//             <TextFieldComponent
//               label="Nickname"
//               type="text"
//               name="nickname"
//               value={formData.nickname}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={12}>
//             <TextFieldComponent
//               label=""
//               name="dateOfBirth"
//               type="date"
//               value={formData.dateOfBirth}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={12}>
//             <TextFieldComponent
//               label="Mobile Number"
//               name="mobileNumber"
//               type="number"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={12}>
//             <TextFieldComponent
//               label="Gender"
//               name="gender"
//               type="text"
//               value={formData.gender}
//               onChange={handleChange}
//               fullWidth
//             />
//             {/* <FormControl fullWidth variant="outlined">
//               <InputLabel id="gender-label">Gender</InputLabel>
//               <Select
//                 labelId="gender-label"
//                 id="gender"
//                 label="gender"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={(event) => handleChange}
//               >
//                 <MenuItem value="male">Male</MenuItem>
//                 <MenuItem value="female">Female</MenuItem>
//               </Select>
//             </FormControl> */}
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
//               Continue
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };
