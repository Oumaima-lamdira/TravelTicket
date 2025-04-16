package com.example.Prj_JEE.Repository;

import com.example.Prj_JEE.Entities.Horaire;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface HoraireRepository extends JpaRepository<Horaire,Long> {
    List<Horaire> findByTrajetId(Long trajetId);
    List<Horaire> findByTrajetIdAndDate(Long trajetId, LocalDate date);

}
