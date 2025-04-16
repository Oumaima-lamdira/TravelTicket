import BaseButton from "~components/baseButton/BaseButton";

import { styled } from "@mui/material";

export const StyledSecondaryButton = styled(BaseButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.info.light,
    color: "black",
  },
  backgroundColor: "transparent",
  height: "100%",
  width: "300px",

  color: "black",
  border: `1px solid black`,
}));
