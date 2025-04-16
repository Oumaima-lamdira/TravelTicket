import React from "react";

import { useRedux } from "~hooks/redux/useRedux";
import { themeSelector } from "~store/theme/selectors";
import { DARK, updateTheme } from "~store/theme/Theme";

import { darkTheme, lightTheme } from "./mui-theme";

import { ThemeProvider } from "@mui/material";
import type { PropsWithChildren } from "react";

const MuiThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [mode] = useRedux(themeSelector, updateTheme);
  const currentTheme = mode === DARK ? darkTheme : lightTheme;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
export default MuiThemeProvider;
