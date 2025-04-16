/*
package com.example.Prj_JEE;

import com.example.Prj_JEE.Entities.Horaire;
import com.example.Prj_JEE.Entities.Trajet;
import com.example.Prj_JEE.Repository.HoraireRepository;
import com.example.Prj_JEE.Repository.TrajetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;

@Component
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(TrajetRepository trajetRepository, HoraireRepository horaireRepository) {
        return args -> {
            // Initialiser les trajets
            Trajet trajet1 = new Trajet("Casablanca", "Rabat");
            Trajet trajet2 = new Trajet("Rabat", "Marrakech");
            Trajet trajet3 = new Trajet("Casablanca", "Marrakech");

            trajet1 = trajetRepository.save(trajet1);
            trajet2 = trajetRepository.save(trajet2);
            trajet3 = trajetRepository.save(trajet3);

            // Initialiser les horaires
            LocalDate date = LocalDate.now();

            horaireRepository.save(new Horaire(date, LocalTime.of(8, 0), LocalTime.of(9, 30), trajet1));
            horaireRepository.save(new Horaire(date, LocalTime.of(10, 0), LocalTime.of(11, 30), trajet1));

            horaireRepository.save(new Horaire(date, LocalTime.of(12, 0), LocalTime.of(14, 0), trajet2));
            horaireRepository.save(new Horaire(date, LocalTime.of(15, 0), LocalTime.of(17, 0), trajet2));

            horaireRepository.save(new Horaire(date, LocalTime.of(18, 0), LocalTime.of(21, 0), trajet3));
            horaireRepository.save(new Horaire(date, LocalTime.of(22, 0), LocalTime.of(23, 59), trajet3));

            System.out.println("Base de données initialisée avec succès !");
        };
    }
}
*/