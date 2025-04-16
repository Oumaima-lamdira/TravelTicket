import imagesPath from "~public/assets/styles/imagesPath";

import { styled } from "@mui/material";
export const StyledHeader = styled("header")(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: "34px",
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.primary.main,
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 100,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  "& :hover": {
    "& .logo": {
      content: `url(${imagesPath.logoWithColor})`,
    },
    "& .text": {
      display: "block",
    },
  },
}));

export const StyledLogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
