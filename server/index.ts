import { Hono } from 'hono';
import { logger } from 'hono/logger';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.use('*', logger());

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono123!',
  });
});

export default app;
