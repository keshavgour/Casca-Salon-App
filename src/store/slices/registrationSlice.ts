import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});
