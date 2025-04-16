import { styled, Typography } from "@mui/material";

export const StyledDrawer = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  width: "532px",
  height: "100%",
});

export const MainDrawer = styled("div")<{ isSecondDrawerOpen: Boolean }>(({ isSecondDrawerOpen }) => ({
  transition: "all 0.5s",
  marginRight: isSecondDrawerOpen === true ? "532px" : "0px",
}));

export const StyledTitle = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "20px",
  color: "textPrimary",
  variant: "h5",
});
