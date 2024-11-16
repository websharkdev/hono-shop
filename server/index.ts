import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { shop_router } from './routes';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.use('*', logger());

app.route('/shop', shop_router);

export default app;
