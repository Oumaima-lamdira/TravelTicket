import { styled } from "@mui/material";

export const StyledImageAuth = styled("div")<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-size: cover;  /* Make sure the image covers the whole space */
  background-position: center;  /* Center the image */
  background-repeat: no-repeat;  /* Prevent the image from repeating */
  height: 100vh;
  width: 100%;
`;

export const StyledBookingForm = styled("div")`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  top: 65%;
  left: 85%;
  transform: translate(-50%, -50%);
`;

export const StyledInput = styled("input")`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 4px rgba(25, 118, 210, 0.5);
  }
`;

export const StyledButton = styled("button")`
  background: #1976d2;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #1565c0;
  }

  &:disabled {
    background: #90caf9;
    cursor: not-allowed;
  }
`;