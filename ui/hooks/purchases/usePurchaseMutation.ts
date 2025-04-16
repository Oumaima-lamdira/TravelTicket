import type BaseError from "~errors/BaseError";
import purchaseService from "~services/purchases/purchase.service";
import type { PurchaseRatingRequest, PurchaseRequest, PurchaseResponse } from "~services/purchases/types";

import { SAVE_PURCHASE_KEY, UPDATE_PURCHASE_KEY } from "./keys";

import type { UseMutateFunction } from "react-query";
import { useMutation } from "react-query";
interface IPurchaseMutation<TRequest> {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: BaseError | null;
  purchase: PurchaseResponse | undefined;
  mutate: UseMutateFunction<PurchaseResponse, BaseError, TRequest>;
}

export const useSavePurchase = (): IPurchaseMutation<PurchaseRequest> => {
  const {
    error,
    mutate,
    data: purchase,
    isLoading,
    isSuccess,
    isError,
  } = useMutation<PurchaseResponse, BaseError, PurchaseRequest>(SAVE_PURCHASE_KEY, purchaseService.savePurchase);

  return { isLoading, isSuccess, isError, error, purchase, mutate };
};

export const useUpdatePurchase = (): IPurchaseMutation<PurchaseRatingRequest> => {
  const {
    error,
    mutate,
    data: purchase,
    isLoading,
    isSuccess,
    isError,
  } = useMutation<PurchaseResponse, BaseError, PurchaseRatingRequest>(
    UPDATE_PURCHASE_KEY,
    purchaseService.updatePurchase,
  );

  return { isLoading, isSuccess, isError, error, purchase, mutate };
};
