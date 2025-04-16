import { styled } from "@mui/material";
import Link from "next/link";

export const StyledForm = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  backgroundColor: "rgba(43,101,141,255)",
  position: "relative",
  width: "100%",
  height: "100vh",
}));

export const StyledLink = styled(Link)({
  cursor: "pointer",
  "&:hover": {
    opacity: 0.7,
  },
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 10,
  position: "absolute",
  top: 10,
  left: 30,
});
export const StyledInputs = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  padding: "0 18%",
  gap: 20,
  marginTop: 60,
});
