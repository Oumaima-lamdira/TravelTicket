import { USER_FULLNAME } from "~components/myPopOver/constants";
import { getFromLocalStorage } from "~utils/localStorage";

export const voidFn = (): void => undefined;

export const getLastConnectedUserFullName = (): { firstName: string; lastName: string } | null => {
  const storedFullName: string = getFromLocalStorage(USER_FULLNAME);
  if (storedFullName === "") return null;
  const [firstName = "", lastName = ""] = storedFullName.split(" ");
  return { firstName, lastName };
};

export const getInitials = (): string => {
  const fullName = getLastConnectedUserFullName();
  if (fullName === null) return "";
  return `${fullName.firstName.charAt(0)}${fullName.lastName.charAt(0)}`;
};
