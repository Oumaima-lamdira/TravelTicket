import type { RootState } from "~store/types";

export const themeSelector = (state: RootState): string => state.theme;
