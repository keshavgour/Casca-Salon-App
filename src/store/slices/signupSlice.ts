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
    setProfile: (state, action: PayloadAction<SignupState>) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.nickname = action.payload.nickname;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.gender = action.payload.gender;
      state.mobileNumber = action.payload.mobileNumber;
    },
  },
});

export const { setProfile } = signupSlice.actions;

export const signupActions = { setProfile };
export default signupSlice.reducer;
