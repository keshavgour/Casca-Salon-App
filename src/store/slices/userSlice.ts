import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
}

const initialState: UserState = {
  userName: localStorage.getItem("userName") || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      localStorage.setItem("userName", action.payload);
    },
  },
});

export const { setUserName } = userSlice.actions;
export const userActions = {
  setUserName,
};

export default userSlice.reducer;
