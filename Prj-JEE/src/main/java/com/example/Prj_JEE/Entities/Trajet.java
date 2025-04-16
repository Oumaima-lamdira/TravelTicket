package com.example.Prj_JEE.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Trajet {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String villeDepart;
    private String villeArrivee;
    @OneToMany(mappedBy = "trajet" , cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Horaire> horaires = new ArrayList<>();

    public Trajet() {
    }

    public Trajet(String villeDepart, String villeArrivee) {
        this.villeDepart = villeDepart;
        this.villeArrivee = villeArrivee;
    }
    public String getVilleDepart() {
        return villeDepart;
    }

    public void setVilleDepart(String villeDepart) {
        this.villeDepart = villeDepart;
    }

    public String getVilleArrivee() {
        return villeArrivee;
    }

    public void setVilleArrivee(String villeArrivee) {
        this.villeArrivee = villeArrivee;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
