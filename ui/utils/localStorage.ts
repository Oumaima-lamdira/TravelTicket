export const setToLocalStorage = (key: string, value: string): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  localStorage.setItem(key, value);
  return true;
};
export const getFromLocalStorage = (key: string): string => {
  if (typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key) ?? "";
};
export const deleteFromLocalStorage = (key: string): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  localStorage.removeItem(key);
  return true;
};
export const clearLocalStorage = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  localStorage.clear();
  return true;
};
