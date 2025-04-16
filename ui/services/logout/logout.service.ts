import apiClient from "~utils/axiosApiClient";

import type { AxiosResponse } from "axios";

const logout = async (): Promise<Boolean> => {
  const response = await apiClient.post<AxiosResponse, unknown>(`/auth/logout`);
  if (response.status === 200) {
    return true;
  }
  return false;
};

export default logout;
