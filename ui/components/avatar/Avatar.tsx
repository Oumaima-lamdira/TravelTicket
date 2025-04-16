"use client";
import { useState } from "react";

import PopUp from "~components/myPopOver/MyPopOver";

import { StyledAvatar, StyledContainer, StyledWrapper } from "./Avatar.style";

import type { FC } from "react";

const Avatar: FC = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  const handleAvatarClick = () => {
    setPopUpOpen(!isPopUpOpen);
  };

  const handleClosePopUp = () => {
    setPopUpOpen(false);
  };

  return (
    <StyledContainer>
      <StyledAvatar className="Avatar" onClick={handleAvatarClick}>
        AO
      </StyledAvatar>
      <StyledWrapper
        open={isPopUpOpen}
        onClose={handleClosePopUp}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <PopUp />
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Avatar;
