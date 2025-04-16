package com.example.Prj_JEE.Web;

import com.example.Prj_JEE.Entities.Arret;
import com.example.Prj_JEE.Service.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/api/arrets")
public class ArretController {

    @Autowired
    private service arretService;

    @GetMapping("/{horaireId}")
    public List<Arret> getArrets(@PathVariable Long horaireId) {
        return arretService.getArretsByHoraire(horaireId);
    }
}
