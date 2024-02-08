import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ReviewObj {
  id: number;
  image: string;
  customer: string;
  comment: string;
  rating: string;
  time: number;
}
interface ChipState {
  selectedChip: string;
  filteredreview: Array<ReviewObj>;
}
const initialState: ChipState = {
  selectedChip: "All",
  filteredreview: [],
};
const filterReviewSlice = createSlice({
  name: "filterReview",
  initialState,
  reducers: {
    setSelectedChip(state, actions: PayloadAction<string>) {
      state.selectedChip = actions.payload;
    },
    setFilteredReviews(state, action: PayloadAction<ReviewObj[]>) {
      if ((state.selectedChip = "All")) {
        state.filteredreview = action.payload;
      } else {
        state.filteredreview = action.payload.filter(
          (reviewlist) => reviewlist.rating === state.selectedChip
        );
      }
    },
  },
});

export const { setSelectedChip, setFilteredReviews } = filterReviewSlice.actions;
export default filterReviewSlice.reducer;
