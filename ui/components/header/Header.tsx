"use client";
import Avatar from "~components/avatar";
import { useRedux } from "~hooks/redux/useRedux";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import imagesPath from "~public/assets/styles/imagesPath";
import { themeSelector } from "~store/theme/selectors";
import { LIGHT, updateTheme } from "~store/theme/Theme";

import { StyledHeader, StyledLogoContainer } from "./Header.style";

import { Typography } from "@mui/material";
import Image from "next/image";
import type { FC } from "react";

const Header: FC = () => {
  const translate = useTranslation();

  const [theme] = useRedux(themeSelector, updateTheme);
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <Image
          src={theme === LIGHT ? imagesPath.logoWithColor : imagesPath.logoWithoutColor}
          alt={translate(txKeys.common.logo)}
          width={400}
          height={50}
          className="logo"
          loading="eager"
        />
        <Typography variant="bodyMedium" className="hidden text" color="textPrimary">
          {translate(txKeys.common.logo)}
        </Typography>
      </StyledLogoContainer>
      <StyledLogoContainer>
        <Avatar />
      </StyledLogoContainer>
    </StyledHeader>
  );
};

export default Header;
