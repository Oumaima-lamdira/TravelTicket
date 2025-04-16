"use client";

import LazyImage from "~components/lazyImage";
import { useRedux } from "~hooks/redux/useRedux";
import { viewTypes } from "~store/types";
import { updateView } from "~store/view/change";
import { viewSelector } from "~store/view/selectors";

import { useIcons } from "./useIcons";
import { StyledContainer } from "./ViewConfigs.style";

import type { FC } from "react";
const ViewConfigs: FC = () => {
  const [, setView] = useRedux(viewSelector, updateView);

  const { gridIcon, listIcon } = useIcons();

  const handleViewChange = (type: viewTypes) => {
    setView(type);
  };

  return (
    <StyledContainer>
      <div className="flex gap-4">
        <LazyImage
          src={gridIcon}
          alt={viewTypes.GRID}
          width={15}
          height={15}
          onClick={() => {
            handleViewChange(viewTypes.GRID);
          }}
        />
        <LazyImage
          src={listIcon}
          alt={viewTypes.LIST}
          width={15}
          height={15}
          onClick={() => {
            handleViewChange(viewTypes.LIST);
          }}
        />
      </div>
    </StyledContainer>
  );
};

export default ViewConfigs;
