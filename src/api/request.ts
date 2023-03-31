import { Product } from '../types';
import { API, call } from './API';

export const getProducts = () => {
  return call(() => API.get<Product[]>(`/products`));
};

export const getProduct = (id: string): Promise<Product> => {
  return call(() => API.get(`/products/${id}`));
};
