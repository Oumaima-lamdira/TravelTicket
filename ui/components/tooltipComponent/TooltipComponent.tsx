import { StyledToolTipContent } from "./TooltipComponent.style";

import { Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import type { FC } from "react";

interface TooltipProps {
  title: string;
  icon: string;
}

const TooltipComponent: FC<TooltipProps> = ({ title, icon }) => {
  return (
    <Tooltip title={title}>
      <StyledToolTipContent>
        <Image src={icon} alt="Info icon" width="20" height="20" />
        <Typography variant="micro" color="gray" textAlign="center">
          {title}
        </Typography>
      </StyledToolTipContent>
    </Tooltip>
  );
};

export default TooltipComponent;
