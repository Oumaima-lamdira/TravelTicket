import { styled } from "@mui/material";

export const StyledToolTipContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "80%",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  "& img": {
    cursor: "pointer",
  },
  "& p": {
    textAlign: "center",
  },
}));
