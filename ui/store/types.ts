import type { store } from "./configure";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export enum viewTypes {
  GRID = "GRID",
  LIST = "LIST",
}
