import { z } from "zod";

export const LoginRequestSchema = z.object({
  email: z.string().email(),
  motDePasse: z.string().min(4, "The password entered is incorrect. Please make sure it’s the right one."),
});

export const SignupSchema = z.object({
  nom: z.string(),
  prenom: z.string(),
  email: z.string().email(),
  telephone: z.string(),
  motDePasse: z.string().min(4, "The password entered is incorrect. Please make sure it’s the right one."),
});

export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type SignupRequest = z.infer<typeof SignupSchema>;
