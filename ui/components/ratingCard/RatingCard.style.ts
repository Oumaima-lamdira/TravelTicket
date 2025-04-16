import { Card, styled } from "@mui/material";

export const StyledRatingCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.background.paper,
}));
