import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

const router = new Hono();

const schema = z.object({
  id: z.number().int().positive().min(1),
  title: z.string(),
  amount: z.number().int().positive(),
});

const createSchema = schema.omit({ id: true });

const fake: z.infer<typeof schema>[] = [
  {
    id: 1,
    title: 'Lorem ipsum',
    amount: 34,
  },
];

router
  .get('/', async (c) => {
    return c.json({
      shop: fake,
    });
  })
  .post('/', zValidator('json', createSchema), async (c) => {
    const body = await c.req.valid('json');

    fake.push({ ...body, id: fake.length + 1 });

    return c.json({ body });
  })
  .get('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'));

    const item = fake.find((shop) => shop.id === id);

    if (!item) {
      return c.notFound();
    }

    return c.json({ item });
  })
  .delete('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'));
    const index = fake.findIndex((item) => item.id === id);

    if (index === -1) {
      return c.notFound();
    }

    const deleted = fake.filter((item) => item.id !== id);

    return c.json({ deleted });
  });

export { router };
