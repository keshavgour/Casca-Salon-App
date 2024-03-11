import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "store/slices/registrationSlice";
import signupReducer from "store/slices/signupSlice";
import loginReducer from "store/slices/loginSlice";
import userReducer from "store/slices/userSlice";
import reviewSlice from "./slices/reviewSlice";
import profileSlice from "./slices/profileSlice";
import selectLabelSlice from "./slices/selectLabelSlice";
import editprofileSlice from "./slices/editprofileSlice";
export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    signup: signupReducer,
    login: loginReducer,
    user: userReducer,
    filterReview: reviewSlice,
    selectedLabel: selectLabelSlice,
    profile: profileSlice,
    editprofile: editprofileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
