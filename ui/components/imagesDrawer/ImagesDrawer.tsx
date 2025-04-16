import { Fragment, useState } from "react";

import CloseButton from "~components/closeButton";
import { StyledDrawer } from "~components/drawer/Drawer.style";
import FileUploader from "~components/fileUploder";
import PrimaryButton from "~components/primaryButton";
import SecondaryButton from "~components/secondaryButton";
import TooltipComponent from "~components/tooltipComponent";
import { useRedux } from "~hooks/redux/useRedux";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import imagesPath from "~public/assets/styles/imagesPath";
import { updateDrawerState } from "~store/drawer/Drawer";
import { drawerSelector } from "~store/drawer/selectors";

import {
  StyledButtonsWrapper,
  StyledContent,
  StyledDescription,
  StyledImagesContainer,
  StyledTitle,
} from "./ImagesDrawer.style";

import { Drawer as MuiDrawer } from "@mui/material";
import type { FC } from "react";

interface ImagesDrawerProps {
  handleUpdateImages: (images: string[]) => void;
  title: string;
  description: string;
}

const ImagesDrawer: FC<ImagesDrawerProps> = ({ title, description, handleUpdateImages }) => {
  const translate = useTranslation();
  const [drawerState, setDrawerState] = useRedux(drawerSelector, updateDrawerState);
  const [images, setImages] = useState<string[]>([]);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerState(open);
    if (!open && images.length > 0) handleUpdateImages(images);
  };

  const handleImageUpload = (url: string) => {
    setImages((prevImages) => [...prevImages, url]);
  };

  return (
    <Fragment>
      <SecondaryButton onClick={toggleDrawer(true)} text={translate(txKeys.mySpace.Purchases.addPhoto)} />
      <MuiDrawer anchor="right" open={drawerState}>
        <StyledDrawer>
          <CloseButton close={toggleDrawer(false)} />
          <StyledContent>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>

            <StyledImagesContainer>
              {Array.from({ length: 6 }).map((_, index) => (
                <FileUploader key={index} handleImageUpload={handleImageUpload} />
              ))}
            </StyledImagesContainer>

            <TooltipComponent title={translate(txKeys.mySpace.Purchases.size)} icon={imagesPath.info} />
            <StyledButtonsWrapper>
              <SecondaryButton onClick={toggleDrawer(false)} text={translate(txKeys.mySpace.Purchases.back)} />
              <PrimaryButton onClick={toggleDrawer(false)} text={translate(txKeys.mySpace.Purchases.done)} />
            </StyledButtonsWrapper>
          </StyledContent>
        </StyledDrawer>
      </MuiDrawer>
    </Fragment>
  );
};

export default ImagesDrawer;
