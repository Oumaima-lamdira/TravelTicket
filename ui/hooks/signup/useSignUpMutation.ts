import { USER_FULLNAME } from "~components/myPopOver/constants";
import type { SignupRequest } from "~components/signinForm/types";
import type BaseError from "~errors/BaseError";
import { ROUTES } from "~helpers/routes";
import signup from "~services/signup/signup.service";
import { setToLocalStorage } from "~utils/localStorage";
import { enqueueSnackbar } from "~utils/notistackRef";

import { useRouter } from "next/navigation";
import type { UseMutateFunction } from "react-query";
import { useMutation } from "react-query";

interface ILoginMutation {
  isLoading: boolean;
  mutate: UseMutateFunction<unknown, BaseError, SignupRequest>;
}

const useSignUp = (): ILoginMutation => {
  const router = useRouter();

  const { isLoading, mutate } = useMutation<unknown, BaseError, SignupRequest>(signup, {
    onSuccess: (_data) => {
      setToLocalStorage(USER_FULLNAME, "USER");
      router.replace(ROUTES.MY_SPACE);
    },
    onError: (error) => {
      enqueueSnackbar("error", error.message);
    },
  });

  return { isLoading, mutate };
};

export default useSignUp;
