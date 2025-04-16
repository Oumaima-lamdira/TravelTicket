import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Boolean = false;

export const drawerSwitch = createSlice({
  name: "drawerOpen",
  initialState,
  reducers: {
    changeDrawerState: (_state, action: PayloadAction<Boolean>) => {
      return action.payload;
    },
  },
});

export const { changeDrawerState } = drawerSwitch.actions;

export default drawerSwitch.reducer;
