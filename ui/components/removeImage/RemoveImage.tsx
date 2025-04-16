import LazyImage from "~components/lazyImage";
import imagesPath from "~public/assets/styles/imagesPath";

import type { FC } from "react";

const RemoveImage: FC<{ handleRemoveImage: () => void }> = ({ handleRemoveImage }) => {
  return <LazyImage src={imagesPath.delete} alt="Close" width={20} height={20} onClick={handleRemoveImage} />;
};

export default RemoveImage;
