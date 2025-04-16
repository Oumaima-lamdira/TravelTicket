import React from "react";

import { StyledContainer } from "~components/avatar/Avatar.style";
import ImageHolder from "~components/imageHolder";
import ImagesDrawer from "~components/imagesDrawer/ImagesDrawer";
import LazyImage from "~components/lazyImage/LazyImage";
import PrimaryButton from "~components/primaryButton";
import SecondaryButton from "~components/secondaryButton";
import SelectInput from "~components/selectInput";
import TextInput from "~components/textInput";
import TooltipComponent from "~components/tooltipComponent/TooltipComponent";
import { voidFn } from "~helpers/helpers";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import imagesPath from "~public/assets/styles/imagesPath";
import type { PurchaseRequest } from "~services/purchases/types";

import type { SelectChangeEvent } from "@mui/material";
import { Typography } from "@mui/material";
import type { ChangeEvent } from "react";

interface FormProductAdditionProps {
  purchase: PurchaseRequest;
  handleChange: (event: SelectChangeEvent) => void;
  handleCancelClick: () => void;
  handleConfirmClick: () => void;
  handleMultipleImagesUpload: (urlsImages: string[]) => void;
}

const FormProductAddition: React.FC<FormProductAdditionProps> = ({
  purchase,
  handleChange,
  handleCancelClick,
  handleConfirmClick,
  handleMultipleImagesUpload,
}) => {
  const translate = useTranslation();

  const selectOptions = [
    { label: translate(txKeys.mySpace.Purchases.brand), name: "brand", value: purchase.brand },
    { label: translate(txKeys.mySpace.Purchases.Model), name: "model", value: purchase.model },
    { label: translate(txKeys.mySpace.Purchases.Store), name: "store", value: purchase.store },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-6x">
      {selectOptions.map((select) => (
        <SelectInput key={select.name} select={select} handleChange={handleChange} />
      ))}

      <TextInput
        id="price"
        label={translate(txKeys.mySpace.Purchases.price)}
        name="price"
        type="number"
        placeholder={translate(txKeys.mySpace.Purchases.price)}
        value={purchase.price}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          handleChange(event);
        }}
        InputProps={{
          endAdornment: <LazyImage src={imagesPath.priceIcon} alt="banknote" width={20} height={20} />,
        }}
      />

      <Typography variant="smallBold">{translate(txKeys.mySpace.Purchases.invoice)}</Typography>
      {purchase.images.length > 0 && (
        <StyledContainer>
          <ImageHolder imgUrl={purchase.images[0]} handleRemoveImage={voidFn} />
        </StyledContainer>
      )}

      <ImagesDrawer
        title={translate(txKeys.mySpace.drawer.title)}
        description={translate(txKeys.mySpace.drawer.description)}
        handleUpdateImages={handleMultipleImagesUpload}
      />

      <TooltipComponent title={translate(txKeys.mySpace.Purchases.info)} icon={imagesPath.info} />

      <div className="flex gap-4 md:gap-6x justify-between">
        <div className="w-1/4">
          <SecondaryButton text={translate(txKeys.mySpace.Purchases.cancel)} onClick={handleCancelClick} />
        </div>

        <div className="w-3/4 pr-8">
          <PrimaryButton text={translate(txKeys.mySpace.Purchases.Confirm)} onClick={handleConfirmClick} />
        </div>
      </div>
    </div>
  );
};

export default FormProductAddition;
