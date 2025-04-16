import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const DARK = "dark";
export const LIGHT = "light";

const initialState: string = DARK;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

const updateThemeReducer = themeSlice.reducer;

export default updateThemeReducer;
