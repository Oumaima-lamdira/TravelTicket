/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React, { useEffect, useState } from "react";

import { searchTrajet } from "~services/purchases/purchase.service";
import type { TrajetRequest } from "~services/purchases/types";

import { StyledContainer, StyledText, StyledTrainItem, StyledWrapper } from "./TrainsList.style";

import { Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import type { FC } from "react";

interface TrainType {
  id: number;
  name: string;
  price: string;
  departure: string;
  arrival: string;
  date: string;
  selected: boolean;
}

const TrainsList: FC = () => {
  const searchParams = useSearchParams();
  const from = searchParams?.get("from") ?? "";
  const to = searchParams?.get("to") ?? "";
  const date = searchParams?.get("date") ?? "";
  const nmbrPassengers = searchParams?.get("passengers");

  const adultCount = Math.floor(Number(nmbrPassengers) / 2);
  const childCount = Number(nmbrPassengers) - adultCount;

  const passengers = [
    { type: "ADULTE", quantite: adultCount },
    { type: "ENFANT", quantite: childCount },
  ];

  const [trains, setTrains] = useState<TrainType[]>([]);
  const [openReservationDialog, setOpenReservationDialog] = useState(false);
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);
  const [, setSelectedTrain] = useState<TrainType | null>(null);
  const [reservationData, setReservationData] = useState({
    horaireId: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });
  const [paymentData, setPaymentData] = useState({
    reservationId: "",
    numeroCarte: "",
    titulaireCarte: "",
    dateExpiration: "",
    cvv: "",
  });
  const [ticketUrl, setTicketUrl] = useState("");

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await searchTrajet(passengers as TrajetRequest, from, to, date);
        const fetchedTrains = response.map((train) => ({
          id: train.id,
          name: `Travel ${train.id}`,
          price: train.prix.toFixed(2),
          departure: train.heureDepart,
          arrival: train.heureArrivee,
          date: train.date,
          selected: true,
        }));
        setTrains(fetchedTrains);
      } catch (error) {
        console.error("Error fetching trains:", error);
        setTrains([]);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchTrains();
  }, [from, to, date, nmbrPassengers]);

  const handleTrainClick = (train: TrainType) => {
    setSelectedTrain(train);
    setReservationData({
      horaireId: train.id.toString(),
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
    });
    setOpenReservationDialog(true);
  };

  const handleReservationSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      const reservation = await response.json();
      setPaymentData((prev) => ({ ...prev, reservationId: reservation.id }));
      setOpenReservationDialog(false);
      setOpenPaymentDialog(true);
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  const handlePaymentSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/paiements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      setTicketUrl(`http://localhost:8081/api/tickets/download/${paymentData.reservationId}`);
      setOpenPaymentDialog(false);
    } catch (error) {
      console.error("Error submitting payment:", error);
    }
  };

  return (
    <StyledWrapper>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Available Travel
      </Typography>
      <StyledContainer view="LIST">
        {trains.length > 0 ? (
          trains.map((train) => (
            <StyledTrainItem
              key={train.id}
              selected={train.selected}
              onClick={() => {
                handleTrainClick(train);
              }}
            >
              <Typography variant="h6">{train.name}</Typography>
              <Typography>From: {train.departure}</Typography>
              <Typography>To: {train.arrival}</Typography>
              <Typography>Date: {train.date}</Typography>
              <Typography>Price: {train.price} DH</Typography>
            </StyledTrainItem>
          ))
        ) : (
          <StyledText>No trains available for the selected date and route.</StyledText>
        )}
      </StyledContainer>

      <Dialog
        open={openReservationDialog}
        onClose={() => {
          setOpenReservationDialog(false);
        }}
      >
        <DialogContent>
          <Typography variant="h6">Reservation Details</Typography>
          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            value={reservationData.prenom}
            onChange={(e) => {
              setReservationData({ ...reservationData, prenom: e.target.value });
            }}
          />
          <TextField
            label="Last Name"
            fullWidth
            margin="normal"
            value={reservationData.nom}
            onChange={(e) => {
              setReservationData({ ...reservationData, nom: e.target.value });
            }}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={reservationData.email}
            onChange={(e) => {
              setReservationData({ ...reservationData, email: e.target.value });
            }}
          />
          <TextField
            label="Phone"
            fullWidth
            margin="normal"
            value={reservationData.telephone}
            onChange={(e) => {
              setReservationData({ ...reservationData, telephone: e.target.value });
            }}
          />
          <Button onClick={handleReservationSubmit} variant="contained" color="primary">
            Submit Reservation
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openPaymentDialog}
        onClose={() => {
          setOpenPaymentDialog(false);
        }}
      >
        <DialogContent>
          <Typography variant="h6">Payment Details</Typography>
          <TextField
            label="Card Number"
            fullWidth
            margin="normal"
            value={paymentData.numeroCarte}
            onChange={(e) => {
              setPaymentData({ ...paymentData, numeroCarte: e.target.value });
            }}
          />
          <TextField
            label="Cardholder Name"
            fullWidth
            margin="normal"
            value={paymentData.titulaireCarte}
            onChange={(e) => {
              setPaymentData({ ...paymentData, titulaireCarte: e.target.value });
            }}
          />
          <TextField
            label="Expiration Date"
            fullWidth
            margin="normal"
            value={paymentData.dateExpiration}
            onChange={(e) => {
              setPaymentData({ ...paymentData, dateExpiration: e.target.value });
            }}
          />
          <TextField
            label="CVV"
            fullWidth
            margin="normal"
            value={paymentData.cvv}
            onChange={(e) => {
              setPaymentData({ ...paymentData, cvv: e.target.value });
            }}
          />
          <Button onClick={handlePaymentSubmit} variant="contained" color="primary">
            Submit Payment
          </Button>
        </DialogContent>
      </Dialog>

      {ticketUrl && (
        <Dialog
          open={Boolean(ticketUrl)}
          onClose={() => {
            setTicketUrl("");
          }}
        >
          <DialogContent>
            <Typography variant="h6">Ticket</Typography>
            <Button href={ticketUrl} target="_blank" variant="contained" color="primary">
              Download Ticket
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </StyledWrapper>
  );
};

export default TrainsList;
