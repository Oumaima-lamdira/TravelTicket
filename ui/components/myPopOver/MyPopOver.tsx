import { type FC, useCallback } from "react";

import MySwitcher from "~components/mySwitcher";
import { ROUTES } from "~helpers/routes";
import { useRedux } from "~hooks/redux/useRedux";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import { themeSelector } from "~store/theme/selectors";
import { DARK, LIGHT, updateTheme } from "~store/theme/Theme";
import { clearLocalStorage, getFromLocalStorage, setToLocalStorage } from "~utils/localStorage";

import { THEME, USER_FULLNAME, USER_ROLE } from "./constants";
import { FlexContainer, PopUpContainer, SettingsContainer, StyledDivider, StyledLink } from "./MyPopOver.style";

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const PopUp: FC = () => {
  const translate = useTranslation();
  const router = useRouter();
  const [theme, setTheme] = useRedux(themeSelector, updateTheme);

  const handleSwitchChange = useCallback(() => {
    const updatedTheme = theme === DARK ? LIGHT : DARK;
    setToLocalStorage(THEME, updatedTheme);
    setTheme(updatedTheme);
  }, [theme, setTheme]);

  const handleLogoutClick = async () => {
    //await logout();
    clearLocalStorage();
    router.replace(ROUTES.HOME);
  };

  return (
    <PopUpContainer>
      <Typography fontWeight="bold" variant="bodyMediumBold">
        {getFromLocalStorage(USER_FULLNAME)}
      </Typography>
      <Typography variant="small">{getFromLocalStorage(USER_ROLE)}</Typography>
      <StyledDivider />
      <SettingsContainer>
        <Typography variant="small">{translate(txKeys.mySpace.popOver.settings)}</Typography>
        <FlexContainer>
          <Typography variant="small">{translate(txKeys.mySpace.popOver.mode)}</Typography>
          <MySwitcher isDarkMode={theme === DARK} handleSwitchChange={handleSwitchChange} />
        </FlexContainer>
        <Typography variant="small">{translate(txKeys.mySpace.popOver.help)}</Typography>
      </SettingsContainer>
      <StyledDivider />
      <StyledLink onClick={handleLogoutClick}>
        <Typography variant="small" color="textPrimary" textTransform="capitalize">
          {translate(txKeys.mySpace.popOver.logout)}
        </Typography>
      </StyledLink>
    </PopUpContainer>
  );
};

export default PopUp;
