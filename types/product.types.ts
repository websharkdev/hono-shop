import { ProductSchema } from '@/schemas';
import { z } from 'zod';

export interface ProductItemProps extends z.infer<typeof ProductSchema> {
  status: 'success' | 'pending' | 'error';
}
