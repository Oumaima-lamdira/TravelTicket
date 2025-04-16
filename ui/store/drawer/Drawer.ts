import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const drawerSlice = createSlice({
  name: "drawerState",
  initialState,
  reducers: {
    updateDrawerState: (_state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { updateDrawerState } = drawerSlice.actions;

const updateDrawerReducer = drawerSlice.reducer;

export default updateDrawerReducer;
