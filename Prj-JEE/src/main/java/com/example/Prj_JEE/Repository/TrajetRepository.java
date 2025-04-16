package com.example.Prj_JEE.Repository;

import com.example.Prj_JEE.Entities.Trajet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TrajetRepository extends JpaRepository<Trajet,Long> {
    Optional<Trajet> findByVilleDepartAndVilleArrivee(String villeDepart, String villeArrivee);
    boolean existsByVilleDepartAndVilleArrivee(String villeDepart,String villeArrivee);
}

