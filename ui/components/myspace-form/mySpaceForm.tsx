"use client";

import { useState } from "react";

import { ROUTES } from "~helpers/routes";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";

import { StyledBookingForm, StyledButton, StyledImageAuth, StyledInput } from "./mySpaceForm.style";

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import type { FC } from "react";

interface MySpaceFormProps {
  src: string;
}

const MySpaceForm: FC<MySpaceFormProps> = ({ src }) => {
  const translate = useTranslation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    villeDepart: "",
    villeArrivee: "",
    date: "",
    passengers: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);

    router.push(
      `${ROUTES.TRAINS}?from=${formData.villeDepart}&to=${formData.villeArrivee}&date=${formData.date}&passengers=${formData.passengers}`,
    );
  };

  return (
    <StyledImageAuth image={src}>
      <Typography variant="megaTitle" color="white" textAlign="center" paddingLeft={60}>
        {translate(txKeys.SignIn.welcome)}
      </Typography>
      <StyledBookingForm>
        <StyledInput name="villeDepart" placeholder="From" value={formData.villeDepart} onChange={handleInputChange} />
        <StyledInput name="villeArrivee" placeholder="To" value={formData.villeArrivee} onChange={handleInputChange} />
        <StyledInput name="date" type="date" value={formData.date} onChange={handleInputChange} />
        <StyledInput
          name="passengers"
          type="number"
          placeholder="Number of Passengers"
          value={formData.passengers}
          onChange={handleInputChange}
        />
        <StyledButton onClick={handleSubmit}>Book Now</StyledButton>
      </StyledBookingForm>
    </StyledImageAuth>
  );
};

export default MySpaceForm;
