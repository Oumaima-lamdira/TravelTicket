import { useRedux } from "~hooks/redux/useRedux";
import imagesPath from "~public/assets/styles/imagesPath";
import { themeSelector } from "~store/theme/selectors";
import { DARK, updateTheme } from "~store/theme/Theme";
import { updateView } from "~store/view/change";
import { viewSelector } from "~store/view/selectors";

export const useIcons = (): { gridIcon: string; listIcon: string } => {
  const [theme] = useRedux(themeSelector, updateTheme);
  const [view] = useRedux(viewSelector, updateView);
  let gridIcon = imagesPath.layoutLight;
  let listIcon = imagesPath.ListLight;
  if (theme === DARK) {
    gridIcon = view === "GRID" ? imagesPath.layoutDarkActive : imagesPath.layoutDarkInactive;
    listIcon = view === "LIST" ? imagesPath.ListDarkActive : imagesPath.ListDarkInactive;
  }
  return { gridIcon, listIcon };
};
