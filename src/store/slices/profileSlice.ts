import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  nikname: string;
  emailId: string;
}
const initialState: ProfileState = {
  nikname: "",
  emailId: "",
};

const profileSlice = createSlice({
  name: "profileData",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<{ email: string; name: string }>) => {
      state.nikname = action.payload.name;
      state.emailId = action.payload.email;
    },
  },
});

export const { setProfileData } = profileSlice.actions;

export default profileSlice.reducer;
