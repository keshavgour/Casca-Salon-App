import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReviewObj {
  id: number;
  image: string;
  customer: string;
  comment: string;
  rating: string;
  time: number;
  likeStatus: boolean;
  likeCount: number;
}

interface ReviewState {
  status: boolean;
  count: number;
  selectedChip: string;
  filteredreview: ReviewObj[];
}

const initialState: ReviewState = {
  status: false,
  count: 0,
  selectedChip: "All",
  filteredreview: [],
};

const filterReviewSlice = createSlice({
  name: "filterReview",
  initialState,
  reducers: {
    setSelectedChip(state, action: PayloadAction<string>) {
      state.selectedChip = action.payload;
    },
    setFilteredReviews(state, action: PayloadAction<ReviewObj[]>) {
      if (state.selectedChip === "All") {
        state.filteredreview = action.payload;
      } else {
        state.filteredreview = action.payload.filter((item) => item.rating === state.selectedChip);
      }
    },
    setLikeStatus(state, action: PayloadAction<number>) {
      const index = state.filteredreview.findIndex((obj) => obj.id === action.payload);
      if (index !== -1) {
        state.status = !state.status;
        state.count = state.count++;
        state.filteredreview[index].likeStatus = !state.status;
        state.filteredreview[index].likeCount = state.count++;
      }
    },
    removeLikeStatus(state, action: PayloadAction<number>) {
      const index = state.filteredreview.findIndex((obj) => obj.id === action.payload);
      if (index !== -1) {
        state.status = !state.status;
        state.count = state.count--;
        state.filteredreview[index].likeStatus = !state.status;
        state.filteredreview[index].likeCount = state.count--;
      }
    },
  },
});
export const { setSelectedChip, setFilteredReviews, setLikeStatus, removeLikeStatus } =
  filterReviewSlice.actions;
export default filterReviewSlice.reducer;
