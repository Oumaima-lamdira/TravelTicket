import { useEffect, useState } from "react";

import { USER_FULLNAME } from "~components/myPopOver/constants";

import { lastLoggedInUserSchema, type LastLoggedInUserType } from "./types";

const useLastConnectedUser = (): LastLoggedInUserType | null => {
  const [user, setUser] = useState<LastLoggedInUserType | null>(null);

  useEffect(() => {
    const storedFullName = localStorage.getItem(USER_FULLNAME);

    if (storedFullName !== null) {
      try {
        const userFullName: LastLoggedInUserType = {
          firstName: storedFullName.split(" ")[0] ?? "",
          lastName: storedFullName.split(" ")[1] ?? "",
        };
        const parsedFullName = lastLoggedInUserSchema.parse(userFullName);

        setUser(parsedFullName);
      } catch (error) {
        throw new Error(String(error));
      }
    }
  }, []);

  return user;
};

export default useLastConnectedUser;
