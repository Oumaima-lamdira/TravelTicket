import { styled } from "@mui/material";

export const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  justifyContent: "flex-end",
  zIndex: 100,
  borderTop: "1px solid gray",
  borderTopOpacity: 0.1,
  padding: "15px 34px",
}));
