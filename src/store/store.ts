import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "./slices/LikeSlice";
import FilterReviewSlice from "./slices/FilterReviewSlice";
export const store = configureStore({
  reducer: {
    like: likeSlice,
    filterReview: FilterReviewSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
