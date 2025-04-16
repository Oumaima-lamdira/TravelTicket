package com.example.Prj_JEE.DTO;

public class ReservationRequest {
    private Long horaireId;
    private String nom;
    private String prenom;
    private String email;
    private String telephone;

    // ✅ Constructeur vide requis pour la désérialisation JSON
    public ReservationRequest() {}

    // ✅ Constructeur avec tous les champs (optionnel, mais utile)
    public ReservationRequest(Long horaireId, String nom, String prenom, String email, String telephone) {
        this.horaireId = horaireId;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
    }

    // ✅ Getters et Setters nécessaires
    public Long getHoraireId() { return horaireId; }
    public void setHoraireId(Long horaireId) { this.horaireId = horaireId; }

    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }

    public String getPrenom() { return prenom; }
    public void setPrenom(String prenom) { this.prenom = prenom; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelephone() { return telephone; }
    public void setTelephone(String telephone) { this.telephone = telephone; }

}
