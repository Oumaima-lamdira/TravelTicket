import type BaseError from "~errors/BaseError";
import { purchasesService } from "~services/purchases";
import type { PurchaseResponse } from "~services/purchases/types";

import { GET_PURCHASES_KEY } from "./keys";

import { useQuery } from "react-query";

interface IPurchasesQuery {
  loading: boolean;
  error: BaseError | null;
  purchases: PurchaseResponse[];
}

const usePurchasesQuery = (): IPurchasesQuery => {
  let {
    isLoading: loading,
    data: purchases,
    error,
  } = useQuery<PurchaseResponse[], BaseError>(GET_PURCHASES_KEY, purchasesService.getPurchases);
  if (purchases === undefined) purchases = [];
  return { loading, error, purchases };
};

export default usePurchasesQuery;
