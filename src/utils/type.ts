import { Product, ProductInfo } from '../types';

export const isProductInfo = (product: any): product is ProductInfo => {
  return (
    typeof product.name === 'string' &&
    typeof product.price === 'number' &&
    typeof product.description === 'string'
  );
};

export const isProduct = (product: any): product is Product => {
  return (
    typeof product.id === 'number' &&
    typeof product.name === 'string' &&
    typeof product.price === 'number' &&
    typeof product.description === 'string'
  );
};
