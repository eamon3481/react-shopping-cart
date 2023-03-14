import { rest } from 'msw';
import db from './db.json';
import { isProduct } from './utils';

const { products } = db;

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.products));
  }),
  rest.get('/products/:id', (req, res, ctx) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === Number(id));
    if (!product)
      return res(ctx.status(404), ctx.json({ message: 'Product not found' }));
    return res(ctx.status(200), ctx.json(product));
  }),
  rest.post('/products', (req, res, ctx) => {
    const product = req.body;
    if (!isProduct(product))
      return res(ctx.status(400), ctx.json({ message: 'Invalid product' }));

    products.push(product);
    return res(ctx.status(201), ctx.json(product));
  }),
];
