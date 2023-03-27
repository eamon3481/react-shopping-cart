import { Product, ProductInfo } from '../types';

export const isProductInfo = (product: any): product is ProductInfo => {
  return typeof product.name === 'string' && typeof product.price === 'number';
};

export const isProduct = (product: any): product is Product => {
  return typeof product.id === 'number' && isProductInfo(product);
};
