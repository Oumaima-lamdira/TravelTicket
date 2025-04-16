import { Avatar, styled } from "@mui/material";

export const StyledDrawerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px",
  width: "553px",
  height: "100%",
});

export const StyledCloseButton = styled(Avatar)({
  height: "25px",
  width: "25px",
  cursor: "pointer",
});

export const StyledContent = styled("div")({
  paddingLeft: "10px",
  paddingBottom: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const StyledImagesContainer = styled("div")({
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const StyledButtonsWrapper = styled("div")({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
});

export const StyledTitle = styled("div")({
  fontSize: "20px",
  fontWeight: "bold",
});

export const StyledDescription = styled("div")({
  fontSize: "16px",
  textAlign: "start",
});
