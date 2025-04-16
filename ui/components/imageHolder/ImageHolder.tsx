import DownloadImageIcon from "~components/downloadImage";
import FullImage from "~components/fullImage/FullImage";
import RemoveImageIcon from "~components/removeImage";
import imagesPath from "~public/assets/styles/imagesPath";

import { Container, HoveredImage, IconsWrapper, StyledImageHolder } from "./ImageHolder.style";

import type { FC } from "react";

interface ImageHolderProps {
  imgUrl: string | undefined;
  handleRemoveImage: () => void;
}

const ImageHolder: FC<ImageHolderProps> = ({ imgUrl, handleRemoveImage }) => {
  return (
    <Container>
      <StyledImageHolder>
        <HoveredImage src={imgUrl ?? imagesPath.darkAddIcon} alt="Image" fill />
        <IconsWrapper>
          <RemoveImageIcon handleRemoveImage={handleRemoveImage} />
          <FullImage imgUrl={imgUrl} />
          <DownloadImageIcon imgUrl={imgUrl} />
        </IconsWrapper>
      </StyledImageHolder>
    </Container>
  );
};

export default ImageHolder;
