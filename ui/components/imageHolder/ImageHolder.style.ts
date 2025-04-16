import { styled } from "@mui/material";
import Image from "next/image";

export const Container = styled("div")({
  position: "relative",
  borderRadius: "10px",
  overflow: "hidden",
  width: "204px",
  aspectRatio: "2",
  transition: "background-color 0.3s, transform 0.3s",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export const HoveredImage = styled(Image)({
  transition: "transform 0.3s ease-in-out",

  "&:hover": {
    transform: "scale(1.2)",
  },
});

export const IconsWrapper = styled("div")({
  position: "absolute",
  display: "none",
  flexDirection: "row",
  paddingTop: "5px",
  gap: "8px",
});

export const StyledImageHolder = styled("div")({
  position: "relative",
});
