package com.example.Prj_JEE.Service;

import com.example.Prj_JEE.Entities.Horaire;
import com.example.Prj_JEE.Entities.Reservation;
import com.example.Prj_JEE.Repository.HoraireRepository;
import com.example.Prj_JEE.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private HoraireRepository horaireRepository;

    public Reservation reserverTicket(Long horaireId, String nom, String prenom, String email, String telephone) {
        Horaire horaire = horaireRepository.findById(horaireId)
                .orElseThrow(() -> new IllegalArgumentException("Horaire non trouvé !"));

        // 🔹 Vérifier si l'horaire est déjà complet
        if (horaire.isFull()) {
            throw new IllegalStateException(" Le bus est plein. Veuillez choisir un autre horaire.");
        }

        // 🔹 Ajouter la réservation
        Reservation reservation = new Reservation(nom, prenom, email, telephone, horaire);
        reservationRepository.save(reservation);

        // 🎟️ Mise à jour du numéro de ticket après enregistrement
        reservation.setNumeroTicket(reservation.getId());
        return reservationRepository.save(reservation);
    }

    public Reservation getReservationById(Long id) {
        return reservationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Réservation non trouvée !"));
    }
}
