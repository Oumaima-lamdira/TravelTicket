package com.example.Prj_JEE.Web;

import com.example.Prj_JEE.DTO.ReservationRequest;
import com.example.Prj_JEE.Entities.Reservation;
import com.example.Prj_JEE.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin("*")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping
    public ResponseEntity<Reservation> reserverTicket(@RequestBody ReservationRequest request) {
        Reservation reservation= new Reservation();
        try {
             reservation = reservationService.reserverTicket(
                    request.getHoraireId(),
                    request.getNom(),
                    request.getPrenom(),
                    request.getEmail(),
                    request.getTelephone()
            );
            return ResponseEntity.ok(reservation);
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(reservation);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getReservation(@PathVariable Long id) {
        return ResponseEntity.ok(reservationService.getReservationById(id));
    }
}
