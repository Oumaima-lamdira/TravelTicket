import { type FC, useState } from "react";

import { useUpdatePurchase } from "~hooks/purchases/usePurchaseMutation";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import type { PurchaseResponse } from "~services/purchases/types";

import { StyledRatingCard } from "./RatingCard.style";

import { Rating, Typography } from "@mui/material";
interface RatingCardProps {
  purchase: PurchaseResponse;
}
const RatingCard: FC<RatingCardProps> = ({ purchase }) => {
  const translate = useTranslation();
  const [rating, setRating] = useState(purchase.rating);
  const { mutate: updatePurchase } = useUpdatePurchase();

  const handleRating = (newValue: number) => {
    updatePurchase({ purchaseId: purchase.id, rating: newValue });
    setRating(newValue);
  };

  return (
    <StyledRatingCard>
      <Typography variant="micro" fontWeight="bold">
        {translate(txKeys.mySpace.productDetails.Review)}
      </Typography>
      <div className="flex justify-between items-center">
        <Typography variant="bodyMediumBold" fontWeight="bold">
          {translate(txKeys.mySpace.productDetails.title)}
        </Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(_event, newValue) => {
            handleRating(Number(newValue));
          }}
        />
      </div>
      <Typography variant="bodySmall" fontWeight="bold" color="#646464">
        {translate(txKeys.mySpace.productDetails.description)}
      </Typography>
    </StyledRatingCard>
  );
};

export default RatingCard;
