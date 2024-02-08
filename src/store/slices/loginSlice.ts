import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoginState {
  email: string;
  password: string;
}

const initialState: LoginState = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<LoginState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setInfo } = loginSlice.actions;
export default loginSlice.reducer;
