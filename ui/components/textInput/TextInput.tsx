"use client";

import React from "react";

import { StyledTextField } from "./TextInput.style";

import type { TextFieldProps } from "@mui/material";
import type { FC } from "react";
const TextInput: FC<TextFieldProps> = (props) => {
  return <StyledTextField {...props} variant="standard" />;
};

export default TextInput;
