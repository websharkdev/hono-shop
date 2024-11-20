import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { auth } from './auth'; // path to your auth file
import { shop_router } from './routes';

export const runtime = 'edge';

const app = new Hono();

app.use('*', logger());
app.use('/api/*', cors());

app.get('/api/auth/*', (c) => auth.handler(c.req.raw));
app.post('/api/auth/*', (c) => auth.handler(c.req.raw));

app.route('/api/shop', shop_router);

export default app;
