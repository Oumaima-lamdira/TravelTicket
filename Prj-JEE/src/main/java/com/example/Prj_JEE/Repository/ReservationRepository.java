package com.example.Prj_JEE.Repository;

import com.example.Prj_JEE.Entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
