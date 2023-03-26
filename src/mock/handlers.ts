import db from './db.json';
import { getCartHandlers, getOrderHandlers, getProductHandlers } from './utils';

const { products, carts, orders } = db;

export const handlers = [
  ...getProductHandlers(products),
  ...getCartHandlers(carts),
  ...getOrderHandlers(orders),
];
