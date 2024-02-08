import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RegistrationState {
  email: string;
  password: string;
  passwordConfirm: string;
}

const initialState: RegistrationState = {
  email: "",
  password: "",
  passwordConfirm: "",
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setPasswordConfirm: (state, action: PayloadAction<string>) => {
      state.passwordConfirm = action.payload;
    },
  },
});

export const { setEmail, setPassword, setPasswordConfirm } = registrationSlice.actions;
export default registrationSlice.reducer;
