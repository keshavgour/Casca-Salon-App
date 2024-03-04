import { createSlice } from "@reduxjs/toolkit";

interface SelectState {
  selectedLabel: string;
}
const initialState: SelectState = {
  selectedLabel: "",
};

const selectedLabelSlice = createSlice({
  name: "selectedLabel",
  initialState,
  reducers: {
    setSelectedLabel: (state, action) => {
      state.selectedLabel = action.payload.selectedLabel;
    },
  },
});
export const { setSelectedLabel } = selectedLabelSlice.actions;

export default selectedLabelSlice.reducer;
