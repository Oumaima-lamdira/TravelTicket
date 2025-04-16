import "yet-another-react-lightbox/styles.css";

import { type FC, useState } from "react";

import LazyImage from "~components/lazyImage";
import imagesPath from "~public/assets/styles/imagesPath";

import Lightbox from "yet-another-react-lightbox";

const FullImage: FC<{ imgUrl: string | undefined }> = ({ imgUrl }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <LazyImage
        src={imagesPath.full}
        alt="full"
        width={20}
        height={20}
        onClick={() => {
          setOpen(true);
        }}
      />
      <Lightbox
        open={open}
        close={() => {
          setOpen(false);
        }}
        slides={[{ src: imgUrl ?? imagesPath.darkAddIcon }]}
        noScroll={{ disabled: true }}
        carousel={{
          finite: true,
        }}
      />
    </>
  );
};

export default FullImage;
