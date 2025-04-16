import type { LoginRequest } from "~components/signinForm/types";
import apiClient from "~utils/axiosApiClient";

const signIn = async (loginRequest: LoginRequest): Promise<unknown> => {
  const response = await apiClient.post<unknown, LoginRequest>(`/login`, loginRequest);

  return response;
};

export default signIn;
