import {
  ResponseResolver,
  RestRequest,
  PathParams,
  RestContext,
  DefaultBodyType,
  rest,
} from 'msw';
import { isProduct, isProductInfo } from '../utils';

export const getSpecificItem =
  <T extends { id: number } = any>(
    items: T[]
  ): ResponseResolver<
    RestRequest<never, PathParams<string>>,
    RestContext,
    DefaultBodyType
  > =>
  (req, res, ctx) => {
    const { id } = req.params;
    const item = items.find((i) => i.id === Number(id));
    if (!item)
      return res(ctx.status(404), ctx.json({ message: 'Item not found' }));
    return res(ctx.status(200), ctx.json(item));
  };

export const deleteItem =
  <T extends { id: number } = any>(items: T[]) =>
  (id: number) => {
    return items.filter((i) => i.id !== id);
  };

export const getProductHandlers = (products: any) => [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),

  rest.get('/products/:id', getSpecificItem(products)),

  rest.post('/products', async (req, res, ctx) => {
    const product = await req.json();
    if (!isProductInfo(product))
      return res(ctx.status(400), ctx.json({ message: 'Invalid product' }));

    products.push({
      id: products.length + 1,
      ...product,
    });
    return res(ctx.status(201), ctx.json(product));
  }),
];

export const getCartHandlers = (carts: any) => [
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
    return res(ctx.status(200), ctx.json(deleteItem(carts)(Number(id))));
  }),
];

export const getOrderHandlers = (orders: any) => [
  rest.get('/orders', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orders));
  }),
  rest.post('/orders', async (req, res, ctx) => {
    const order = await req.json();
    if (!order)
      return res(ctx.status(400), ctx.json({ message: 'Invalid order' }));
    orders.push(order);
    return res(ctx.status(201), ctx.json(order));
  }),
  rest.get('/orders/:id', getSpecificItem(orders)),
  rest.delete('/orders/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(deleteItem(orders)(Number(id))));
  }),
];
