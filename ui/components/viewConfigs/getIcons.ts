import imagesPath from "~public/assets/styles/imagesPath";

export const getIcons = (mode: string, viewMode: string): { GridIcon: string; ListIcon: string } => {
  let GridIcon = imagesPath.layoutLight;
  let ListIcon = imagesPath.ListLight;
  if (mode === "dark") {
    GridIcon = viewMode === "GRID" ? imagesPath.layoutDarkActive : imagesPath.layoutDarkInactive;
    ListIcon = viewMode === "LIST" ? imagesPath.ListDarkActive : imagesPath.ListDarkInactive;
  }
  return { GridIcon, ListIcon };
};
