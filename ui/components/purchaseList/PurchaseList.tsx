"use client";
import React from "react";

import PurchaseItem from "~components/purchaseItem";
import { usePurchasesQuery } from "~hooks/purchases";
import { useRedux } from "~hooks/redux/useRedux";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import type { PurchaseResponse } from "~services/purchases/types";
import { updateView } from "~store/view/change";
import { viewSelector } from "~store/view/selectors";

import { StyledContainer, StyledText, StyledWrapper } from "./PurchaseList.style";

import { LinearProgress } from "@mui/material";
import type { FC } from "react";

const PurchaseList: FC = () => {
  const translate = useTranslation();
  const { loading, purchases } = usePurchasesQuery();
  const [view] = useRedux(viewSelector, updateView);

  if (loading) return <LinearProgress />;

  return (
    <StyledWrapper>
      <StyledText>{translate(txKeys.mySpace.Purchases.title)}</StyledText>
      <StyledContainer view={view}>
        {purchases.length > 0 ? (
          purchases.map((purchase: PurchaseResponse, index: number) => {
            return <PurchaseItem key={index} purchase={purchase} />;
          })
        ) : (
          <StyledText>{translate(txKeys.mySpace.Purchases.noPurchases)}</StyledText>
        )}
      </StyledContainer>
    </StyledWrapper>
  );
};

export default PurchaseList;
