package com.example.Prj_JEE.Service;

import com.example.Prj_JEE.Entities.Arret;
import com.example.Prj_JEE.Entities.Horaire;
import com.example.Prj_JEE.Entities.Trajet;
import com.example.Prj_JEE.Repository.ArretRepository;
import com.example.Prj_JEE.Repository.HoraireRepository;
import com.example.Prj_JEE.Repository.TrajetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class service {
    @Autowired
    private TrajetRepository trajetRepository;
    @Autowired
    private HoraireRepository horaireRepository;
    @Autowired
    private ArretRepository arretRepository;

    public Trajet addTrajet(String villeDepart, String villeArrivee) {
        if (!trajetRepository.existsByVilleDepartAndVilleArrivee(villeDepart, villeArrivee)) {
            Trajet trajet = new Trajet(villeDepart, villeArrivee);
            return trajetRepository.save(trajet);
        } else {
            throw new IllegalArgumentException("Trajet déjà existant !");
        }
    }

    public List<Trajet> getAllTrajets() {
        return trajetRepository.findAll();
    }

    public Trajet getTrajet(String villeDepart, String villeArrivee) {
        return trajetRepository.findByVilleDepartAndVilleArrivee(villeDepart, villeArrivee)
                .orElseThrow(() -> new IllegalArgumentException("Trajet non trouvé !"));
    }

    public Horaire addHoraire(Long trajetId, LocalDate date, LocalTime heureDepart, LocalTime heureArrivee, Double prix) {
        Trajet trajet = trajetRepository.findById(trajetId)
                .orElseThrow(() -> new IllegalArgumentException("Trajet introuvable !"));

        Horaire horaire = new Horaire(date, heureDepart, heureArrivee, prix);
        horaire.setTrajet(trajet);
        return horaireRepository.save(horaire);
    }

    public List<Horaire> getHorairesByTrajetAndDate(Long trajetId, LocalDate date) {
        return horaireRepository.findByTrajetIdAndDate(trajetId, date);
    }

    public void deleteHoraire(Long horaireId) {
        if (horaireRepository.existsById(horaireId)) {
            horaireRepository.deleteById(horaireId);
        } else {
            throw new IllegalArgumentException("Horaire introuvable !");
        }
    }

    public Horaire getHoraireById(Long horaireId) {
        return horaireRepository.findById(horaireId)
                .orElseThrow(() -> new IllegalArgumentException("Horaire non trouvé !"));
    }

    public boolean trajetExists(String villeDepart, String villeArrivee) {
        return trajetRepository.existsByVilleDepartAndVilleArrivee(villeDepart, villeArrivee);
    }

    public List<Horaire> getHorairesByTrajet(Long trajetId) {
        return horaireRepository.findByTrajetId(trajetId);
    }

    public Arret addArret(Long horaireId, String nom, int ordre, LocalTime heureArrivee) {
        Horaire horaire = horaireRepository.findById(horaireId)
                .orElseThrow(() -> new IllegalArgumentException("Horaire non trouvé !"));

        Arret arret = new Arret(nom, ordre, heureArrivee, horaire);
        return arretRepository.save(arret);
    }

    public List<Arret> getArretsByHoraire(Long horaireId) {
        return arretRepository.findByHoraireIdOrderByOrdreAsc(horaireId);
    }

    /**
     * 🔹 Récupérer les horaires et ajuster dynamiquement le prix en fonction du nombre de passagers et du type de passager.
     */
    public List<Horaire> getHorairesAvecPrix(String villeDepart, String villeArrivee, String date, List<Map<String, Object>> passagers) {
        LocalDate localDate = LocalDate.parse(date.trim()); // 🔹 Nettoyer la date
        Trajet trajet = getTrajet(villeDepart, villeArrivee);
        List<Horaire> horaires = getHorairesByTrajetAndDate(trajet.getId(), localDate);

        // ✅ Filtrer les horaires qui ont moins de 50 réservations
        return horaires.stream()
                .filter(h -> h.getReservations().size() < 3)  // ❌ Exclure les horaires pleins
                .map(horaire -> {
                    double prixUnitaire = horaire.getPrix();
                    double prixFinal = calculerPrix(prixUnitaire, passagers);
                    horaire.setPrix(prixFinal);  // 🔥 Modifier seulement le prix
                    horaire.setArrets(getArretsByHoraire(horaire.getId())); // Ajouter les arrêts
                    return horaire;
                })
                .collect(Collectors.toList());

    }
    private double calculerPrix(double prixUnitaire, List<Map<String, Object>> passagers) {
        double prixTotal =0 ;

        for (Map<String, Object> passager : passagers) {
            String type = passager.get("type").toString();
            int quantite = Integer.parseInt(passager.get("quantite").toString());

            if ("ADULTE".equalsIgnoreCase(type)) {
                prixTotal += prixUnitaire *  quantite;
            } else if ("ENFANT".equalsIgnoreCase(type)) {
                prixTotal += (prixUnitaire / 2) * quantite;
            } else {
                prixTotal += prixUnitaire * quantite;  // 🔹 Autre type, prix normal
            }
        }
        return prixTotal;
    }


}
