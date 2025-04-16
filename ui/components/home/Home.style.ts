import imagesPath from "~public/assets/styles/imagesPath";

import { styled } from "@mui/material";
export const Background = styled("div")({
  backgroundImage: `url(${imagesPath.backgroundImage})`,
  height: "100vh",
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const HeadlinesContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  lineHeight: 1.1,
  gap: 30,
  width: 900,
  height: 400,
});

export const ButtonWrapper = styled("div")({
  display: "flex",
  gap: 20,
});
