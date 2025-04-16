import BaseButton from "~components/baseButton/BaseButton";

import { styled } from "@mui/material";

export const StyledPrimaryButton = styled(BaseButton)(({ theme }) => ({
  height: "100%",
  width: "100%",
  backgroundColor: theme.palette.grey[200],
  color: "black",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: "black",
    border: "none",
  },
}));
