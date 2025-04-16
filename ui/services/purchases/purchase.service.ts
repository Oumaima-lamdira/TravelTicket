import { USER_ID } from "~components/myPopOver/constants";
import apiClient from "~utils/axiosApiClient";
import { getFromLocalStorage } from "~utils/localStorage";

import type { TrajetRequest, TrajetResponse } from "./types";
import {
  type PurchaseRatingRequest,
  type PurchaseRequest,
  type PurchaseResponse,
  purchaseResponseSchema,
} from "./types";

const getPurchases = async (): Promise<PurchaseResponse[]> => {
  const userId = getFromLocalStorage(USER_ID);
  const response = await apiClient.get<PurchaseResponse[]>(`/purchases?userId=${userId}`);
  const purchases = response.map((purchase) => purchaseResponseSchema.parse(purchase));
  return purchases;
};
export const searchTrajet = async (
  data: TrajetRequest,
  villeDepart: string,
  villeArrivee: string,
  date: string,
): Promise<TrajetResponse> => {
  const response = await apiClient.post<TrajetResponse, TrajetRequest>(
    `/api/trajets/horaires?villeDepart=${villeDepart}&villeArrivee=${villeArrivee}&date=${date}`,
    data,
  );
  return response;
};

const savePurchase = async (data: PurchaseRequest): Promise<PurchaseResponse> => {
  const response = await apiClient.post<PurchaseResponse, PurchaseRequest>("/purchases", data);
  const purchase = purchaseResponseSchema.parse(response);
  return purchase;
};
const updatePurchase = async (data: PurchaseRatingRequest): Promise<PurchaseResponse> => {
  const response = await apiClient.put<PurchaseResponse, PurchaseRatingRequest>("/purchases", data);
  const purchase = purchaseResponseSchema.parse(response);
  return purchase;
};
const exportedFunctions = { getPurchases, savePurchase, updatePurchase };
export default exportedFunctions;
