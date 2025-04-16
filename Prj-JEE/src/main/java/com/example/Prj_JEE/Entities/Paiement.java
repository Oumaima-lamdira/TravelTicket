package com.example.Prj_JEE.Entities;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Paiement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "reservation_id", nullable = false)
    private Reservation reservation;

    private double montant;
    private String methodePaiement = "CARTE"; // Toujours CARTE
    private boolean statut; // true = payé, false = échec

    private String numeroCarte;
    private String titulaireCarte;
    private String dateExpiration;
    private String cvv;

    private LocalDateTime datePaiement;

    public Paiement() {}

    public Paiement(Reservation reservation, double montant, String numeroCarte, String titulaireCarte, String dateExpiration, String cvv, boolean statut) {
        this.reservation = reservation;
        this.montant = montant;
        this.numeroCarte = numeroCarte;
        this.titulaireCarte = titulaireCarte;
        this.dateExpiration = dateExpiration;
        this.cvv = cvv;
        this.statut = statut;
        this.datePaiement = LocalDateTime.now();
    }

    // Getters et Setters
    public Long getId() { return id; }
    public Reservation getReservation() { return reservation; }
    public void setReservation(Reservation reservation) { this.reservation = reservation; }

    public double getMontant() { return montant; }
    public void setMontant(double montant) { this.montant = montant; }

    public boolean isStatut() { return statut; }
    public void setStatut(boolean statut) { this.statut = statut; }

    public String getNumeroCarte() { return numeroCarte; }
    public void setNumeroCarte(String numeroCarte) { this.numeroCarte = numeroCarte; }

    public String getTitulaireCarte() { return titulaireCarte; }
    public void setTitulaireCarte(String titulaireCarte) { this.titulaireCarte = titulaireCarte; }

    public String getDateExpiration() { return dateExpiration; }
    public void setDateExpiration(String dateExpiration) { this.dateExpiration = dateExpiration; }

    public String getCvv() { return cvv; }
    public void setCvv(String cvv) { this.cvv = cvv; }

    public LocalDateTime getDatePaiement() { return datePaiement; }
}
