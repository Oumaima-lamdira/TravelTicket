import { styled } from "@mui/material";

export const StyledContainer = styled("div")<{ view: string }>(({ theme, view }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  ...(view === "GRID" && {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    color: theme.palette.text.primary,
    gap: "1px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  }),
}));

export const StyledText = styled("p")(({ theme }) => ({
  fontWeight: "400",
  fontSize: "26px",
  letterSpacing: "0em",
  textAlign: "left",
  paddingBottom: "20px",
  color: theme.palette.text.primary,
  lineHeight: "32px",
}));

export const StyledWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : "#E2E2E2",
  position: "absolute",
  padding: "10px 30px",
  width: "100%",
  height: "100vh",
  overflow: "auto",
}));
