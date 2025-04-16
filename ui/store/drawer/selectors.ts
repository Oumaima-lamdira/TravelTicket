import type { RootState } from "~store/types";

export const drawerSelector = (state: RootState): boolean => state.drawer;
