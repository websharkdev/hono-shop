import { CreateProductSchema, ProductSchema } from '@/schemas';
import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';

const router = new Hono();

const fake: z.infer<typeof ProductSchema>[] = [
  {
    id: 1,
    title: 'Lorem ipsum 1',
    description: 'a-man-holding-a-cell-phone-in-his-han',
    imageURL:
      'https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amount: 34,
  },
  {
    id: 2,
    title: 'Lorem ipsum 2',
    description: 'a-man-holding-a-cell-phone-in-his-han',
    imageURL:
      'https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amount: 34,
  },
];

router
  .get('/', async (c) => {
    return c.json({
      data: fake,
    });
  })
  .post('/', zValidator('json', CreateProductSchema), async (c) => {
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
