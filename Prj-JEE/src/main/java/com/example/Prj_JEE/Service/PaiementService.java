package com.example.Prj_JEE.Service;

import com.example.Prj_JEE.DTO.PaiementRequest;
import com.example.Prj_JEE.Entities.Paiement;
import com.example.Prj_JEE.Entities.Reservation;
import com.example.Prj_JEE.Repository.PaiementRepository;
import com.example.Prj_JEE.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PaiementService {

    @Autowired
    private PaiementRepository paiementRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    public String effectuerPaiement(PaiementRequest request) {
        Optional<Reservation> reservationOpt = reservationRepository.findById(request.getReservationId());

        if (reservationOpt.isEmpty()) {
            return "❌ Réservation non trouvée !";
        }

        Reservation reservation = reservationOpt.get();
        double montant = reservation.getHoraire().getPrix();

        // Vérifier si le paiement existe déjà
        if (paiementRepository.findByReservationId(request.getReservationId()) != null) {
            return "⚠️ Paiement déjà effectué pour cette réservation.";
        }

        // Simulation d’une validation de carte (remplace une API de paiement)
        if (!validerCarte(request)) {
            return "❌ Paiement refusé : informations de carte incorrectes.";
        }

        // Sauvegarde du paiement
        Paiement paiement = new Paiement(reservation, montant, request.getNumeroCarte(), request.getTitulaireCarte(), request.getDateExpiration(), request.getCvv(), true);
        paiementRepository.save(paiement);

        return "✅ Paiement réussi pour un montant de " + montant + " DH";
    }

    private boolean validerCarte(PaiementRequest request) {
        return request.getNumeroCarte().matches("\\d{16}") &&
                request.getCvv().matches("\\d{3}") &&
                request.getDateExpiration().matches("\\d{2}/\\d{2}");
    }

    public Paiement getPaiementByReservationId(Long reservationId) {
        return paiementRepository.findByReservationId(reservationId);
    }
}
