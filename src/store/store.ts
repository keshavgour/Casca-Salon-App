import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "store/slices/registrationSlice";
import signupReducer from "store/slices/signupSlice";
import loginReducer from "store/slices/loginSlice";

// import likeSlice from "./slices/LikeSlice";
// import FilterReviewSlice from "./slices/FilterReviewSlice";
import reviewSlice from "./slices/reviewSlice";
import profileSlice from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    signup: signupReducer,
    login: loginReducer,
    // like: likeSlice,
    filterReview: reviewSlice,
    profile: profileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
