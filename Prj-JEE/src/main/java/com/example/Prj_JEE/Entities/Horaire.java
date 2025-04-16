package com.example.Prj_JEE.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Horaire {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    private LocalTime heureDepart;
    private LocalTime heureArrivee;
    private Double prix;
    @ManyToOne
    @JoinColumn(name = "trajet_id", nullable = false)
    @JsonIgnore
    private Trajet trajet;
    @OneToMany(mappedBy = "horaire", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Arret> arrets = new ArrayList<>();
    @OneToMany(mappedBy = "horaire", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Reservation> reservations;
    @JsonIgnore
    private int capaciteMax = 5;

    public Horaire() {
    }

    public Horaire( LocalDate date, LocalTime heureDepart, LocalTime heureArrivee, Double prix) {
        this.date = date;
        this.heureDepart = heureDepart;
        this.heureArrivee = heureArrivee;
        this.prix = prix;

    }

    public Horaire(LocalDate date, LocalTime heureDepart, LocalTime heureArrivee) {
        this.date = date;
        this.heureDepart = heureDepart;
        this.heureArrivee = heureArrivee;
    }
    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getHeureArrivee() {
        return heureArrivee;
    }

    public void setHeureArrivee(LocalTime heureArrivee) {
        this.heureArrivee = heureArrivee;
    }

    public LocalTime getHeureDepart() {
        return heureDepart;
    }

    public void setHeureDepart(LocalTime heureDepart) {
        this.heureDepart = heureDepart;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTrajet(Trajet trajet) {
        this.trajet = trajet;
    }

    public Trajet getTrajet() {
        return trajet;
    }

    public List<Arret> getArrets() {
        return arrets;
    }

    public void setArrets(List<Arret> arrets) {
        this.arrets = arrets;
    }

    public Double getPrix() {
        return prix;
    }

    public void setPrix(Double prix) {
        this.prix = prix;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
    public int getCapaciteMax() {
        return capaciteMax;
    }
    @JsonIgnore
    public int getReservationsCount() {
        return reservations != null ? reservations.size() : 0;
    }
    @JsonIgnore
    public boolean isFull() {
        return getReservationsCount() >= capaciteMax;
    }
}
