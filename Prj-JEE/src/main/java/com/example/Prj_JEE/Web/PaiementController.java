package com.example.Prj_JEE.Web;

import com.example.Prj_JEE.DTO.PaiementRequest;
import com.example.Prj_JEE.Entities.Paiement;
import com.example.Prj_JEE.Service.PaiementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/paiements")
public class PaiementController {

    @Autowired
    private PaiementService paiementService;

    @PostMapping
    public ResponseEntity<String> payerReservation(@RequestBody PaiementRequest request) {
        String message = paiementService.effectuerPaiement(request);
        return ResponseEntity.ok(message);
    }

    @GetMapping("/{reservationId}")
    public ResponseEntity<Paiement> getPaiement(@PathVariable Long reservationId) {
        Paiement paiement = paiementService.getPaiementByReservationId(reservationId);
        return ResponseEntity.ok(paiement);
    }
}
