import { useAppDispatch, useAppSelector } from "~store";
import type { RootState } from "~store/types";

import type { AnyAction } from "@reduxjs/toolkit";

export const useRedux = <TState, TPayload>(
  selector: (state: RootState) => TState,
  actionCreator: (payload: TPayload) => AnyAction,
): [TState, (payload: TPayload) => void] => {
  const selectedState = useAppSelector(selector);

  const dispatch = useAppDispatch();
  const dispatchAction = (payload: TPayload) => dispatch(actionCreator(payload));

  return [selectedState, dispatchAction];
};
