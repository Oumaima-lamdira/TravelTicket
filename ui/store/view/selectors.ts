import type { RootState } from "~store/types";

export const viewSelector = (state: RootState): string => state.view;
