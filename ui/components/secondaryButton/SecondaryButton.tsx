"use client";

import type { BaseButtonProps } from "~components/baseButton/BaseButton";

import { StyledSecondaryButton } from "./SecondaryButton.style";

import type { FC } from "react";

const SecondaryButton: FC<BaseButtonProps> = (props) => {
  return <StyledSecondaryButton {...props} />;
};

export default SecondaryButton;
