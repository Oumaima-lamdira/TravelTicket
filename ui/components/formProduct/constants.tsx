import { USER_ID } from "~components/myPopOver/constants";
import type { PurchaseRequest } from "~services/purchases/types";
import { getFromLocalStorage } from "~utils/localStorage";

export const EMPTY_PURCHASE: PurchaseRequest = {
  brand: "",
  model: "",
  owner: getFromLocalStorage(USER_ID),
  price: 0,
  store: "",
  images: [],
  label: "",
};

export const MENU_ITEMS = [
  { value: "item 1", label: "Item 1" },
  { value: "item 2", label: "Item 2" },
  { value: "item 3", label: "Item 3" },
  { value: "item 4", label: "Item 4" },
  { value: "item 5", label: "Item 5" },
];
