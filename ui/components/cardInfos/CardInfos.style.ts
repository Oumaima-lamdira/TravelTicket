import { Card, styled, Typography } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
  borderRadius: "10px",
  boxShadow: "0px 0px 2px 0px grey",
  backgroundColor: theme.palette.background.paper,
}));

export const StyledColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const StyledLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: "bold",
  textTransform: "uppercase",
  variant: "bodyMedium",
}));

export const StyledValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  variant: "bodyMedium",
}));
