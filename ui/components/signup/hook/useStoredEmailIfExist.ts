import { USER_EMAIL } from "~components/myPopOver/constants";
import { getFromLocalStorage } from "~utils/localStorage";

import { useSearchParams } from "next/navigation";

export const useStoredEmailIfExist = (): string => {
  const searchParams = useSearchParams();
  if (searchParams !== null && searchParams.has("prefilled")) return getFromLocalStorage(USER_EMAIL);
  return "";
};
