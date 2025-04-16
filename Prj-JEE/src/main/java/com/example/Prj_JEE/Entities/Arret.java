package com.example.Prj_JEE.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.time.LocalTime;

@Entity
public class Arret {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private int ordre;
    private LocalTime heureArrivee; // Nouvelle colonne pour l'heure d'arrivée

    @ManyToOne
    @JoinColumn(name = "horaire_id", nullable = false)
    @JsonIgnore
    private Horaire horaire;

    public Arret() {}

    public Arret(String nom, int ordre, LocalTime heureArrivee, Horaire horaire) {
        this.nom = nom;
        this.ordre = ordre;
        this.heureArrivee = heureArrivee;
        this.horaire = horaire;
    }

    // Getters et Setters
    public Long getId() { return id; }
    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }
    public int getOrdre() { return ordre; }
    public void setOrdre(int ordre) { this.ordre = ordre; }
    public LocalTime getHeureArrivee() { return heureArrivee; }
    public void setHeureArrivee(LocalTime heureArrivee) { this.heureArrivee = heureArrivee; }
    public Horaire getHoraire() { return horaire; }
    public void setHoraire(Horaire horaire) { this.horaire = horaire; }
}
