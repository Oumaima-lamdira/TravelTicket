"use client";

import LazyImage from "~components/lazyImage/LazyImage";
import PrimaryButton from "~components/primaryButton/PrimaryButton";
import SecondaryButton from "~components/secondaryButton/SecondaryButton";
import { ROUTES } from "~helpers/routes";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import imagesPath from "~public/assets/styles/imagesPath";

import { Background, ButtonWrapper, HeadlinesContainer } from "./Home.style";

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();
  const translate = useTranslation();

  const handleJoinClick = () => {
    router.push(ROUTES.SIGN_UP);
  };
  const handleBookClick = () => {
    router.push(ROUTES.MY_SPACE);
  };
  const handleSigninClick = () => {
    router.push(ROUTES.SIGN_IN);
  };

  return (
    <Background className="background">
      {/* <ContinueAs /> */}
      <LazyImage
        src={imagesPath.logoNimbleways}
        alt={translate(txKeys.home.logoAltText)}
        width={300}
        height={300}
        loading="eager"
      />

      <HeadlinesContainer>
        <Typography variant="megaTitle" color="white">
          {translate(txKeys.home.title)}
        </Typography>
        <Typography variant="body1" color="white">
          {translate(txKeys.home.description)}
        </Typography>
        <ButtonWrapper>
          <SecondaryButton onClick={handleJoinClick} text={translate(txKeys.home.join)} />
          <PrimaryButton onClick={handleSigninClick} text={translate(txKeys.home.SignIn)} />
          <PrimaryButton onClick={handleBookClick} text={translate(txKeys.home.Book)} />
        </ButtonWrapper>
      </HeadlinesContainer>
    </Background>
  );
};
export default Home;
