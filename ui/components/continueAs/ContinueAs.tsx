import LazyImage from "~components/lazyImage/LazyImage";
import { getLastConnectedUserFullName } from "~helpers/helpers";
import { ROUTES } from "~helpers/routes";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import imagesPath from "~public/assets/styles/imagesPath";

import { StyledContinueAs, StyledContinueAsText, StyledFullName } from "./ContinueAs.style";

import Link from "next/link";
import type { FC } from "react";

const ContinueAs: FC = () => {
  const translate = useTranslation();
  const fullName = getLastConnectedUserFullName();

  return (
    <>
      {fullName !== null && (
        <StyledContinueAs>
          <LazyImage
            src={imagesPath.userIcon}
            alt={translate(txKeys.home.userIconAltText)}
            width={20}
            height={20}
            loading="eager"
          />
          <StyledContinueAsText>{translate(txKeys.home.continueAs)}</StyledContinueAsText>
          <Link href={{ pathname: ROUTES.SIGN_IN, query: { prefilled: "true" } }}>
            <StyledFullName>{`${fullName.firstName} ${fullName.lastName}`}</StyledFullName>
          </Link>
        </StyledContinueAs>
      )}
    </>
  );
};

export default ContinueAs;
