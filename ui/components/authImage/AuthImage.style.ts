import { styled } from "@mui/material";

export const StyledImageAuth = styled("div")<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-size: cover;  /* Make sure the image covers the whole space */
  background-position: center;  /* Center the image */
  background-repeat: no-repeat;  /* Prevent the image from repeating */
  height: 100%;
  width: 100%;
`;

