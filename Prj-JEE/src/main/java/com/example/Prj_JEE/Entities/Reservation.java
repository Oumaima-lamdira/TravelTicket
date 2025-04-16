package com.example.Prj_JEE.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private Long numeroTicket;

    @ManyToOne
    @JoinColumn(name = "horaire_id", nullable = false)
    @JsonIgnore
    private Horaire horaire;
    @OneToOne(mappedBy = "reservation", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Paiement paiement;
    public Reservation() {}

    public Reservation(String nom, String prenom, String email, String telephone, Horaire horaire) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.horaire = horaire;
    }

    // Getters et Setters
    public Long getId() { return id; }
    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }

    public String getPrenom() { return prenom; }
    public void setPrenom(String prenom) { this.prenom = prenom; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelephone() { return telephone; }
    public void setTelephone(String telephone) { this.telephone = telephone; }

    public Horaire getHoraire() { return horaire; }
    public void setHoraire(Horaire horaire) { this.horaire = horaire; }
    public Long getHoraireId() {
        return this.horaire != null ? this.horaire.getId() : null;
    }

    public Long getNumeroTicket() {
        return numeroTicket;
    }

    public void setNumeroTicket(Long numeroTicket) {
        this.numeroTicket = numeroTicket;
    }

    @PostPersist
    public void assignNumeroTicket() {
        this.numeroTicket = this.id; // 🎟️ Assigner le numéro de ticket après la persistance
    }
}
