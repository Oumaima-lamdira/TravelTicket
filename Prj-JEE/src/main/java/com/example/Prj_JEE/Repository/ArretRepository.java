package com.example.Prj_JEE.Repository;

import com.example.Prj_JEE.Entities.Arret;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ArretRepository extends JpaRepository<Arret, Long> {
    List<Arret> findByHoraireIdOrderByOrdreAsc(Long horaireId);
}
