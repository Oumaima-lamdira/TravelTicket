import { type FC, Fragment } from "react";

import CardInfos from "~components/cardInfos";
import CloseButton from "~components/closeButton";
import ImageHolder from "~components/imageHolder/ImageHolder";
import RatingCard from "~components/ratingCard/RatingCard";
import { voidFn } from "~helpers/helpers";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import imagesPath from "~public/assets/styles/imagesPath";
import type { PurchaseResponse } from "~services/purchases/types";

import { StyledDrawerDetailsContent, StyledStatus } from "./ProductDetailsDrawer.style";

import { Drawer, Typography } from "@mui/material";
import Image from "next/image";

interface ProductDetailsDrawerProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
  purchase: PurchaseResponse;
}
const ProductDetailsDrawer: FC<ProductDetailsDrawerProps> = ({ purchase, open, toggleDrawer }) => {
  const translate = useTranslation();

  return (
    <Fragment>
      <Drawer anchor="right" open={open}>
        <CloseButton
          close={() => {
            toggleDrawer(false);
          }}
        />
        <StyledDrawerDetailsContent>
          <StyledStatus>
            <Image src={imagesPath.greyCheck} alt="checked" width={15} height={15} />
            {purchase.status}
          </StyledStatus>
          <Typography variant="h2" fontWeight="bold">
            {purchase.label}
          </Typography>
          <CardInfos purchase={purchase} />
          <Typography variant="micro" fontWeight="bold">
            {translate(txKeys.mySpace.Purchases.invoice)}
          </Typography>
          <div className="grid grid-cols-2 gap-5">
            {purchase.images.map((image, index) => (
              <ImageHolder key={index} imgUrl={image} handleRemoveImage={voidFn} />
            ))}
          </div>

          <RatingCard purchase={purchase} />
        </StyledDrawerDetailsContent>
      </Drawer>
    </Fragment>
  );
};

export default ProductDetailsDrawer;
