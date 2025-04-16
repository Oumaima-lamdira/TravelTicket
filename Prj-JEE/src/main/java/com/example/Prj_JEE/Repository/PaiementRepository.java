package com.example.Prj_JEE.Repository;

import com.example.Prj_JEE.Entities.Paiement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaiementRepository extends JpaRepository<Paiement, Long> {
    Paiement findByReservationId(Long reservationId);
}
