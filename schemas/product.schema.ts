import { z } from 'zod';

export const schema = z.object({
  id: z.number().int().positive().min(1),
  description: z.string(),
  imageURL: z.string(),
  title: z.string(),
  amount: z.number().positive(),
});

export const createSchema = schema.omit({ id: true });
