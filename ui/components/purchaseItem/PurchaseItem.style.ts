import { styled } from "@mui/material";
import Image from "next/image";
export const StyledContainer = styled("div")(() => ({
  "&.LIST": {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export const StyledRating = styled("div")(() => ({
  "&.GRID": {
    display: "flex",
    position: "absolute",
    bottom: "10px",
    right: 8,
    "& #rating": {
      display: "none",
    },
  },
}));

export const StyledPurchasedStatus = styled("span")(({ theme }) => ({
  "&.GRID": {
    backgroundColor: "#393939",
    padding: "8px 15px",
    borderRadius: "10px",
  },
  color: theme.palette.text.primary,
  fontSize: "12px",
  textTransform: "uppercase",
  fontWeight: "bold",
}));

export const StyledFlexBoxContent = styled("div")(({ theme }) => ({
  "&.GRID": {
    position: "relative",
    width: "100%",
    aspectRatio: "1/1",
    overflow: "hidden",
    ":hover": {
      "& img": {
        display: "block",
        transition: "0.5s",
        transform: "scale(1.1)",
      },
      "& #TextInGridMode": {
        display: "flex",
        flexDirection: "column",
        marginLeft: "0px",
        padding: "10px",
      },
      "& #rating": {
        display: "flex",
      },
      "& .RatingContainer": {
        gap: "70px",
      },
    },
  },
  "&.LIST": {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    height: "100px",
    backgroundColor: theme.palette.info.light,
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: theme.palette.info.light,
      "& h3": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        "& > div": {
          marginTop: 0,
        },
      },
      "& span": {
        marginLeft: "3px",
        transition: "0.5s",
      },
    },
  },
}));

export const StyledDivContent = styled("span")(() => ({
  "&.LIST": {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    padding: "20px",
  },
  "&.GRID": {
    display: "none",
    position: "relative",
  },
}));

export const StyledImage = styled(Image)(() => ({
  "&.LIST": {
    borderRadius: "15%",
    objectFit: "cover",
    marginRight: "10px",
  },
}));

export const StyledImageWrapper = styled("div")(() => ({
  "&.LIST": {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "89px",
    height: "76px",
    borderRadius: "15%",
    backgroundColor: "white",
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
  },
  backgroundColor: "rgba(255, 255, 255, 0.05)",
}));

export const StyledHoveredText = styled("h3")(() => ({
  "&.LIST": {
    display: "none",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    "& > div": {
      marginTop: "10px",
    },
  },
}));

export const StyledPurchasedContainer = styled("div")(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  "& img": {
    display: "none",
  },
}));
