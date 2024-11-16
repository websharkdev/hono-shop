import app from '@/server';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

export const GET = handle(app);
