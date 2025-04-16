package com.example.Prj_JEE.Web;

import com.example.Prj_JEE.Entities.Horaire;
import com.example.Prj_JEE.Service.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/trajets")
public class TrajetController {

    @Autowired
    private service trajetService;

    @PostMapping("/horaires")
    public List<Horaire> getHorairesAvecPrixEtArrets(
            @RequestParam String villeDepart,
            @RequestParam String villeArrivee,
            @RequestParam String date,
            @RequestBody List<Map<String, Object>> passagers) {

        return trajetService.getHorairesAvecPrix(villeDepart, villeArrivee, date, passagers);
    }
}
