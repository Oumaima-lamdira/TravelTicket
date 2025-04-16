import { type FC, memo } from "react";

import LazyImage from "~components/lazyImage";
import imagesPath from "~public/assets/styles/imagesPath";

import { Avatar } from "@mui/material";
interface CloseButtonProps {
  close: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({ close }) => {
  return (
    <div className="flex justify-end">
      <Avatar className="h-25 w-25 cursor-pointer" onClick={close}>
        <LazyImage src={imagesPath.close} alt="close" width={20} height={20} loading="eager" onClick={close} />
      </Avatar>
    </div>
  );
};

export default memo(CloseButton);
