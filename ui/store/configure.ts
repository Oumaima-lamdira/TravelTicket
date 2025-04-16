import updateDrawerReducer from "./drawer/Drawer";
import updateThemeReducer from "./theme/Theme";
import updateViewReducer from "./view/change";

import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  theme: updateThemeReducer,
  drawer: updateDrawerReducer,
  view: updateViewReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
