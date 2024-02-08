import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "store/slices/registrationSlice";
import signupReducer from "store/slices/signupSlice";
import loginReducer from "store/slices/loginSlice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    signup: signupReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
