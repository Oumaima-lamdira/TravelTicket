import { Button, styled } from "@mui/material";

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

export const StyledText = styled("p")(() => ({
  fontWeight: "400",
  fontSize: "26px",
  letterSpacing: "0em",
  textAlign: "left",
  paddingBottom: "20px",
  color: "white",
  lineHeight: "32px",
}));

export const StyledWrapper = styled("div")(() => ({
  backgroundColor: "#E2E2E2",
  position: "absolute",
  padding: "10px 30px",
  width: "100%",
  height: "100vh",
  overflow: "auto",
}));

export const StyledTrainItem = styled(Button)<{ selected: boolean }>(({ theme, selected }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "16px",
  color: "white",
  gap: "20px",
  backgroundColor: selected ? theme.palette.primary.main : theme.palette.background.paper,
  borderRadius: "8px",
  boxShadow: selected ? `0px 4px 10px ${theme.palette.primary.light}` : "none",
  transition: "background-color 0.3s, box-shadow 0.3s",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const StyledTrainItemText = styled("p")(({ theme }) => ({
  fontWeight: "600",
  fontSize: "18px",
  color: theme.palette.text.primary,
  margin: "0 16px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
}));
