"use client";
import { type FC, useState } from "react";

import LazyImage from "~components/lazyImage";
import PrimaryButton from "~components/primaryButton";
import SecondaryButton from "~components/secondaryButton";
import TextInput from "~components/textInput";
import { voidFn } from "~helpers/helpers";
import { ROUTES } from "~helpers/routes";
import useLogin from "~hooks/signin/useLoginMutation";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import imagesPath from "~public/assets/styles/imagesPath";

import { useStoredEmailIfExist } from "./hook/useStoredEmailIfExist";
import { StyledForm, StyledInputs, StyledLink } from "./SigninForm.style";
import type { LoginRequest } from "./types";
import { LoginRequestSchema } from "./types";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircularProgress, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const SigninForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const translate = useTranslation();

  const { control, getValues } = useForm<LoginRequest>({
    mode: "onChange",
    defaultValues: {
      email: useStoredEmailIfExist(),
      motDePasse: "",
    },
    resolver: zodResolver(LoginRequestSchema),
  });

  const { isLoading, mutate: login } = useLogin();

  const handleSubmitClick = () => {
    const { email, motDePasse } = getValues();
    login({ email, motDePasse });
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
        {translate(txKeys.SignIn.welcome)}
      </Typography>

      <StyledInputs>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label={translate(txKeys.SignIn.loginInput)}
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
              label={translate(txKeys.SignIn.passInput)}
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
        <PrimaryButton text={translate(txKeys.SignIn.SignIn)} onClick={handleSubmitClick}></PrimaryButton>
        <SecondaryButton text={translate(txKeys.SignIn.withGoogle)} onClick={voidFn}></SecondaryButton>
        <SecondaryButton text={translate(txKeys.SignIn.withApple)} onClick={voidFn}></SecondaryButton>
      </StyledInputs>
    </StyledForm>
  );
};

export default SigninForm;
