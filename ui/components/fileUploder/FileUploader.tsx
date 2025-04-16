import React, { useState } from "react";

import ImageHolder from "~components/imageHolder";
import LazyImage from "~components/lazyImage/LazyImage";
import imagesPath from "~public/assets/styles/imagesPath";

import { ALLOWED_FORMATS, MAX_SIZE } from "./constants";
import { StyledUploadIconContainer } from "./FileUploader.style";

import type { CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import type { FC } from "react";

interface FileUploaderProps {
  handleImageUpload: (url: string) => void;
}

const FileUploader: FC<FileUploaderProps> = ({ handleImageUpload }) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleFileLoad = ({ info }: CloudinaryUploadWidgetResults): void => {
    const secureUrl = (info as CloudinaryUploadWidgetInfo).secure_url;
    setImageUrl(secureUrl);
    handleImageUpload(secureUrl);
  };

  const handleRemoveImage = () => {
    setImageUrl("");
    handleImageUpload("");
  };

  return (
    <>
      {imageUrl === "" ? (
        <CldUploadButton
          className="dropbox"
          uploadPreset="next_nw"
          onSuccess={handleFileLoad}
          options={{
            maxFileSize: MAX_SIZE,
            maxFiles: 1,
            clientAllowedFormats: ALLOWED_FORMATS,
          }}
        >
          <StyledUploadIconContainer className="dropbox cursor-pointer">
            <LazyImage src={imagesPath.darkAddIcon} alt="upload icon" width={25} height={25} />
          </StyledUploadIconContainer>
        </CldUploadButton>
      ) : (
        <ImageHolder imgUrl={imageUrl} handleRemoveImage={handleRemoveImage} />
      )}
    </>
  );
};

export default FileUploader;
