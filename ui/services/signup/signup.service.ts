import type { LoginRequest, SignupRequest } from "~components/signinForm/types";
import apiClient from "~utils/axiosApiClient";

const signup = async (signupRequest: SignupRequest): Promise<unknown> => {
  const response = await apiClient.post<unknown, LoginRequest>(`/addUser`, signupRequest);

  return response;
};

export default signup;
