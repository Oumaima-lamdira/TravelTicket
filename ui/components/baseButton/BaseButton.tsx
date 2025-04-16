"use client";
import BaseButtonStyle from "./BaseButton.style";

import type { FC } from "react";

export interface BaseButtonProps {
  text?: string;
  icon?: string;
  onClick?: () => void;
}

const BaseButton: FC<BaseButtonProps> = ({ text, onClick, icon }) => {
  return (
    <BaseButtonStyle onClick={onClick} endIcon={icon}>
      {text}
    </BaseButtonStyle>
  );
};

export default BaseButton;
