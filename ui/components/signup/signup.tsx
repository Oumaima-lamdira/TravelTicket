"use client";
import { type FC, useState } from "react";

import LazyImage from "~components/lazyImage";
import PrimaryButton from "~components/primaryButton";
import type { SignupRequest } from "~components/signinForm/types";
import TextInput from "~components/textInput";
import { ROUTES } from "~helpers/routes";
import useSignUp from "~hooks/signup/useSignUpMutation";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import imagesPath from "~public/assets/styles/imagesPath";

import { StyledForm, StyledInputs, StyledLink } from "./signup.style";
import { SignupSchema } from "./types";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircularProgress, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const Signup: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const translate = useTranslation();

  const { control, getValues } = useForm<SignupRequest>({
    mode: "onChange",
    resolver: zodResolver(SignupSchema),
  });

  const { isLoading, mutate: signMeUp } = useSignUp();

  const handleSubmitClick = () => {
    signMeUp(getValues());
  };

  return (
    <StyledForm>
      <StyledLink href={{ pathname: ROUTES.HOME }}>
        <LazyImage src={imagesPath.backIcon} alt={translate(txKeys.SignIn.backIconAltText)} width={15} height={15} />
        <Typography variant="h6" color="white">
          {translate(txKeys.SignIn.back)}
        </Typography>
      </StyledLink>

      <LazyImage
        src={imagesPath.logoNimbleways}
        loading="eager"
        alt={translate(txKeys.home.logoAltText)}
        width={300}
        height={300}
      />

      <Typography variant="h3" color="white" fontWeight="bold">
        {translate(txKeys.Signup.welcome)}
      </Typography>

      <StyledInputs>
        <Controller
          name="nom"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label={translate(txKeys.Signup.name)}
              value={field.value}
              onChange={field.onChange}
              helperText={fieldState.error?.message}
              error={fieldState.invalid}
            />
          )}
        />
        <Controller
          name="prenom"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label={translate(txKeys.Signup.prenom)}
              value={field.value}
              onChange={field.onChange}
              helperText={fieldState.error?.message}
              error={fieldState.invalid}
            />
          )}
        />
        <Controller
          name="telephone"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label={translate(txKeys.Signup.tel)}
              type="tel"
              value={field.value}
              onChange={field.onChange}
              helperText={fieldState.error?.message}
              error={fieldState.invalid}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label={translate(txKeys.Signup.loginInput)}
              value={field.value}
              onChange={field.onChange}
              helperText={fieldState.error?.message}
              error={fieldState.invalid}
            />
          )}
        />
        <Controller
          name="motDePasse"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label={translate(txKeys.Signup.passInput)}
              type={showPassword ? "text" : "password"}
              value={field.value}
              onChange={field.onChange}
              helperText={fieldState.error?.message}
              error={fieldState.invalid}
              InputProps={{
                endAdornment: (
                  <LazyImage
                    src={imagesPath.eyeIcon}
                    alt={translate(txKeys.SignIn.eyeIconAltText)}
                    width={15}
                    height={15}
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ),
              }}
            />
          )}
        />
        {isLoading && <CircularProgress size={24} />}
        <PrimaryButton text={translate(txKeys.Signup.SignIn)} onClick={handleSubmitClick}></PrimaryButton>
      </StyledInputs>
    </StyledForm>
  );
};

export default Signup;
