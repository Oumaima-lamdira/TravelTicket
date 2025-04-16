import { z } from "zod";

export const purchaseResponseSchema = z.object({
  id: z.string(),
  owner: z.string(),
  label: z.string(),
  brand: z.string(),
  model: z.string(),
  price: z.number(),
  store: z.string(),
  images: z.array(z.string()),
  rating: z.number(),
  date: z.string(),
  status: z.string(),
});
export const purchaseRequestSchema = z.object({
  owner: z.string(),
  label: z.string(),
  brand: z.string(),
  model: z.string(),
  price: z.number(),
  store: z.string(),
  images: z.array(z.string()),
});
export const PurchaseRatingSchema = z.object({
  purchaseId: z.string(),
  rating: z.number(),
});

export const trajetRequestSchema = z.array(
  z.object({
    type: z.enum(["ADULTE", "ENFANT"]),
    quantite: z.number(),
  }),
);

export const trajetResponseSchema = z.array(
  z.object({
    id: z.number(),
    date: z.string(),
    heureDepart: z.string(),
    heureArrivee: z.string(),
    prix: z.number(),
    arrets: z.array(z.unknown()),
  }),
);

export type PurchaseResponse = z.infer<typeof purchaseResponseSchema>;
export type PurchaseRequest = z.infer<typeof purchaseRequestSchema>;
export type TrajetRequest = z.infer<typeof trajetRequestSchema>;
export type TrajetResponse = z.infer<typeof trajetResponseSchema>;
export type PurchaseRatingRequest = z.infer<typeof PurchaseRatingSchema>;
