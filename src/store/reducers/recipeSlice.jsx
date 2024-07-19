import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    load: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export default recipeSlice.reducer;
export const { load } = recipeSlice.actions;
