import { type FC, Fragment, useState } from "react";

import CloseButton from "~components/closeButton";
import FormProduct from "~components/formProduct";
import { EMPTY_PURCHASE } from "~components/formProduct/constants";
import LazyImage from "~components/lazyImage/LazyImage";
import { useSavePurchase } from "~hooks/purchases/usePurchaseMutation";
import { useRedux } from "~hooks/redux/useRedux";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import imagesPath from "~public/assets/styles/imagesPath";
import type { PurchaseRequest } from "~services/purchases/types";
import { updateDrawerState } from "~store/drawer/Drawer";
import { drawerSelector } from "~store/drawer/selectors";
import { themeSelector } from "~store/theme/selectors";
import { LIGHT, updateTheme } from "~store/theme/Theme";
import { enqueueSnackbar } from "~utils/notistackRef";

import { MainDrawer, StyledDrawer, StyledTitle } from "./Drawer.style";

import type { SelectChangeEvent } from "@mui/material";
import { CircularProgress, Drawer as MuiDrawer } from "@mui/material";

const Drawer: FC = () => {
  const [isSecondDrawerOpen] = useRedux(drawerSelector, updateDrawerState);
  const [theme] = useRedux(themeSelector, updateTheme);
  const [drawerState, setDrawerState] = useState(false);

  const translate = useTranslation();

  const [purchase, setPurchase] = useState(EMPTY_PURCHASE);
  const { isLoading, isSuccess, isError, error, mutate: addPurchase } = useSavePurchase();

  const handleChange = (event: SelectChangeEvent) => {
    setPurchase(
      (prevState) =>
        ({
          ...prevState,
          [event.target.name]: event.target.value,
        }) satisfies PurchaseRequest,
    );
  };

  const handleImagesUpload = (urlsImages: string[]) => {
    setPurchase((prevState) => ({
      ...prevState,
      images: urlsImages,
    }));
  };

  const handleConfirmClick = () => {
    addPurchase(purchase);
    if (isError) enqueueSnackbar("error", error?.message);
    if (isSuccess) {
      enqueueSnackbar("success", translate(txKeys.mySpace.Purchases.addPurchaseSuccess));
      setPurchase(EMPTY_PURCHASE);
      setDrawerState(false);
    }
  };

  const handleCancelClick = () => {
    setPurchase(EMPTY_PURCHASE);
    setDrawerState(false);
  };

  return (
    <Fragment>
      <LazyImage
        src={theme === LIGHT ? imagesPath.darkAddIcon : imagesPath.addIcon}
        alt="add icon"
        width={25}
        height={25}
        loading="eager"
        onClick={() => {
          setDrawerState(true);
        }}
      />
      <MuiDrawer anchor="right" open={drawerState}>
        <MainDrawer isSecondDrawerOpen={isSecondDrawerOpen}>
          <StyledDrawer>
            <CloseButton
              close={() => {
                setDrawerState(false);
              }}
            />
            <Fragment>
              <StyledTitle> {translate(txKeys.mySpace.title)} </StyledTitle>
              <FormProduct
                purchase={purchase}
                handleChange={handleChange}
                handleCancelClick={handleCancelClick}
                handleConfirmClick={handleConfirmClick}
                handleMultipleImagesUpload={handleImagesUpload}
              />
            </Fragment>
          </StyledDrawer>
        </MainDrawer>
      </MuiDrawer>
      {isLoading && <CircularProgress />}
    </Fragment>
  );
};

export default Drawer;
