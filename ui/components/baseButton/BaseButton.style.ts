import { Button, styled } from "@mui/material";

const BaseButtonStyle = styled(Button)(({ theme }) => ({
  width: "200px",
  height: 55,
  borderRadius: 60,
  border: `1px solid ${theme.palette.common.white}`,
  fontFamily: theme.typography.fontFamily,
  padding: "20px 26px",
  verticalAlign: "middle",
  lineHeight: 0,
  textTransform: "capitalize",
  borderColor: theme.palette.common.white,
  color: theme.palette.common.white,
}));

export default BaseButtonStyle;
