package com.example.Prj_JEE.DTO;

public class PaiementRequest {
    private Long reservationId;
    private String numeroCarte;
    private String titulaireCarte;
    private String dateExpiration;
    private String cvv;

    public PaiementRequest() {}

    public PaiementRequest(Long reservationId, String numeroCarte, String titulaireCarte, String dateExpiration, String cvv) {
        this.reservationId = reservationId;
        this.numeroCarte = numeroCarte;
        this.titulaireCarte = titulaireCarte;
        this.dateExpiration = dateExpiration;
        this.cvv = cvv;
    }

    public Long getReservationId() { return reservationId; }
    public void setReservationId(Long reservationId) { this.reservationId = reservationId; }

    public String getNumeroCarte() { return numeroCarte; }
    public void setNumeroCarte(String numeroCarte) { this.numeroCarte = numeroCarte; }

    public String getTitulaireCarte() { return titulaireCarte; }
    public void setTitulaireCarte(String titulaireCarte) { this.titulaireCarte = titulaireCarte; }

    public String getDateExpiration() { return dateExpiration; }
    public void setDateExpiration(String dateExpiration) { this.dateExpiration = dateExpiration; }

    public String getCvv() { return cvv; }
    public void setCvv(String cvv) { this.cvv = cvv; }
}
