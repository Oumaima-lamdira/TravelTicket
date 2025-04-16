import { type FC, useState } from "react";

import LazyImage from "~components/lazyImage";
import ProductDetailsDrawer from "~components/ProductDetailsDrawer";
import { useUpdatePurchase } from "~hooks/purchases/usePurchaseMutation";
import { useRedux } from "~hooks/redux/useRedux";
import imagesPath from "~public/assets/styles/imagesPath";
import type { PurchaseResponse } from "~services/purchases/types";
import { updateView } from "~store/view/change";
import { viewSelector } from "~store/view/selectors";

import {
  StyledContainer,
  StyledDivContent,
  StyledFlexBoxContent,
  StyledHoveredText,
  StyledImage,
  StyledImageWrapper,
  StyledPurchasedContainer,
  StyledPurchasedStatus,
  StyledRating,
} from "./PurchaseItem.style";

import { Rating, Typography } from "@mui/material";

interface PurchaseItemProps {
  purchase: PurchaseResponse;
}

const PurchaseItem: FC<PurchaseItemProps> = ({ purchase }) => {
  const [view] = useRedux(viewSelector, updateView);
  const [drawerState, setDrawerState] = useState(false);
  const { mutate: updatePurchase } = useUpdatePurchase();
  const [rating, setRating] = useState(purchase.rating);

  const handleRating = (newValue: number) => {
    updatePurchase({ purchaseId: purchase.id, rating: newValue });
    setRating(newValue);
  };

  return (
    <>
      <ProductDetailsDrawer purchase={purchase} open={drawerState} toggleDrawer={setDrawerState} />
      <StyledFlexBoxContent
        className={view}
        onClick={() => {
          setDrawerState(true);
        }}
      >
        <StyledContainer className={view}>
          <StyledImageWrapper className={view}>
            <StyledImage src={purchase.images[0] ?? imagesPath.info} alt={purchase.label} fill />
            <StyledHoveredText className={view}>+{purchase.images.length}</StyledHoveredText>
          </StyledImageWrapper>
          <StyledDivContent className={view} id="TextInGridMode">
            <Typography variant={view === "GRID" ? "lead" : "smallBold"} color="textPrimary">
              {`${purchase.brand} ${purchase.model}`}
            </Typography>
            <Typography variant="subtitle1" color="gray">
              {purchase.price} DH
            </Typography>
          </StyledDivContent>
        </StyledContainer>
        <StyledRating className={view}>
          <Rating
            id="rating"
            name="simple-controlled"
            value={rating}
            onChange={(_event, newValue) => {
              handleRating(Number(newValue));
            }}
          />
          <StyledPurchasedContainer>
            <StyledPurchasedStatus className={view}>{purchase.status}</StyledPurchasedStatus>
            {view === "GRID" && (
              <LazyImage
                src={imagesPath.arrowIcon}
                alt="arrow icon"
                width={30}
                height={30}
                onClick={() => {
                  setDrawerState(true);
                }}
              />
            )}
          </StyledPurchasedContainer>
        </StyledRating>
      </StyledFlexBoxContent>
    </>
  );
};

export default PurchaseItem;
