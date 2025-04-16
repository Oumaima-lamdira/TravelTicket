package com.example.Prj_JEE.Web;

import com.example.Prj_JEE.Service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @GetMapping("/download/{reservationId}")
    public ResponseEntity<?> telechargerTicket(@PathVariable Long reservationId) {
        try {
            byte[] pdfBytes = ticketService.genererTicketPDF(reservationId);

            if (pdfBytes == null) {
                return ResponseEntity.badRequest().body("❌ Erreur : Impossible de générer le ticket. Vérifiez l'ID de la réservation.");
            }

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDispositionFormData("attachment", "ticket_reservation_" + reservationId + ".pdf");

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(pdfBytes);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("❌ Erreur : " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("❌ Erreur interne du serveur : " + e.getMessage());
        }
    }

    @GetMapping("/validate/{reservationId}")
    public ResponseEntity<?> validerTicket(@PathVariable Long reservationId) {
        try {
            boolean estValide = ticketService.verifierTicket(reservationId);

            if (!estValide) {
                return ResponseEntity.badRequest().body("❌ Ticket invalide ou non trouvé !");
            }

            return ResponseEntity.ok("✅ Ticket valide ! Numéro : " + reservationId);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("❌ Erreur interne du serveur : " + e.getMessage());
        }
    }


}
