import { z } from "zod";

export const lastLoggedInUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export type LastLoggedInUserType = z.infer<typeof lastLoggedInUserSchema>;
