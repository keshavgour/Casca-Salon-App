import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "store/slices/registrationSlice";
import signupReducer from "store/slices/signupSlice";
import loginReducer from "store/slices/loginSlice";

import likeSlice from "./slices/LikeSlice";
import FilterReviewSlice from "./slices/FilterReviewSlice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    signup: signupReducer,
    login: loginReducer,
    like: likeSlice,
    filterReview: FilterReviewSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
