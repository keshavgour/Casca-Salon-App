import ProfileState from "interfaces/profileStateInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProfileState = {
  id: "",
  email: "",
  fullName: "",
  nickname: "",
  dateOfBirth: "",
  gender: "",
  mobileNumber: "",
};

const editprofileSlice = createSlice({
  name: "editprofile",
  initialState,
  reducers: {
    setProfileDetails(state, action: PayloadAction<ProfileState>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.nickname = action.payload.nickname;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.gender = action.payload.gender;
      state.mobileNumber = action.payload.mobileNumber;
    },
  },
});

export const { setProfileDetails } = editprofileSlice.actions;

export const editprofileActions = { setProfileDetails };

export default editprofileSlice.reducer;
