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
    setData: (state, action: PayloadAction<RegistrationState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.passwordConfirm = action.payload.passwordConfirm;
    },
  },
});

export const { setData } = registrationSlice.actions;

export const registrationActions = {
  setData,
};

export default registrationSlice.reducer;
