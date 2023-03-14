import { rest } from 'msw';
import db from './db.json';
import { isProduct } from './utils';

const { products, carts, orders } = db;

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
  rest.post('/products', async (req, res, ctx) => {
    const product = await req.json();
    if (!isProduct(product))
      return res(ctx.status(400), ctx.json({ message: 'Invalid product' }));

    products.push(product);
    return res(ctx.status(201), ctx.json(product));
  }),

  rest.get('/cart', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(carts));
  }),
  rest.post('/cart', async (req, res, ctx) => {
    const product = await req.json();
    if (!isProduct(product))
      return res(ctx.status(400), ctx.json({ message: 'Invalid cart' }));
    carts.push({
      id: carts.length + 1,
      product,
    });
    return res(ctx.status(201), ctx.json(carts));
  }),
  rest.delete('/cart/:id', (req, res, ctx) => {
    const { id } = req.params;
    const cart = carts.find((c) => c.id === Number(id));
    if (!cart)
      return res(ctx.status(404), ctx.json({ message: 'Cart not found' }));
    carts.splice(carts.indexOf(cart), 1);
    return res(ctx.status(200), ctx.json(cart));
  }),

  rest.get('/orders', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orders));
  }),

  rest.get('/orders/:id', (req, res, ctx) => {
    const { id } = req.params;
    const order = orders.find((o) => o.id === Number(id));
    if (!order)
      return res(ctx.status(404), ctx.json({ message: 'Order not found' }));
    return res(ctx.status(200), ctx.json(order));
  }),

  rest.post('/orders', async (req, res, ctx) => {
    const order = await req.json();
    if (!order)
      return res(ctx.status(400), ctx.json({ message: 'Invalid order' }));
    orders.push(order);
    return res(ctx.status(201), ctx.json(order));
  }),

  rest.delete('/orders/:id', (req, res, ctx) => {
    const { id } = req.params;
    const order = orders.find((o) => o.id === Number(id));
    if (!order)
      return res(ctx.status(404), ctx.json({ message: 'Order not found' }));
    orders.splice(orders.indexOf(order), 1);
    return res(ctx.status(200), ctx.json(order));
  }),
];
