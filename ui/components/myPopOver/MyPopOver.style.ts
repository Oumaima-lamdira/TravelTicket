import { Link, styled } from "@mui/material";

export const PopUpContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "10px",
});

export const SettingsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

export const StyledLink = styled(Link)({
  display: "flex",
  justifyContent: "flex-start",
  padding: "4px",
  cursor: "pointer",
});

export const FlexContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const StyledDivider = styled("div")({
  height: "1px",
  backgroundColor: "#E0E0E0",
});
