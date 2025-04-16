"use client";
import { StyledImageAuth } from "./AuthImage.style";

import type { FC } from "react";

interface AuthImageProps {
  src: string;
}
const AuthImage: FC<AuthImageProps> = ({ src }) => {
  return <StyledImageAuth image={src} />;
};

export default AuthImage;
