import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SignupState {
  email: string;
  fullName: string;
  nickname: string;
  dateOfBirth: string;
  gender: string;
  mobileNumber: string;
}

const initialState: SignupState = {
  email: "",
  fullName: "",
  nickname: "",
  dateOfBirth: "",
  gender: "",
  mobileNumber: "",
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setDateOfBirth: (state, action: PayloadAction<string>) => {
      state.dateOfBirth = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setMobileNumber: (state, action: PayloadAction<string>) => {
      state.mobileNumber = action.payload;
    },
  },
});

export const { setFullName, setNickname, setDateOfBirth, setGender, setMobileNumber, setEmail } =
  signupSlice.actions;
export default signupSlice.reducer;
