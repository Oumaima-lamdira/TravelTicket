import type { PurchaseResponse } from "~services/purchases/types";

import { StyledCard, StyledColumn, StyledLabel, StyledValue } from "./CardInfos.style";

import type { FC } from "react";

const CardInfos: FC<{ purchase: PurchaseResponse }> = ({ purchase }) => {
  const includedKeys: string[] = ["brand", "model", "price", "store", "date"];

  return (
    <StyledCard className="mt-2 mb-2">
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(purchase)
          .filter(([key]) => includedKeys.includes(key))
          .map(([key, value]) => (
            <StyledColumn key={key}>
              <StyledLabel>{key}</StyledLabel>
              <StyledValue>{key === "price" ? `${String(value)} DH` : value}</StyledValue>
            </StyledColumn>
          ))}
      </div>
    </StyledCard>
  );
};

export default CardInfos;
