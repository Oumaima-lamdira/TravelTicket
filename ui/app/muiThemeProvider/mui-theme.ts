import { DARK, LIGHT } from "~store/theme/Theme";

import { createTheme } from "@mui/material";
import type { Theme } from "@mui/material/styles";

export const typography = {
  fontFamily: "Neue Haas Grotesk Display Pro, Arial, sans-serif",
  megaTitle: {
    fontSize: 95.9,
    fontWeight: 700,
  },
  h3: {
    fontSize: 38,
    fontWeight: 700,
  },
  h4: {
    fontSize: 32,
    fontWeight: 700,
  },
  lead: {
    fontSize: 26,
    fontWeight: 700,
  },
  bodyLarge: {
    fontSize: 18,
  },
  bodyLargeBold: {
    fontSize: 18,
    fontWeight: 700,
  },
  bodyMedium: {
    fontSize: 16,
  },
  bodyMediumBold: {
    fontSize: 16,
    fontWeight: 700,
  },
  bodySmall: {
    fontSize: 14,
  },
  bodySmallBold: {
    fontSize: 14,
    fontWeight: 700,
  },
  small: {
    fontSize: 13,
  },
  smallBold: {
    fontSize: 13,
    fontWeight: 700,
  },
  micro: {
    fontSize: 11,
  },
  h1: {
    fontSize: 62,
    fontWeight: 700,
  },
};

export const darkTheme: Theme = createTheme({
  typography,

  palette: {
    mode: DARK,
    primary: {
      main: "#232324",
      light: "#39393A",
      dark: "#212121",
    },

    secondary: {
      main: "#BC423E",
      dark: "#EB514F",
      light: "#FFFFFF",
    },
    info: {
      main: "#404040",
      light: "rgba(255, 255, 255, 0.1)",
      dark: "#E2E2E2",
    },
  },
});

export const lightTheme: Theme = createTheme({
  typography,

  palette: {
    mode: LIGHT,
    primary: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#FFFFFF",
    },

    secondary: {
      main: "#FFFFFF",
      dark: "#EB514F",
      light: "#FFFFFF",
    },
    info: {
      main: "#404040",
      light: "rgba(0, 0, 0, 0.1)",
      dark: "#E2E2E2",
    },
  },
});
