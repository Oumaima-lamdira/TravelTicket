import LazyImage from "~components/lazyImage/LazyImage";
import imagesPath from "~public/assets/styles/imagesPath";

import Link from "next/link";
import type { FC } from "react";

const DownloadImage: FC<{ imgUrl: string | undefined }> = ({ imgUrl = "" }) => {
  return (
    <Link href={imgUrl} className="cursor-pointer" target="_blank" download={imgUrl}>
      <LazyImage src={imagesPath.download} alt="download" width={20} height={20} />
    </Link>
  );
};

export default DownloadImage;
