import { viewTypes } from "../types";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: string = viewTypes.GRID;
export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    updateView: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { updateView } = viewSlice.actions;

const updateViewReducer = viewSlice.reducer;

export default updateViewReducer;
