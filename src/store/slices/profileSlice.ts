import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  profilePic: string;
  nikname: string;
  emailId: string;
}
const initialState: ProfileState = {
  profilePic: "",
  nikname: "",
  emailId: "",
};

const profileSlice = createSlice({
  name: "profileData",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<ProfileState>) => {
      state.profilePic = action.payload.profilePic;
      state.nikname = action.payload.nikname;
      state.emailId = action.payload.emailId;
    },
  },
});

export const { setProfileData } = profileSlice.actions;

export default profileSlice.reducer;
