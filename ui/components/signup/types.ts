import { z } from "zod";

export const LoginRequestSchema = z.object({
  email: z
    .string()
    .endsWith("@nimbleways.com", { message: "There seems to be an error in your email address, please verify it!" })
    .email(),
  password: z.string().min(4, "The password entered is incorrect. Please make sure it’s the right one."),
});

export const LoginResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.string(),
  enabled: z.nullable(z.boolean()),
  employmentDate: z.string(),
});
export const SignupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(4, "The password entered is incorrect. Please make sure it’s the right one."),
});
export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export type signup = z.infer<typeof SignupSchema>;
