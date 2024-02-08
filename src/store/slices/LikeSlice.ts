import { createSlice } from "@reduxjs/toolkit";
interface LikeState {
  count: number;
  liked: boolean;
}
const initialState: LikeState = {
  count: 0,
  liked: false,
};
const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    incrementLike(state) {
      state.count++;
      state.liked = true;
    },
    decrementLike(state) {
      state.count--;
      state.liked = false;
    },
  },
});
export const { incrementLike, decrementLike } = likeSlice.actions;
export default likeSlice.reducer;
