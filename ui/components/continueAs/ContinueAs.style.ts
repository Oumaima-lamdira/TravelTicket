import { styled, Typography } from "@mui/material";

export const StyledContinueAs = styled("div")({
  position: "absolute",
  top: 20,
  right: 20,
  padding: 10,
  display: "flex",
  fontSize: 14,
  gap: 10,
  alignItems: "center",
  justifyContent: "center",
});

export const StyledFullName = styled(Typography)({
  fontSize: 14,
  color: "#fff",
  fontWeight: "bold",
  textTransform: "capitalize",
  variant: "overline",
});

export const StyledContinueAsText = styled(Typography)({
  fontSize: 14,
  color: "grey",
  textTransform: "initial",
  variant: "overline",
});
