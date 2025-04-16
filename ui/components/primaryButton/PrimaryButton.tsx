"use client";
import type { BaseButtonProps } from "~components/baseButton/BaseButton";

import { StyledPrimaryButton } from "./PrimaryButton.style";

const PrimaryButton: React.FC<BaseButtonProps> = (props) => {
  return <StyledPrimaryButton {...props} />;
};

export default PrimaryButton;
