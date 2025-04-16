package com.example.Prj_JEE.Service;

import com.example.Prj_JEE.Entities.Reservation;
import com.example.Prj_JEE.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.xhtmlrenderer.pdf.ITextRenderer;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import javax.imageio.ImageIO;
import java.util.Optional;

@Service
public class TicketService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private TemplateEngine templateEngine;

    public byte[] genererTicketPDF(Long reservationId) throws Exception {
        Optional<Reservation> reservationOpt = reservationRepository.findById(reservationId);

        if (reservationOpt.isEmpty()) {
            throw new IllegalArgumentException("❌ Réservation avec l'ID " + reservationId + " introuvable !");
        }

        Reservation reservation = reservationOpt.get();

        // ✅ 1️⃣ Générer les données JSON pour le QR Code
        String qrCodeData = generateTicketJson(reservation);
        String qrCodeBase64 = generateQRCodeBase64(qrCodeData, 200, 200);

        // ✅ 2️⃣ Créer le contexte Thymeleaf
        Context context = new Context();
        context.setVariable("reservation", reservation);
        context.setVariable("qrCode", qrCodeBase64); // 🔥 Correction ici

        // ✅ 3️⃣ Générer le HTML à partir du template Thymeleaf
        String htmlContent = templateEngine.process("ticket", context);

        // ✅ 4️⃣ Convertir le HTML en PDF avec Flying Saucer
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ITextRenderer renderer = new ITextRenderer();
        renderer.setDocumentFromString(htmlContent);
        renderer.layout();
        renderer.createPDF(outputStream, false);
        renderer.finishPDF();

        return outputStream.toByteArray();
    }

    /**
     * 🔹 Générer les données JSON pour le QR Code
     */
    private String generateTicketJson(Reservation reservation) throws Exception {
        Map<String, Object> ticketData = new HashMap<>();
        ticketData.put("ticketId", reservation.getId());
        ticketData.put("nom", reservation.getNom());
        ticketData.put("prenom", reservation.getPrenom());
        ticketData.put("telephone", reservation.getTelephone());
        ticketData.put("depart", reservation.getHoraire().getTrajet().getVilleDepart());
        ticketData.put("arrivee", reservation.getHoraire().getTrajet().getVilleArrivee());
        ticketData.put("date", reservation.getHoraire().getDate().toString());
        ticketData.put("heure", reservation.getHoraire().getHeureDepart().toString());
        ticketData.put("prix", reservation.getHoraire().getPrix() + " MAD");
        ticketData.put("validation_url", "http://localhost:8081/api/tickets/validate/" + reservation.getId());

        // Convertir la Map en JSON
        return new ObjectMapper().writeValueAsString(ticketData);
    }

    /**
     * 🔹 Génération du QR Code en Base64
     */
    public static String generateQRCodeBase64(String text, int width, int height) throws Exception {
        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        Map<EncodeHintType, Object> hints = new HashMap<>();
        hints.put(EncodeHintType.CHARACTER_SET, StandardCharsets.UTF_8.name());

        BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE, width, height, hints);
        BufferedImage bufferedImage = MatrixToImageWriter.toBufferedImage(bitMatrix);

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ImageIO.write(bufferedImage, "png", outputStream);
        return Base64.getEncoder().encodeToString(outputStream.toByteArray());
    }

    /**
     * 🔹 Vérifier si un ticket est valide via l'ID de réservation
     */
    public boolean verifierTicket(Long reservationId) {
        return reservationRepository.existsById(reservationId);
    }


}
