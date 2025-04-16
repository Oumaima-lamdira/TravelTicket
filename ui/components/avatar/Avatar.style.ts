import { Avatar, Popover, styled } from "@mui/material";

export const StyledContainer = styled("div")(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "3px",
}));
export const StyledWrapper = styled(Popover)(() => ({
  position: "absolute",
  top: "65px",
  right: "0px !important",
}));
export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "40px",
  height: "40px",
  backgroundColor: theme.palette.secondary.dark,
  color: "white",
  cursor: "pointer",
}));
